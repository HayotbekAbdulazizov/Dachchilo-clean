import {inject, injectable} from "inversify";
import {ICategoryDocument, ICategoryInput} from "../../../domain/models/category";
import {FilterQuery, Model, QueryOptions} from "mongoose";
import {ICategoryRepository} from "../../../domain/interfaces/repositories/CategoryRepository";
import {IMongoDriver} from "../driver";
import {symbols} from "../../../dependencies/symbols";


@injectable()
export class CategoryRepository implements ICategoryRepository{

    private model!: Model<ICategoryDocument>

    constructor(
        @inject<IMongoDriver>(symbols.DB.driver) private db: IMongoDriver
    ) {
        this.model = this.db.categoryModel
    }

    async create(data: ICategoryInput): Promise<ICategoryDocument> {
        try{
            return await this.model.create(data) ;
        }catch (err: any) {
            throw new Error(err.message)
        }
    }

    async deleteOne(query: FilterQuery<ICategoryDocument>, options: QueryOptions): Promise<ICategoryDocument | null> {
        try{
            return await this.model.findOneAndDelete(query, options)
        }catch (err: any) {
            throw new Error(err.message)
        }
    }

    async get(query: FilterQuery<ICategoryDocument>): Promise<ICategoryDocument[]> {
        try{
            return await this.model.find(query);
        }catch (err: any) {
            throw new Error(err.message)
        }
    }

    async getOne(query: FilterQuery<ICategoryDocument>): Promise<ICategoryDocument | null> {
        try{
            return await this.model.findOne(query)
        }catch (err: any){
            throw new Error(err.message)
        }
    }

    async updateOne(query: FilterQuery<ICategoryDocument>, data: ICategoryInput, options: QueryOptions = {}): Promise<ICategoryDocument | null> {
        try{
            return await this.model.findOneAndUpdate(query, data, options);
        }catch (err: any) {
            throw new Error(err.message)
        }
    }

}