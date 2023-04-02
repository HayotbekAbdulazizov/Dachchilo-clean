import mongoose from "mongoose";
import {ICategoryDocument} from "./CategoryModel";
import { Types } from "mongoose";
import {ICommentDocument} from "./CommentModel";


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
    comments: ICommentDocument['_id'][]
    // saveds: FavouriteDocument['_id'][],
    commentsCount: number,
    // savedsCount: number,
}

