import {inject, injectable} from "inversify";
import {symbols} from "../../../../dependencies/symbols";
import {IBuildingRepository} from "../../../../domain/interfaces/repositories/BuildingRepository";
import {ObjectId} from "mongoose"
import {IBuildingDocument} from "../../../../domain/models/building";

export interface IGetBuildingByIdUseCase{
    execute(id: string | ObjectId): Promise<IBuildingDocument>
}


@injectable()
export class GetBuildingByIdUseCase implements IGetBuildingByIdUseCase{
    constructor(
        @inject<IBuildingRepository>(symbols.DB.repositories.buildingRepository)
        private buildingRepository: IBuildingRepository
    ) {}

    async execute(id: string | ObjectId): Promise<IBuildingDocument> {
        try{
            const building = await this.buildingRepository.getOne({_id:id})
            return building;
        }catch (err: any){
            throw new Error(err.message)
        }
    }
}