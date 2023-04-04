import {Request, Response} from "express";
import {IGetAllBuildingsUseCase} from "../../../../modules/app-apis/use-cases/buildings-api/getAll";

import {inject, injectable} from "inversify";
import "reflect-metadata"
import {symbols} from "../../../../dependencies/symbols";
import {ICreateBuildingUseCase} from "../../../../modules/app-apis/use-cases/buildings-api/create";
import {IGetBuildingByIdUseCase} from "../../../../modules/app-apis/use-cases/buildings-api/getById";
import {IUpdateBuildingByIdUseCase} from "../../../../modules/app-apis/use-cases/buildings-api/updateById";
import {IDeleteBuildingByIdUseCase} from "../../../../modules/app-apis/use-cases/buildings-api/deleteById";
import {errorHandlerController} from "../../../../shared/utils/errorHandler";
import {dataValidator} from "../../../../shared/validators/incomingDataValidator";
import {createBuildingSchema, updateBuildingSchema} from "../validationSchemas/buildingSchema";
import {jwtAuth} from "../../../../shared/utils/auth";
import {ROLE} from "../../../../domain/models/UserModel";




export interface IBuildingController{
    getAll(req: Request, res: Response): Promise<Response>
    create(req: Request, res: Response): Promise<Response>
    getById(req: Request, res: Response): Promise<Response>
    updateById(req: Request, res: Response): Promise<Response>
    deleteById(req: Request, res: Response): Promise<Response>
}





@injectable()
export class BuildingController implements IBuildingController {
    constructor(
        @inject<IGetAllBuildingsUseCase>(symbols.useCases.building.getAll)
        private getAllBuildingsUseCase: IGetAllBuildingsUseCase,
        @inject<ICreateBuildingUseCase>(symbols.useCases.building.create)
        private createBuildingUseCase: ICreateBuildingUseCase,
        @inject<IGetBuildingByIdUseCase>(symbols.useCases.building.getById)
        private getBuildingByIdUseCase: IGetBuildingByIdUseCase,
        @inject<IUpdateBuildingByIdUseCase>(symbols.useCases.building.updateById)
        private updateBuildingByIdUseCase: IUpdateBuildingByIdUseCase,
        @inject<IDeleteBuildingByIdUseCase>(symbols.useCases.building.deleteById)
        private deleteBuildingByIdUseCase: IDeleteBuildingByIdUseCase,
    ) {}



    @errorHandlerController
    async getAll(req: Request, res: Response): Promise<Response>{
        const responseData = await this.getAllBuildingsUseCase.execute(req.query)
        return res.json(responseData);
    }



    @errorHandlerController
    async create(req: Request, res: Response): Promise<Response>{
        dataValidator(createBuildingSchema ,req.body)
        const user = jwtAuth(req, [ ROLE.USER ])

        const images = req.files as Express.Multer.File[];

        req.body['image'] = images
        req.body['author'] = user

        const building = await this.createBuildingUseCase.execute(req.body)
        return res.status(201).send(building)
    }



    @errorHandlerController
    async getById(req: Request, res: Response): Promise<Response>{
        const id = req.params.id
        const building = await this.getBuildingByIdUseCase.execute(id)
        return res.status(200).send(building)
    }



    @errorHandlerController
    async updateById(req: Request, res: Response): Promise<Response>{
        const user = jwtAuth(req, [ ROLE.USER ])

        const id = req.params.id
        const data = req.body

        const building = await this.getBuildingByIdUseCase.execute(id)

        if (!building) throw new Error("Building not found")
        if(building.author !== user._id) throw new Error("You are not the author")

        dataValidator(updateBuildingSchema, req.body)

        const updatedBuilding = await this.updateBuildingByIdUseCase.execute(id, data)
        return res.status(300).send(updatedBuilding)

    }



    @errorHandlerController
    async deleteById(req: Request, res: Response): Promise<Response>{
        const user = jwtAuth(req, [ ROLE.USER, ROLE.ADMIN ])

        const id = req.params.id
        const building = await this.getBuildingByIdUseCase.execute(id)

        if(!building) throw new Error('Building was not found')
        if(building.author !== user._id) throw new Error('You are not the author')

        const deletedBuilding = await this.deleteBuildingByIdUseCase.execute(id)
        return res.status(203).json(deletedBuilding)
    }


}


