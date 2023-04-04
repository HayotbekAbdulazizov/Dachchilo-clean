import {IBuildingRepository} from "../../../domain/interfaces/repositories/BuildingRepository";
import {IBuildingDocument, IBuildingInput} from "../../../domain/models/BuildingModel";
import {FilterQuery, QueryOptions} from "mongoose";
import {IMongoDriver, MongoDriver} from "../driver";
import {inject, injectable} from "inversify";
import {symbols} from "../../../dependencies/symbols";
import { globalErrorHandler } from "../../../shared/utils/errorHandler";
import {BaseRepository} from "./BaseRepository";


@injectable()
export class BuildingRepository extends BaseRepository<IBuildingDocument, IBuildingInput> implements IBuildingRepository {

    constructor(
        @inject<IMongoDriver>(symbols.DB.driver) private db: IMongoDriver
    ) {
        super()
        super.init(this.db.buildingModel)
    }


    @globalErrorHandler
    async get(query: FilterQuery<IBuildingDocument>): Promise<IBuildingDocument[]> {
        return await super.get(query)
    }


    @globalErrorHandler
    async create(data: IBuildingInput): Promise<IBuildingDocument>{
        return await super.create(data);
    }


    @globalErrorHandler
    async getOne(query: FilterQuery<IBuildingDocument>): Promise<IBuildingDocument>{
        const building = await super.getOne(query)
        if (!building){
            throw new Error("Buildding was not found")
        }
        return building
    }



    @globalErrorHandler
    async updateOne(query: FilterQuery<IBuildingDocument>, data: IBuildingInput, options: QueryOptions = {}): Promise<IBuildingDocument | null>{
        const building  = await super.updateOne(query, data, options)
        if (!building) {
            throw new Error("Building was not found ")
        }
        return building
    }


    @globalErrorHandler
    async deleteOne(query: FilterQuery<IBuildingDocument>, options: QueryOptions = {}): Promise<IBuildingDocument | null>{
        return super.deleteOne(query, options);
    }


}
