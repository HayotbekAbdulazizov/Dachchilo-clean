import {inject, injectable} from "inversify";
import {symbols} from "../../../../dependencies/symbols";
import {globalErrorHandler} from "../../../../shared/utils/errorHandler";
import {IUserDocument, IUserLoginInput} from "../../../../domain/models/UserModel";
import {IUserRepository} from "../../../../domain/interfaces/repositories/UserRepository";


export interface ILoginUserUseCase {
    execute(data: IUserLoginInput): Promise<IUserDocument>
}





@injectable()
export class LoginUserUseCase implements ILoginUserUseCase{
    constructor(
        @inject<IUserRepository>(symbols.DB.repositories.userRepository)
        private userRepository: IUserRepository,
    ) {}


    @globalErrorHandler
    async execute(data: IUserLoginInput): Promise<IUserDocument> {
        const user = await this.userRepository.getOne({email: data.email})

        if(!user){
            throw new Error("User with this email Not found")
        }

        const isValid = await user.comparePassword(data.password)

        if(!isValid) {
            throw new Error("Password is Incorrect")
        }

        return user;

    }


}