import {ObjectId} from "mongoose";
import {IBuildingDocument} from "../../../../domain/models/BuildingModel";
import {inject, injectable} from "inversify";
import {IBuildingRepository} from "../../../../domain/interfaces/repositories/BuildingRepository";
import {symbols} from "../../../../dependencies/symbols";
import {globalErrorHandler} from "../../../../shared/utils/errorHandler";


export interface IDeleteBuildingByIdUseCase {
    execute(id: string | ObjectId): Promise<IBuildingDocument | null>
}



@injectable()
export class DeleteBuildingByIdUseCase implements IDeleteBuildingByIdUseCase{

    constructor(
        @inject<IBuildingRepository>(symbols.DB.repositories.buildingRepository)
        private buildingRepository: IBuildingRepository
    ) {}


    @globalErrorHandler
    async execute(id: string | ObjectId): Promise<IBuildingDocument | null> {
        const building = await this.buildingRepository.deleteOne({_id: id})
        return building;
    }



}