import {ICommentRepository} from "../../../domain/interfaces/repositories/CommentRepository";

import {FilterQuery, Model, QueryOptions, UpdateQuery} from "mongoose";
import {MongoDriver} from "../driver";
import {inject, injectable} from "inversify";
import {symbols} from "../../../dependencies/symbols";
import {ICommentDocument, ICommentInput} from "../../../domain/models/CommentModel";
import { globalErrorHandler } from "../../../shared/utils/errorHandler";



@injectable()
export class CommentRepository implements ICommentRepository {
    private model!: Model<ICommentDocument>;


    constructor(
        @inject<MongoDriver>(symbols.DB.driver) private db: MongoDriver
    ) {
        this.model = this.db.commentModel
    }



    @globalErrorHandler
    async get(query: FilterQuery<ICommentDocument>, options: QueryOptions = {}): Promise<ICommentDocument[]> {
        return this.model.find(query, options);
    }


    @globalErrorHandler
    async getOne(query: FilterQuery<ICommentDocument>): Promise<ICommentDocument | null>{
        const comment = await this.model.findOne(query)
        return comment;
    }



    @globalErrorHandler
    async create(data:ICommentInput): Promise<ICommentDocument>{
        return await this.model.create(data);
    }



    @globalErrorHandler
    async updateOne(query: FilterQuery<ICommentDocument>, data: UpdateQuery<ICommentDocument>, options: QueryOptions): Promise<ICommentDocument | null>{
        const comment  = await this.model.findOneAndUpdate(query, data, options)
        if (!comment) {
            throw new Error("Comment was not found ")
        }
        return comment
    }


    @globalErrorHandler
    async deleteOne(query: FilterQuery<ICommentDocument>, options?: QueryOptions): Promise<ICommentDocument | null>{
        return await this.model.findOneAndDelete(query, options);
    }


    @globalErrorHandler
    async update(query: FilterQuery<ICommentDocument>, data: ICommentInput[] ,options: QueryOptions = {}): Promise<ICommentDocument[] | null>{
        const comments = await this.model.updateMany(query, data, options)
        console.log(comments)
        return null;
    }



    @globalErrorHandler
    async delete(query: FilterQuery<ICommentDocument>, options: QueryOptions = {}): Promise<ICommentDocument[] | null>{
        const comments = await this.model.deleteMany(query, options)
        return null
    }


}
