import {inject, injectable} from "inversify";
import {ICategoryDocument, ICategoryInput} from "../../../domain/models/CategoryModel";
import {FilterQuery, QueryOptions} from "mongoose";
import {ICategoryRepository} from "../../../domain/interfaces/repositories/CategoryRepository";
import {IMongoDriver} from "../driver";
import {symbols} from "../../../dependencies/symbols";
import {globalErrorHandler} from "../../../shared/utils/errorHandler";
import {BaseRepository} from "./BaseRepository";


@injectable()
export class CategoryRepository extends BaseRepository<ICategoryDocument, ICategoryInput> implements ICategoryRepository {

    constructor(
        @inject<IMongoDriver>(symbols.DB.driver) private db: IMongoDriver
    ) {
        super()
        super.init(this.db.categoryModel)
    }



    @globalErrorHandler
    async create(data: ICategoryInput): Promise<ICategoryDocument> {
        return await super.create(data) ;
    }

    @globalErrorHandler
    async deleteOne(query: FilterQuery<ICategoryDocument>, options: QueryOptions): Promise<ICategoryDocument | null> {
        return super.deleteOne(query, options);
    }


    @globalErrorHandler
    async get(query: FilterQuery<ICategoryDocument>): Promise<ICategoryDocument[]> {
        return super.get(query);
    }


    @globalErrorHandler
    async getOne(query: FilterQuery<ICategoryDocument>): Promise<ICategoryDocument | null> {
        return super.getOne(query);
    }


    @globalErrorHandler
    async updateOne(query: FilterQuery<ICategoryDocument>, data: ICategoryInput, options: QueryOptions = {}): Promise<ICategoryDocument | null> {
        return super.updateOne(query, data, options);
    }

}