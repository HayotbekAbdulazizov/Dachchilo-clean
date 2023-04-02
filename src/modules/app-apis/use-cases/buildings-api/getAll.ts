import {IBuildingDocument} from "../../../../domain/models/BuildingModel";
import { FilterQuery } from "mongoose"
import { IBuildingRepository } from "../../../../domain/interfaces/repositories/BuildingRepository";
import {inject, injectable} from "inversify";
import {symbols} from "../../../../dependencies/symbols";
import {globalErrorHandler} from "../../../../shared/utils/errorHandler";

export interface IGetAllBuildingsUseCase{
    execute(query: FilterQuery<IBuildingDocument>): Promise<IBuildingDocument[]>
}



@injectable()
export class GetAllBuildingsUseCase implements IGetAllBuildingsUseCase {
    constructor(
        @inject<IBuildingRepository>(symbols.DB.repositories.buildingRepository)
        private buildingRepository: IBuildingRepository,
    ) {}

    @globalErrorHandler
    async execute(query: FilterQuery<IBuildingDocument>): Promise<IBuildingDocument[]> {
        return await this.buildingRepository.get(query)
    }

}

