import {Expression, FilterQuery, QueryOptions, UpdateQuery} from "mongoose";
import {IBuildingDocument, IBuildingInput} from "../../models/building";


export interface IBuildingRepository {
    get(query: FilterQuery<IBuildingDocument>, options?: QueryOptions): Promise<IBuildingDocument[]>
    create(data: IBuildingInput): Promise<IBuildingDocument>;
    getOne(query: FilterQuery<IBuildingDocument>, options?: QueryOptions): Promise<IBuildingDocument>
    updateOne(query: FilterQuery<IBuildingDocument>, data: UpdateQuery<IBuildingInput>, options?: QueryOptions): Promise<IBuildingDocument | null>
    deleteOne(query: FilterQuery<IBuildingDocument>, options?: QueryOptions): Promise<IBuildingDocument | null>
}