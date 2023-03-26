import {Request, Response} from "express";
import { IBuildingDocument } from "../../../../domain/models/building";
import {
    GetAllBuildingsUseCaseIns,
    IGetAllBuildingsUseCase
} from "../../../../modules/app-apis/use-cases/buildings-api/getAll";


export interface IBuildingController{
    getAll(req: Request, res: Response): Promise<Response>
    // create(req: Request, res: Response): Promise<IBuildingModel>
}




export class BuildingController implements IBuildingController {
    private getAllBuildingsUseCase: IGetAllBuildingsUseCase;
    constructor() {
        this.getAllBuildingsUseCase = GetAllBuildingsUseCaseIns
    }

    async getAll(req: Request, res: Response): Promise<Response>{
        const body = req.body
        const responseData = await this.getAllBuildingsUseCase.execute({})
        return res.json(responseData);
    }
}




export const BuildingControllerIns = new BuildingController()