import { IUserDocument } from "./UserModel";
import { IBookingDocument } from "./BookingModel";


export enum PAYMENT_TYPE {
    CASH = "CASH",
    CARD = "CARD"
}


export enum PAYMENT_STATUS {
    SUCCESS = "SUCCESS",
    INPROGRESS = "INPROGRESS",
    FAIL = "FAIL"
}


export enum CURRENCY {
    USD = "USD",
    UZS = "UZS"
}




export interface IPaymentInput {
    paymentType: PAYMENT_TYPE ,
    user: IUserDocument['_id'],
    booking: IBookingDocument['_id'],
    amount: number,
    currency: CURRENCY,
}




export interface IPaymentDocument {
    status: PAYMENT_STATUS ,
    createdAt: Date,
    canceledAt: Date,
    performedAt: Date
}



