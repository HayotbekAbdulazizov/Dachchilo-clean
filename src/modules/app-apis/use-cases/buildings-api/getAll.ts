import {IBuildingDocument} from "../../../../domain/models/BuildingModel";
import { FilterQuery } from "mongoose"
import { IBuildingRepository } from "../../../../domain/interfaces/repositories/BuildingRepository";
import {inject, injectable} from "inversify";
import {symbols} from "../../../../dependencies/symbols";

export interface IGetAllBuildingsUseCase{
    execute(query: FilterQuery<IBuildingDocument>): Promise<IBuildingDocument[]>
}



@injectable()
export class GetAllBuildingsUseCase implements IGetAllBuildingsUseCase {
    constructor(
        @inject<IBuildingRepository>(symbols.DB.repositories.buildingRepository)
        private buildingRepository: IBuildingRepository,
    ) {}

    async execute(query: FilterQuery<IBuildingDocument>): Promise<IBuildingDocument[]> {
        try{
            return await this.buildingRepository.get(query)
        }catch (err: any) {
            throw new Error(err.message)
        }
    }

}

