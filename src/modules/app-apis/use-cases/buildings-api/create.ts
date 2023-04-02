import {inject, injectable} from "inversify";
import {IBuildingDocument, IBuildingInput} from "../../../../domain/models/BuildingModel";
import {symbols} from "../../../../dependencies/symbols";
import {IBuildingRepository} from "../../../../domain/interfaces/repositories/BuildingRepository";


export interface ICreateBuildingUseCase {
    execute(data: IBuildingInput): Promise<IBuildingDocument>
}



@injectable()
export class CreateBuildingUseCase implements ICreateBuildingUseCase{
    constructor(
        @inject<IBuildingRepository>(symbols.DB.repositories.buildingRepository)
        private buildingRepository: IBuildingRepository,
    ) {}

    async execute(data: IBuildingInput): Promise<IBuildingDocument> {
        try{
            return await this.buildingRepository.create(data)
        }catch (err: any) {
            throw new Error(err.message)
        }
    }


}