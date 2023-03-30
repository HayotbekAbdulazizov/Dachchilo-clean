import {Request, Response} from "express";
import {
    IGetAllBuildingsUseCase
} from "../../../../modules/app-apis/use-cases/buildings-api/getAll";

import {inject, injectable} from "inversify";
import "reflect-metadata"
import {symbols} from "../../../../dependencies/symbols";
import {ICreateBuildingUseCase} from "../../../../modules/app-apis/use-cases/buildings-api/create";
import {IGetBuildingByIdUseCase} from "../../../../modules/app-apis/use-cases/buildings-api/getById";
import { IUpdateBuildingByIdUseCase } from "../../../../modules/app-apis/use-cases/buildings-api/updateById";
import {IDeleteBuildingByIdUseCase} from "../../../../modules/app-apis/use-cases/buildings-api/deleteById";

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


    async getAll(_req: Request, res: Response): Promise<Response>{

        try{
            const responseData = await this.getAllBuildingsUseCase.execute({})
            return res.json(responseData);

        }catch (err: any) {
            return res.status(403).send(err.message)
        }
    }


    async create(req: Request, res: Response): Promise<Response>{
        try{
            const data = req.body
            const building = await this.createBuildingUseCase.execute(data)
            return res.status(201).send(building)

        }catch (err: any) {
            return res.status(403).send(err.message)
        }
    }


    async getById(req: Request, res: Response): Promise<Response>{
        try{
            const id = req.params.id
            const building = await this.getBuildingByIdUseCase.execute(id)
            return res.status(200).send(building)
        }catch (err: any) {
            return res.status(403).send(err.message)
        }
    }


    async updateById(req: Request, res: Response): Promise<Response>{
        console.log("-- Building controller UPDATE -- ")
        try{
            const id = req.params.id
            const data = req.body
            console.log(id, data)
            const building = await this.updateBuildingByIdUseCase.execute(id, data)
            console.log("--- Building ", building)
            return res.status(300).send(building)

        }catch (err: any) {
            return res.status(403).send(err.message)
        }
    }



    async deleteById(req: Request, res: Response): Promise<Response>{
        const id = req.params.id

        try{
            const building = await this.deleteBuildingByIdUseCase.execute(id)
            return res.status(203).json(building)
        }catch (err: any){
            return res.status(403).json(err.message)
        }
    }


}


