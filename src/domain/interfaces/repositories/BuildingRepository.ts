import {FilterQuery} from "mongoose";
import {IBuildingDocument} from "../../models/building";


export interface IBuildingRepository {
    getAll(query: FilterQuery<IBuildingDocument>): Promise<IBuildingDocument[]>
}