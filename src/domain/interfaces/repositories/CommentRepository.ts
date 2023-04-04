import {ICategoryDocument, ICategoryInput} from "../../models/CategoryModel";
import {FilterQuery, QueryOptions, UpdateQuery} from "mongoose";
import {ICommentDocument, ICommentInput} from "../../models/CommentModel";


export interface ICommentRepository {
    create(data: ICommentInput): Promise<ICommentDocument>
    get(query: FilterQuery<ICommentDocument>, options?: QueryOptions): Promise<ICommentDocument[]>
    updateOne(query: FilterQuery<ICommentDocument>, data: UpdateQuery<ICommentDocument>, options: QueryOptions): Promise<ICommentDocument | null>
    deleteOne(query: FilterQuery<ICommentDocument>, options?: QueryOptions): Promise<ICommentDocument | null>
    getOne(query: FilterQuery<ICommentDocument>): Promise<ICommentDocument | null>
    delete(query: FilterQuery<ICommentDocument>, options?: QueryOptions): Promise<ICommentDocument[] | null>


    // update(query: FilterQuery<ICommentDocument>, data: ICommentDocument[], options?: QueryOptions): Promise<ICommentDocument[] | null>
}
