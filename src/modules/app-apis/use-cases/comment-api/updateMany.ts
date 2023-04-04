// import {inject, injectable} from "inversify";
// import {symbols} from "../../../../dependencies/symbols";
// import { ICommentDocument } from "../../../../domain/models/CommentModel";
// import { ICommentRepository } from "../../../../domain/interfaces/repositories/CommentRepository";
// import {FilterQuery, ObjectId, QueryOptions} from "mongoose";
// import {globalErrorHandler} from "../../../../shared/utils/errorHandler";
//
//
// export interface IUpdateManyCommentsUseCase {
//     execute(query: FilterQuery<ICommentDocument>, data: ICommentDocument[], options?: QueryOptions): Promise<ICommentDocument[] | null>
// }
//
//
//
// @injectable()
// export class UpdateManyCommentsUseCase implements IUpdateManyCommentsUseCase{
//     constructor(
//         @inject<ICommentRepository>(symbols.DB.repositories.commentRepository)
//         private commentRepository: ICommentRepository,
//     ) {}
//
//
//     @globalErrorHandler
//     async execute(query: FilterQuery<ICommentDocument>, data: ICommentDocument[], options: QueryOptions): Promise<ICommentDocument[] | null>{
//         return await this.commentRepository.update(query, data, options)
//     }
//
//
// }