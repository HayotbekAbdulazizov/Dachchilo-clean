import {ICategoryDocument, ICategoryInput} from "../../models/category";
import {FilterQuery, QueryOptions} from "mongoose";
import {IBuildingDocument} from "../../models/building";
import {inject} from "inversify";


export interface ICategoryRepository {
    create(data: ICategoryInput): Promise<ICategoryDocument>
    get(query: FilterQuery<ICategoryDocument>): Promise<ICategoryDocument[]>
    getOne(query: FilterQuery<ICategoryDocument>): Promise<ICategoryDocument | null>
    updateOne(query: FilterQuery<ICategoryDocument>, data: ICategoryInput, options: QueryOptions): Promise<ICategoryDocument | null>
    deleteOne(query: FilterQuery<ICategoryDocument>, options: QueryOptions): Promise<ICategoryDocument | null>
}
