import {inject, injectable} from "inversify";
import {symbols} from "../../../../dependencies/symbols";
import {ICommentDocument, ICommentInput} from "../../../../domain/models/CommentModel";
import {ICommentRepository} from "../../../../domain/interfaces/repositories/CommentRepository";
import {globalErrorHandler} from "../../../../shared/utils/errorHandler";


export interface ICreateCommentUseCase {
    execute(data: ICommentInput): Promise<ICommentDocument>
}



@injectable()
export class CreateCommentUseCase implements ICreateCommentUseCase{
    constructor(
        @inject<ICommentRepository>(symbols.DB.repositories.commentRepository)
        private commentRepository: ICommentRepository,
    ) {}


    @globalErrorHandler
    async execute(data: ICommentInput): Promise<ICommentDocument> {
        return await this.commentRepository.create(data)
    }


}