import {inject, injectable} from "inversify";
import {symbols} from "../../../../dependencies/symbols";
import {ICommentDocument, ICommentInput} from "../../../../domain/models/CommentModel";
import {ICommentRepository} from "../../../../domain/interfaces/repositories/CommentRepository";
import {ObjectId} from "mongoose";
import {globalErrorHandler} from "../../../../shared/utils/errorHandler";


export interface IGetCommentByIdUseCase {
    execute(id: string | ObjectId ): Promise<ICommentDocument | null>
}



@injectable()
export class GetCommentByIdUseCase implements IGetCommentByIdUseCase{
    constructor(
        @inject<ICommentRepository>(symbols.DB.repositories.commentRepository)
        private commentRepository: ICommentRepository,
    ) {}


    @globalErrorHandler
    async execute(id: string | ObjectId): Promise<ICommentDocument | null> {
        return await this.commentRepository.getOne({_id: id})
    }


}