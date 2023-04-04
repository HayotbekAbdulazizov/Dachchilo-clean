import mongoose from "mongoose";


export enum ROLE {
    USER = "USER",
    ADMIN = "ADMIN",
    MERCHANT = "MERCHANT"
}


export interface IUserRegistrationInput {
    email: string;
    name: string;
    password: string;
    role?: ROLE
}


export interface IUserLoginInput {
    email: string;
    password: string;
}




export type IPublicUser = Pick<IUserDocument, 'email' | 'name'>;




export interface IUserDocument extends mongoose.Document {
    email: string;
    name:string;
    password:string;
    role: ROLE
    createdAt:Date,
    updatedAt: Date;
    comparePassword(candidatePassword: string ): Promise<boolean>;
}

