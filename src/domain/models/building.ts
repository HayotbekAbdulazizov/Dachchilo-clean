import mongoose from "mongoose";
import {ICategoryDocument} from "./category";


export enum STATUS {
    FREE = "FREE",
    BUSY = "BUSY"
}

export enum TERM {
    SHORT = "SHORT",
    LONG = "LONG"
}




export interface IBuildingInput {
    category: ICategoryDocument['_id'];
    title: string;
    price: number;
    description: string,
    image: string;
    type?: TERM,
}


export interface IBuildingDocument extends IBuildingInput, mongoose.Document{
    status?: STATUS,
    createdAt: Date;
    updatedAt: Date;
}

