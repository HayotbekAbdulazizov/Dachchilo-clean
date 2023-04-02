import {IBuildingRepository} from "../../../domain/interfaces/repositories/BuildingRepository";
import {IBuildingDocument, IBuildingInput} from "../../../domain/models/BuildingModel";
import {FilterQuery, Model, QueryOptions} from "mongoose";
import {MongoDriver} from "../driver";
import {inject, injectable} from "inversify";
import {symbols} from "../../../dependencies/symbols";
import { globalErrorHandler } from "../../../shared/utils/errorHandler";


@injectable()
export class BuildingRepository implements IBuildingRepository {
    private model!: Model<IBuildingDocument>;


    constructor(
        @inject<MongoDriver>(symbols.DB.driver) private db: MongoDriver
    ) {
        this.model = this.db.buildingModel
    }


    @globalErrorHandler
    async get(filter: FilterQuery<IBuildingDocument>, options: QueryOptions = {}): Promise<IBuildingDocument[]> {
        return await this.model.find(filter, options);
    }


    @globalErrorHandler
    async create(data: IBuildingInput): Promise<IBuildingDocument>{
        return await this.model.create(data);
    }


    @globalErrorHandler
    async getOne(query: FilterQuery<IBuildingDocument>, options: QueryOptions = {}): Promise<IBuildingDocument>{
        const building = await this.model.findOne(query, options)
        if (!building){
            throw new Error("Buildding was not found")
        }
        return building
    }



    @globalErrorHandler
    async updateOne(query: FilterQuery<IBuildingDocument>, data: IBuildingInput, options: QueryOptions = {}): Promise<IBuildingDocument | null>{
        const building  = await this.model.findOneAndUpdate(query, data, options)
        if (!building) {
            throw new Error("Building was not found ")
        }
        return building
    }


    @globalErrorHandler
    async deleteOne(query: FilterQuery<IBuildingDocument>, options: QueryOptions = {}): Promise<IBuildingDocument | null>{
        return this.model.findOneAndDelete(query, options);
    }


}
