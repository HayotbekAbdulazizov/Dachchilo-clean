import mongoose, {mongo} from "mongoose";
import { IUserDocument } from "./UserModel";
import { IBuildingDocument } from "./BuildingModel";


export interface IFavouriteInput {
    building: IBuildingDocument['_id'];
    user: IUserDocument['_id'];
}


export interface IFavouriteDocument extends IFavouriteInput, mongoose.Document{
    createdAt: Date;
    updatedAt: Date;
}


