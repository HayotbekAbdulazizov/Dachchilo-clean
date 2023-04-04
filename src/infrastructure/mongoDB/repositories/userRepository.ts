import {FilterQuery, QueryOptions } from "mongoose";
import {IMongoDriver} from "../driver";
import {inject, injectable} from "inversify";
import {symbols} from "../../../dependencies/symbols";
import {globalErrorHandler} from "../../../shared/utils/errorHandler";
import {BaseRepository} from "./BaseRepository";
import {IUserDocument, IUserRegistrationInput} from "../../../domain/models/UserModel";
import {IUserRepository} from "../../../domain/interfaces/repositories/UserRepository";
import {userInfo} from "os";





@injectable()
export class UserRepository extends BaseRepository<IUserDocument, IUserRegistrationInput> implements IUserRepository {

    constructor(
        @inject<IMongoDriver>(symbols.DB.driver) private db: IMongoDriver
    ) {
        super()
        super.init(this.db.userModel)
    }




    @globalErrorHandler
    async get(query: FilterQuery<IUserDocument>): Promise<IUserDocument[]> {
        return super.get(query);
    }


    @globalErrorHandler
    async getOne(query: FilterQuery<IUserDocument>): Promise<IUserDocument | null>{
        return await super.getOne(query);
    }


    @globalErrorHandler
    async register(data:IUserRegistrationInput): Promise<IUserDocument>{
        const user = await super.create(data);
        console.log(user, '  -- user')
        return user;
    }




    @globalErrorHandler
    async updateOne(query: FilterQuery<IUserDocument>, data: IUserRegistrationInput, options: QueryOptions): Promise<IUserDocument | null>{
        const user  = await super.updateOne(query, data, options)
        if (!user) {
            throw new Error("User was not found ")
        }
        return user
    }



    @globalErrorHandler
    async deleteOne(query: FilterQuery<IUserDocument>, options: QueryOptions): Promise<IUserDocument | null>{
        return await super.deleteOne(query, options);
    }



    @globalErrorHandler
    async delete(query: FilterQuery<IUserDocument>, options: QueryOptions = {}): Promise<IUserDocument[] | null>{
        const users = await super.delete(query, options)
        return null
    }



}
