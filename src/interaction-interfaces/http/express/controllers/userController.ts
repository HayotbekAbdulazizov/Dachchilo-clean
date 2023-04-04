import {Request, Response} from "express";
import {inject, injectable} from "inversify";
import "reflect-metadata"
import {symbols} from "../../../../dependencies/symbols";
import {errorHandlerController} from "../../../../shared/utils/errorHandler";
import {dataValidator} from "../../../../shared/validators/incomingDataValidator";
import {loginUserSchema, registerUserSchema, updateUserSchema} from "../validationSchemas/userSchema";
import {IRegisterUserUseCase} from "../../../../modules/app-apis/use-cases/user-api/register";
import {ILoginUserUseCase} from "../../../../modules/app-apis/use-cases/user-api/login";
import {IDeleteUserByIdUseCase} from "../../../../modules/app-apis/use-cases/user-api/deleteById";
import {IUpdateUserByIdUseCase} from "../../../../modules/app-apis/use-cases/user-api/updateById";
import {IGetUserByIdUseCase} from "../../../../modules/app-apis/use-cases/user-api/getById";
import {signJwt, verifyJwt} from "../../../../shared/utils/jwt";
import {omit} from "lodash"
import {jwtAuth} from "../../../../shared/utils/auth";
import {ROLE} from "../../../../domain/models/UserModel";


export interface IUserController{
    register(req: Request, res: Response): Promise<Response>
    login(req: Request, res: Response): Promise<Response>
    updateById(req: Request, res: Response): Promise<Response>
    deleteOneById(req: Request, res: Response): Promise<Response>
    getById(req: Request, res: Response): Promise<Response>

    // delete(req: Request, res: Response): Promise<Response>
    // update(req: Request, res: Response): Promise<Response>
}





@injectable()
export class UserController implements IUserController {
    constructor(
        @inject<IRegisterUserUseCase>(symbols.useCases.user.register)
        private registerUserUseCase: IRegisterUserUseCase,

        @inject<ILoginUserUseCase>(symbols.useCases.user.login)
        private loginUserUseCase: ILoginUserUseCase,

        @inject<IDeleteUserByIdUseCase>(symbols.useCases.user.deleteById)
        private deleteUserByIdUseCase: IDeleteUserByIdUseCase,

        // @inject<IGetUserByEmailUseCase>(symbols.useCases.user.getByEmail)
        // private getUserByEmailUseCase: IGetUserByEmailUseCase,

        @inject<IUpdateUserByIdUseCase>(symbols.useCases.user.updateById)
        private updateUserByIdUseCase: IUpdateUserByIdUseCase,

        @inject<IGetUserByIdUseCase>(symbols.useCases.user.getById)
        private getUserByIdUseCase: IGetUserByIdUseCase,
    ) {}



    @errorHandlerController
    async register(req: Request, res: Response): Promise<Response>{
        dataValidator(registerUserSchema ,req.body)

        const user = await this.registerUserUseCase.execute(req.body)

        const token = signJwt(user.toObject())    // ERROR

        const response: Record<string, any> = {
            user: user,
            token: token
        }

        return res.status(201).json(response)
    }




    async login(req: Request, res: Response): Promise<Response>{
        dataValidator(loginUserSchema, req.body)

        const user = await this.loginUserUseCase.execute(req.body)
        console.log(user, "-- User");
        const token = signJwt(user.toObject())

        const response = {
            user: user,
            token : token
        }

        return res.status(200).json(response)
    }




    @errorHandlerController
    async updateById(req: Request, res: Response): Promise<Response>{
        const user = jwtAuth(req, [ROLE.ADMIN])

        dataValidator(updateUserSchema, req.body)
        const user = await this.getUserByIdUseCase.execute(req.params.id)

        if (!user) {
            throw new Error("User Not found")
        }

        const decodedUser = verifyJwt(req.headers.authorization)
        if(user._id !== decodedUser._id){
            throw new Error('You are not the author')
        }

        const id = req.params.id
        const data = req.body

        const updatedUser = await this.updateUserByIdUseCase.execute(id, data)
        if (!updatedUser) throw new Error('Something went wring in updating user ')

        const token = signJwt(updatedUser)

        const response = {
            user: updatedUser,
            token: token
        }

        return res.status(300).send(response)
    }





    @errorHandlerController
    async deleteOneById(req: Request, res: Response): Promise<Response>{
        const user = await this.getUserByIdUseCase.execute(req.params.id)

        if(!user) throw new Error("User not found")

        const decodedUser = verifyJwt(req.headers.authorization)

        if(user._id !== decodedUser._id){
            throw new Error('You are not the author')
        }

        const id = req.params.id

        const deletedUser = await this.deleteUserByIdUseCase.execute(id)

        if (!deletedUser) throw new Error('Something went wring in deleting user ')

        const token = signJwt(deletedUser)

        const response = {
            user: deletedUser,
            token: token
        }

        return res.status(203).json(response)
    }





    @errorHandlerController
    async getById(req: Request, res: Response): Promise<Response>{

        const response: Record<string, any> = {}

        const id = req.params.id
        const user = await this.getUserByIdUseCase.execute(id)
        if(!user) throw new Error('User not found')

        const decodedUser = verifyJwt(req.headers.authorization)
        if(decodedUser._id !== user._id) {
            response['user'] = omit(user, ['password'])
        }

        response['token'] = signJwt(user)

        return res.status(200).json(response)
    }



}


