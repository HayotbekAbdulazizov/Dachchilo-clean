import {inject, injectable} from "inversify";
import {ObjectId} from "mongoose";
import {IBuildingDocument, IBuildingInput} from "../../../../domain/models/BuildingModel";
import {IBuildingRepository} from "../../../../domain/interfaces/repositories/BuildingRepository";
import {symbols} from "../../../../dependencies/symbols";
import {globalErrorHandler} from "../../../../shared/utils/errorHandler";


export interface IUpdateBuildingByIdUseCase{
    execute(id: string | ObjectId, data: IBuildingInput): Promise<IBuildingDocument | null>
}


@injectable()
export class UpdateBuildingByIdUseCase implements IUpdateBuildingByIdUseCase{
    constructor(
        @inject<IBuildingRepository>(symbols.DB.repositories.buildingRepository)
        private buildingRepository: IBuildingRepository
    ) {}

    @globalErrorHandler
    async execute(id: string | ObjectId, data: IBuildingInput): Promise<IBuildingDocument | null> {
        const building = await this.buildingRepository.updateOne({_id: id}, data, { new: true });
        return building;
    }

}