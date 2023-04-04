import {ICommentRepository} from "../../../domain/interfaces/repositories/CommentRepository";

import {FilterQuery, QueryOptions, UpdateQuery} from "mongoose";
import {IMongoDriver} from "../driver";
import {inject, injectable} from "inversify";
import {symbols} from "../../../dependencies/symbols";
import {ICommentDocument, ICommentInput} from "../../../domain/models/CommentModel";
import {globalErrorHandler} from "../../../shared/utils/errorHandler";
import {BaseRepository} from "./BaseRepository";


@injectable()
export class CommentRepository extends BaseRepository<ICommentDocument, ICommentInput> implements ICommentRepository {

    constructor(
        @inject<IMongoDriver>(symbols.DB.driver) private db: IMongoDriver
    ) {
        super()
        super.init(this.db.commentModel)
    }



    @globalErrorHandler
    async get(query: FilterQuery<ICommentDocument>): Promise<ICommentDocument[]> {
        return super.get(query);
    }


    @globalErrorHandler
    async getOne(query: FilterQuery<ICommentDocument>): Promise<ICommentDocument | null>{
        return await super.getOne(query);
    }



    @globalErrorHandler
    async create(data:ICommentInput): Promise<ICommentDocument>{
        return await super.create(data);
    }



    @globalErrorHandler
    async updateOne(query: FilterQuery<ICommentDocument>, data: UpdateQuery<ICommentDocument>, options: QueryOptions): Promise<ICommentDocument | null>{
        const comment  = await super.updateOne(query, data, options)
        if (!comment) {
            throw new Error("Comment was not found ")
        }
        return comment
    }


    @globalErrorHandler
    async deleteOne(query: FilterQuery<ICommentDocument>, options: QueryOptions): Promise<ICommentDocument | null>{
        return await super.deleteOne(query, options);
    }


    @globalErrorHandler
    async delete(query: FilterQuery<ICommentDocument>, options: QueryOptions = {}): Promise<ICommentDocument[] | null>{
        const comments = await super.delete(query, options)
        return null
    }





    // @globalErrorHandler
    // async update(query: FilterQuery<ICommentDocument>, data: ICommentInput[] ,options: QueryOptions = {}): Promise<ICommentDocument[] | null>{
    //     const comments = await this.model.updateMany(query, data, options)
    //     console.log(comments)
    //     return null;
    // }
    //
    //
    //


}
