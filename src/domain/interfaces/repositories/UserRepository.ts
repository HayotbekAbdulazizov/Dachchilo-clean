import {FilterQuery, QueryOptions, UpdateQuery} from "mongoose";
import {IUserDocument, IUserRegistrationInput} from "../../models/UserModel";

export interface IUserRepository {
    register(data: IUserRegistrationInput): Promise<IUserDocument>
    get(query: FilterQuery<IUserDocument>, options?: QueryOptions): Promise<IUserDocument[]>
    updateOne(query: FilterQuery<IUserDocument>, data: IUserRegistrationInput, options?: QueryOptions): Promise<IUserDocument | null>
    deleteOne(query: FilterQuery<IUserDocument>, options?: QueryOptions): Promise<IUserDocument | null>
    getOne(query: FilterQuery<IUserDocument>): Promise<IUserDocument | null>
    delete(query: FilterQuery<IUserDocument>, options?: QueryOptions): Promise<IUserDocument[] | null>
}
