import mongoose from "mongoose";
import {IBuildingDocument} from "./BuildingModel";


export enum CATEGORY_TYPE {
    PARENT = "PARENT",
    CHILD = "CHILD"
}


export interface ICategoryInput {
    title: string,
    parentId?: ICategoryDocument['_id'] | null;
}



export interface ICategoryDocument extends ICategoryInput, mongoose.Document{
    type: CATEGORY_TYPE,
    slug:string;
    buildings: IBuildingDocument['_id'][]
}

