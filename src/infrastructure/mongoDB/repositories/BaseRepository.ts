import {FilterQuery, Model, QueryOptions, UpdateQuery} from 'mongoose';
import {globalErrorHandler} from "../../../shared/utils/errorHandler";
import {IBaseRepository} from "../../../domain/interfaces/repositories/BaseRepository";
import { injectable} from "inversify";


@injectable()
export class BaseRepository<IModel, IInput> implements IBaseRepository<IModel, IInput>{
    private model!: Model<IModel>

    @globalErrorHandler
    init(model: Model<IModel>): void {
        this.model = model
    }

    @globalErrorHandler
    public async get(query: QueryOptions<IModel>): Promise<IModel[]> {
        return this.model.find(query).exec();
    }


    @globalErrorHandler
    public async getOne(query: QueryOptions<IModel>): Promise<IModel | null>{
        return this.model.findOne(query).exec();
    }


    @globalErrorHandler
    public async create(data: IInput): Promise<IModel> {
        return this.model.create(data)
        // return entity.save();
    }


    @globalErrorHandler
    public async updateOne(query: FilterQuery<IModel>, update: UpdateQuery<IModel>, options: QueryOptions): Promise<IModel | null>{
        const document = await this.model.findOne(query).exec();
        if (!document) {
            throw new Error("Document was not found")
        }
        const doc = await this.model.findOneAndUpdate(query, update, options)
        return doc
    }


    @globalErrorHandler
    public async deleteOne(query: FilterQuery<IModel>, options: QueryOptions): Promise<IModel | null> {
        const document = await this.model.findOne(query)
        if (!document){
            throw new Error("Document was not found")
        }
        const deletedDocument = await this.model.findOneAndDelete(query, options)
        return deletedDocument
    }
}