import mongoose from "mongoose";
import { ICategoryDocument } from "./CategoryModel";


export enum TYPE {
    NUMBER = 'number',
    TEXT = "text",
    CHOICE = "checkbox",
    FILE = "file",
    RANGE = "range"
}




export interface IAttributeInput {
    title: string;
    type: string,
    category: ICategoryDocument['_id'];
}




export interface IAttributeDocument extends IAttributeInput, mongoose.Document{
    createdAt: Date;
    updatedAt: Date;
}

