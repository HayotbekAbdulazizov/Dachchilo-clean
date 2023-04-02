import {inject, injectable} from "inversify";
import {IBuildingDocument, IBuildingInput} from "../../../../domain/models/BuildingModel";
import {symbols} from "../../../../dependencies/symbols";
import {IBuildingRepository} from "../../../../domain/interfaces/repositories/BuildingRepository";
import {globalErrorHandler} from "../../../../shared/utils/errorHandler";


export interface ICreateBuildingUseCase {
    execute(data: IBuildingInput): Promise<IBuildingDocument>
}



@injectable()
export class CreateBuildingUseCase implements ICreateBuildingUseCase{
    constructor(
        @inject<IBuildingRepository>(symbols.DB.repositories.buildingRepository)
        private buildingRepository: IBuildingRepository,
    ) {}


    @globalErrorHandler
    async execute(data: IBuildingInput): Promise<IBuildingDocument> {
        return await this.buildingRepository.create(data)
    }


}