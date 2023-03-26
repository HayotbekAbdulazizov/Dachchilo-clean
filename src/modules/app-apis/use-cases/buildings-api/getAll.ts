import {IBuildingDocument} from "../../../../domain/models/building";
import { FilterQuery } from "mongoose"
import { IBuildingRepository } from "../../../../domain/interfaces/repositories/BuildingRepository";
import {BuildingRepositoryIns} from "../../../../infrastructure/mongoDB/repositories/buildingRepository";

export interface IGetAllBuildingsUseCase{
    execute(query: FilterQuery<IBuildingDocument>): Promise<IBuildingDocument[]>
}




export class GetAllBuildingsUseCase implements IGetAllBuildingsUseCase {
    private buildingRepository: IBuildingRepository;
    constructor() {
        this.buildingRepository = BuildingRepositoryIns
    }

    async execute(query: FilterQuery<IBuildingDocument>): Promise<IBuildingDocument[]> {
        return this.buildingRepository.getAll(query)
    }

}


export const GetAllBuildingsUseCaseIns = new GetAllBuildingsUseCase()