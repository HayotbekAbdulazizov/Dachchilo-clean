import {inject, injectable} from "inversify";
import {symbols} from "../../../../dependencies/symbols";
import {IBuildingRepository} from "../../../../domain/interfaces/repositories/BuildingRepository";
import {ObjectId} from "mongoose"
import {IBuildingDocument} from "../../../../domain/models/BuildingModel";
import {globalErrorHandler} from "../../../../shared/utils/errorHandler";

export interface IGetBuildingByIdUseCase{
    execute(id: string | ObjectId): Promise<IBuildingDocument>
}


@injectable()
export class GetBuildingByIdUseCase implements IGetBuildingByIdUseCase{
    constructor(
        @inject<IBuildingRepository>(symbols.DB.repositories.buildingRepository)
        private buildingRepository: IBuildingRepository
    ) {}


    @globalErrorHandler
    async execute(id: string | ObjectId): Promise<IBuildingDocument> {
        const building = await this.buildingRepository.getOne({_id:id})
        return building;
    }

}