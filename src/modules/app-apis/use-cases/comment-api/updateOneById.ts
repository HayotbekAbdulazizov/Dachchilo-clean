import {inject, injectable} from "inversify";
import {symbols} from "../../../../dependencies/symbols";
import {ICommentDocument, ICommentInput} from "../../../../domain/models/CommentModel";
import { ICommentRepository } from "../../../../domain/interfaces/repositories/CommentRepository";
import { ObjectId, QueryOptions} from "mongoose";


export interface IUpdateOneCommentByIdUseCase {
    execute(id: string | ObjectId, data: ICommentInput, options?: QueryOptions): Promise<ICommentDocument | null>
}



@injectable()
export class UpdateOneCommentByIdUseCase implements IUpdateOneCommentByIdUseCase{
    constructor(
        @inject<ICommentRepository>(symbols.DB.repositories.commentRepository)
        private commentRepository: ICommentRepository,
    ) {}


    async execute(id: string | ObjectId, data: ICommentInput, options: QueryOptions = {}): Promise<ICommentDocument | null>{
        try{
            return await this.commentRepository.updateOne({_id: id}, data, options)
        }catch (err: any) {
            throw new Error(err.message)
        }
    }


}