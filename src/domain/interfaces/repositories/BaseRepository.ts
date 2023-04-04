import {FilterQuery, Model, QueryOptions, UpdateQuery} from "mongoose";


export interface IBaseRepository<IModel, IInput> {
    init(model: Model<IModel>): void
    get(query: QueryOptions<IModel>): Promise<IModel[]>
    getOne(query: QueryOptions<IModel>): Promise<IModel | null>
    create(data: IInput): Promise<IModel>
    updateOne(query: FilterQuery<IModel>, update: UpdateQuery<IModel>, options?: QueryOptions): Promise<IModel | null>
    deleteOne(query: FilterQuery<IModel>, options?: QueryOptions): Promise<IModel | null>
    delete(query: FilterQuery<IModel>, options?: QueryOptions): Promise<IModel[] | null>
}