import {inject, injectable} from "inversify";
import {symbols} from "../../../../dependencies/symbols";
import {ICommentDocument, ICommentInput} from "../../../../domain/models/CommentModel";
import {ICommentRepository} from "../../../../domain/interfaces/repositories/CommentRepository";
import {ObjectId} from "mongoose";
import {globalErrorHandler} from "../../../../shared/utils/errorHandler";


export interface IDeleteCommentByIdUseCase {
    execute(id: string | ObjectId): Promise<ICommentDocument | null>
}



@injectable()
export class DeleteCommentByIdUseCase implements IDeleteCommentByIdUseCase{
    constructor(
        @inject<ICommentRepository>(symbols.DB.repositories.commentRepository)
        private commentRepository: ICommentRepository,
    ) {}


    @globalErrorHandler
    async execute(id: string | ObjectId): Promise<ICommentDocument | null> {
        return await this.commentRepository.deleteOne({_id: id})
    }


}