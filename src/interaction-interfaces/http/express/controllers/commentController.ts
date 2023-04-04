import {Request, Response} from "express";
import {inject, injectable} from "inversify";
import "reflect-metadata"
import {symbols} from "../../../../dependencies/symbols";
import {ICreateCommentUseCase} from "../../../../modules/app-apis/use-cases/comment-api/create";
import {IDeleteCommentByBuildingUseCase} from "../../../../modules/app-apis/use-cases/comment-api/deleteByBuilding";
import {IDeleteCommentByIdUseCase} from "../../../../modules/app-apis/use-cases/comment-api/deleteOneById";
import {IGetCommentsByBuildingUseCase} from "../../../../modules/app-apis/use-cases/comment-api/getByBuilding";
import {IUpdateOneCommentByIdUseCase} from "../../../../modules/app-apis/use-cases/comment-api/updateOneById";
import {IGetCommentByIdUseCase} from "../../../../modules/app-apis/use-cases/comment-api/getOne";
import {errorHandlerController} from "../../../../shared/utils/errorHandler";




export interface ICommentController{
    create(req: Request, res: Response): Promise<Response>
    updateOne(req: Request, res: Response): Promise<Response>
    deleteOne(req: Request, res: Response): Promise<Response>
    getByBuilding(req: Request, res: Response): Promise<Response>
    deleteByBuilding(req: Request, res: Response): Promise<Response>
    getOne(req: Request, res: Response): Promise<Response>

    // delete(req: Request, res: Response): Promise<Response>
    // update(req: Request, res: Response): Promise<Response>
}





@injectable()
export class CommentController implements ICommentController {
    constructor(
        @inject<ICreateCommentUseCase>(symbols.useCases.comment.create)
        private createCommentUseCase: ICreateCommentUseCase,

        @inject<IDeleteCommentByBuildingUseCase>(symbols.useCases.comment.deleteByBuilding)
        private deleteCommentByBuildingUseCase: IDeleteCommentByBuildingUseCase,

        @inject<IDeleteCommentByIdUseCase>(symbols.useCases.comment.deleteOneById)
        private deleteCommentByIdUseCase: IDeleteCommentByIdUseCase,

        @inject<IGetCommentsByBuildingUseCase>(symbols.useCases.comment.getByBuilding)
        private getCommentsByBuildingUseCase: IGetCommentsByBuildingUseCase,

        // @inject<IUpdateManyCommentsUseCase>(symbols.useCases.comment.updateMany)
        // private updateManyCommentsUseCase: IUpdateManyCommentsUseCase,

        @inject<IGetCommentByIdUseCase>(symbols.useCases.comment.getById)
        private getCommentByIdUseCase: IGetCommentByIdUseCase,

        @inject<IUpdateOneCommentByIdUseCase>(symbols.useCases.comment.updateOneById)
        private updateOneCommentById: IUpdateOneCommentByIdUseCase
    ) {}


    @errorHandlerController
    async create(req: Request, res: Response): Promise<Response>{
        const data = req.body
        const comment = await this.createCommentUseCase.execute(data)
        return res.status(201).send(comment)
    }



    @errorHandlerController
    async updateOne(req: Request, res: Response): Promise<Response>{
        const id = req.params.id
        const data = req.body
        const comment = await this.updateOneCommentById.execute(id, data)
        return res.status(300).send(comment)
    }



    @errorHandlerController
    async deleteOne(req: Request, res: Response): Promise<Response>{
        const id = req.params.id
        const comment = await this.deleteCommentByIdUseCase.execute(id)
        return res.status(203).json(comment)
    }


    async getByBuilding(req: Request, res: Response): Promise<Response>{
        const buildingId = req.body.buildingId
        const comments = await this.getCommentsByBuildingUseCase.execute(buildingId);
        return res.status(200).json(comments)
    }



    @errorHandlerController
    async deleteByBuilding(req: Request, res: Response): Promise<Response>{
        const buildingId = req.body.buildingId
        const comments = await this.deleteCommentByBuildingUseCase.execute(buildingId);
        return res.status(200).json(comments)
    }


    @errorHandlerController
    async getOne(req: Request, res: Response): Promise<Response>{
        const id = req.params.id
        const comment = await this.getCommentByIdUseCase.execute(id)
        return res.status(200).json(comment)
    }


}


