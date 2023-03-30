import mongoose, {Types} from "mongoose";
import {IBuildingDocument} from "./building";


export enum CATEGORY_TYPE {
    PARENT = "PARENT",
    CHILD = "CHILD"
}


export interface ICategoryInput {
    title: string,
    parentId?: ICategoryDocument['_id'];
}



export interface ICategoryDocument extends ICategoryInput, mongoose.Document{
    type: CATEGORY_TYPE,
    slug:string;
    buildings: IBuildingDocument['_id'][]
}

