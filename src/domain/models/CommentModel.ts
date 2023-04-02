import mongoose from "mongoose";
import { IUserDocument } from "./UserModel";
import { IBuildingDocument } from "./BuildingModel";


export interface ICommentInput {
    building: IBuildingDocument['_id'];
    user: IUserDocument['_id'];
    comment: string;
}


export interface ICommentDocument extends ICommentInput, mongoose.Document{
    createdAt: Date;
    updatedAt: Date;
}

