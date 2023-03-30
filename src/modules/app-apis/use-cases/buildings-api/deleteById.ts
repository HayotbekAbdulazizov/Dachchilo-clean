import {ObjectId} from "mongoose";
import {IBuildingDocument} from "../../../../domain/models/building";
import {inject, injectable} from "inversify";
import {IBuildingRepository} from "../../../../domain/interfaces/repositories/BuildingRepository";
import {symbols} from "../../../../dependencies/symbols";


export interface IDeleteBuildingByIdUseCase {
    execute(id: string | ObjectId): Promise<IBuildingDocument | null>
}



@injectable()
export class DeleteBuildingByIdUseCase implements IDeleteBuildingByIdUseCase{

    constructor(
        @inject<IBuildingRepository>(symbols.DB.repositories.buildingRepository)
        private buildingRepository: IBuildingRepository
    ) {}

    async execute(id: string | ObjectId): Promise<IBuildingDocument | null> {
        try{
            const building = await this.buildingRepository.deleteOne({_id: id})
            return building;
        }catch (err: any) {
            throw new Error(err.message)
        }
    }



}