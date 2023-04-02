import {ICommentRepository} from "../../../domain/interfaces/repositories/CommentRepository";

import {FilterQuery, Model, QueryOptions, UpdateQuery} from "mongoose";
import {MongoDriver} from "../driver";
import {inject, injectable} from "inversify";
import {symbols} from "../../../dependencies/symbols";
import {ICommentDocument, ICommentInput} from "../../../domain/models/CommentModel";




@injectable()
export class CommentRepository implements ICommentRepository {
    private model!: Model<ICommentDocument>;


    constructor(
        @inject<MongoDriver>(symbols.DB.driver) private db: MongoDriver
    ) {
        this.model = this.db.commentModel
    }



    async get(query: FilterQuery<ICommentDocument>, options: QueryOptions = {}): Promise<ICommentDocument[]> {
        try{
            return await this.model.find(query, options);
        }catch (err: any){
            throw new Error(err.message)
        }
    }


    async getOne(query: FilterQuery<ICommentDocument>): Promise<ICommentDocument | null>{
        try{
            const comment = await this.model.findOne(query)
            return comment;
        }catch (err: any) {
            throw new Error(err.message)
        }
    }



    async create(data:ICommentInput): Promise<ICommentDocument>{
        try{
            return await this.model.create(data);
        }catch (err: any){
            throw new Error(err.message)
        }
    }



    async updateOne(query: FilterQuery<ICommentDocument>, data: UpdateQuery<ICommentDocument>, options: QueryOptions): Promise<ICommentDocument | null>{
        try{
            const comment  = await this.model.findOneAndUpdate(query, data, options)
            if (!comment) {
                throw new Error("Comment was not found ")
            }
            return comment
        } catch (err: any){
            throw new Error(err.message)
        }
    }


    async deleteOne(query: FilterQuery<ICommentDocument>, options?: QueryOptions): Promise<ICommentDocument | null>{
        try{
            return await this.model.findOneAndDelete(query, options);
        }catch (err: any) {
            throw new Error(err.message)
        }
    }


    async update(query: FilterQuery<ICommentDocument>, data: ICommentInput[] ,options: QueryOptions = {}): Promise<ICommentDocument[] | null>{
        try{
            const comments = await this.model.updateMany(query, data, options)
            console.log(comments)
            return null;
        }catch (err: any) {
            throw new Error(err.message)
        }
    }



    async delete(query: FilterQuery<ICommentDocument>, options: QueryOptions = {}): Promise<ICommentDocument[] | null>{
        try{
            const comments = await this.model.deleteMany(query, options)
            return null
        }catch (err: any) {
            throw new Error(err.message)
        }
    }


}
