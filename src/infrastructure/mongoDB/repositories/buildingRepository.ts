import {IBuildingRepository} from "../../../domain/interfaces/repositories/BuildingRepository";
import {IBuildingDocument, IBuildingInput} from "../../../domain/models/building";
import {Expression, FilterQuery, Model, QueryOptions} from "mongoose";
import {MongoDriver} from "../driver";
import {injectable} from "inversify";


@injectable()
export class BuildingRepository implements IBuildingRepository {
    private model!: Model<IBuildingDocument>;
    private db!: any;


    constructor() {
        this.db = new MongoDriver()
        this.init()
    }


    private async init(){
        await this.db.init()
        this.model = this.db.buildingModel
    }


    async get(filter: FilterQuery<IBuildingDocument>, options: QueryOptions = {}): Promise<IBuildingDocument[]> {
        try{
            return this.model.find(filter, options);
        }catch (err: any){
            throw new Error(err.message)
        }
    }


    async create(data: IBuildingInput): Promise<IBuildingDocument>{
        try{
            return await this.model.create(data);
        }catch (err: any){
            throw new Error(err.message)
        }
    }


    async getOne(query: FilterQuery<IBuildingDocument>, options: QueryOptions = {}): Promise<IBuildingDocument>{
        try{
            const building = await this.model.findOne(query, options)

            if (!building){
                throw new Error("Buildding was not found")
            }

            return building
        }catch (err: any){
            throw new Error(err.message)
        }
    }




    async updateOne(query: FilterQuery<IBuildingDocument>, data: IBuildingInput, options: QueryOptions = {}): Promise<IBuildingDocument | null>{
        try{
            const building  = await this.model.findOneAndUpdate(query, data, options)
            if (!building) {
                console.log("-- Update --")
                return null
            }
            return building
        } catch (err: any){
            throw new Error(err.message)
        }
    }


    async deleteOne(query: FilterQuery<IBuildingDocument>, options: QueryOptions = {}): Promise<IBuildingDocument | null>{
        try{
            const building = await this.model.findOneAndDelete(query, options)
            return building;
        }catch (err: any) {
            throw new Error(err.message)
        }
    }


}
