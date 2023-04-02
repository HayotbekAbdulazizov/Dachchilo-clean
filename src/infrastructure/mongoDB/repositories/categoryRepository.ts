import {inject, injectable} from "inversify";
import {ICategoryDocument, ICategoryInput} from "../../../domain/models/CategoryModel";
import {FilterQuery, Model, QueryOptions} from "mongoose";
import {ICategoryRepository} from "../../../domain/interfaces/repositories/CategoryRepository";
import {IMongoDriver} from "../driver";
import {symbols} from "../../../dependencies/symbols";
import {globalErrorHandler} from "../../../shared/utils/errorHandler";


@injectable()
export class CategoryRepository implements ICategoryRepository{

    private model!: Model<ICategoryDocument>

    constructor(
        @inject<IMongoDriver>(symbols.DB.driver) private db: IMongoDriver
    ) {
        this.model = this.db.categoryModel
    }


    @globalErrorHandler
    async create(data: ICategoryInput): Promise<ICategoryDocument> {
        return await this.model.create(data) ;
    }


    @globalErrorHandler
    async deleteOne(query: FilterQuery<ICategoryDocument>, options: QueryOptions): Promise<ICategoryDocument | null> {
        return this.model.findOneAndDelete(query, options);
    }


    @globalErrorHandler
    async get(query: FilterQuery<ICategoryDocument>): Promise<ICategoryDocument[]> {
        return this.model.find(query);
    }


    @globalErrorHandler
    async getOne(query: FilterQuery<ICategoryDocument>): Promise<ICategoryDocument | null> {
        return this.model.findOne(query);
    }


    @globalErrorHandler
    async updateOne(query: FilterQuery<ICategoryDocument>, data: ICategoryInput, options: QueryOptions = {}): Promise<ICategoryDocument | null> {
        return this.model.findOneAndUpdate(query, data, options);
    }

}