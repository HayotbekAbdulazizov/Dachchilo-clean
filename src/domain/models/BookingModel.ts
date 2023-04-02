import mongoose from "mongoose";
import { IBuildingDocument } from "./BuildingModel";
import { IUserDocument } from "./UserModel";




export enum BOOKING_TYPE {
    LONGTERM = "LONGTERM",
    SHORTTERM = "SHORTTERM"
}


export enum STATUS {
    SUBMITTED = "SUBMITTED",
    INPROCESS = "IN_PROCESS",
    DONE = "DONE"
}



export interface IBookingInput {
    user: IUserDocument['_id'],
    building: IBuildingDocument['_id']
    type: string,       // BOOKING_TYPE is iving error in booking controller
}



export interface IBookingDocument extends mongoose.Document{
    status: STATUS,
    date: Date,
    createdAt: Date;
    updatedAt: Date;
}

