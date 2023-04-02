
import {inject, injectable} from "inversify";
import {symbols} from "../../../../dependencies/symbols";
import {ICommentDocument} from "../../../../domain/models/CommentModel";
import {ICommentRepository} from "../../../../domain/interfaces/repositories/CommentRepository";
import {ObjectId} from "mongoose";


export interface IGetCommentsByBuildingUseCase {
    execute(buildingId: string | ObjectId): Promise<ICommentDocument[] | null>
}



@injectable()
export class GetCommentsByBuildingUseCase implements IGetCommentsByBuildingUseCase{
    constructor(
        @inject<ICommentRepository>(symbols.DB.repositories.commentRepository)
        private commentRepository: ICommentRepository,
    ) {}


    async execute(buildingId: string | ObjectId): Promise<ICommentDocument[] | null> {
        try{
            return await this.commentRepository.get({building: buildingId})
        }catch (err: any) {
            throw new Error(err.message)
        }
    }


}