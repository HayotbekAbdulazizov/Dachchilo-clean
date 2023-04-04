import mongoose from "mongoose";
import {ICategoryDocument} from "./CategoryModel";
import {ICommentDocument} from "./CommentModel";
import {IUserDocument} from "./UserModel";


export enum STATUS {
    FREE = "FREE",
    BUSY = "BUSY"
}

export enum TERM {
    SHORT = "SHORT",
    LONG = "LONG"
}



export interface IImage {
    fieldname: string,
    originalname: string,
    encoding: string,
    mimetype: string;
    destination: string;
    filename: string,
    path: string;
    size: number
}



export interface IBuildingInput {
    category: ICategoryDocument['_id'];
    title: string;
    price: number;
    description: string,
    image: IImage[];
    type?: TERM,
}


export interface IBuildingDocument extends IBuildingInput, mongoose.Document{
    author: IUserDocument['_id']
    status?: STATUS,
    createdAt: Date;
    updatedAt: Date;
    comments: ICommentDocument['_id'][]
    // saveds: FavouriteDocument['_id'][],
    commentsCount: number,
    // savedsCount: number,
}

