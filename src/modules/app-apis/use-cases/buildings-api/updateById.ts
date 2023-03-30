import {inject, injectable} from "inversify";
import {ObjectId} from "mongoose";
import {IBuildingDocument, IBuildingInput} from "../../../../domain/models/building";
import {IBuildingRepository} from "../../../../domain/interfaces/repositories/BuildingRepository";
import {symbols} from "../../../../dependencies/symbols";


export interface IUpdateBuildingByIdUseCase{
    execute(id: string | ObjectId, data: IBuildingInput): Promise<IBuildingDocument | null>
}


@injectable()
export class UpdateBuildingByIdUseCase implements IUpdateBuildingByIdUseCase{
    constructor(
        @inject<IBuildingRepository>(symbols.DB.repositories.buildingRepository)
        private buildingRepository: IBuildingRepository
    ) {}


    async execute(id: string | ObjectId, data: IBuildingInput): Promise<IBuildingDocument | null> {
        try{
            const building = await this.buildingRepository.updateOne({_id: id}, data, { new: true });
            return building;
        }catch (err: any){
            throw new Error(err.message)
        }
    }

}