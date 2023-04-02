import {Request, Response} from "express";
import {inject, injectable} from "inversify";
import "reflect-metadata"
import {symbols} from "../../../../dependencies/symbols";
import {ICreateCommentUseCase} from "../../../../modules/app-apis/use-cases/comment-api/create";
import {IDeleteCommentByBuildingUseCase} from "../../../../modules/app-apis/use-cases/comment-api/deleteByBuilding";
import {IDeleteCommentByIdUseCase} from "../../../../modules/app-apis/use-cases/comment-api/deleteOneById";
import {IGetCommentsByBuildingUseCase} from "../../../../modules/app-apis/use-cases/comment-api/getByBuilding";
import {IUpdateManyCommentsUseCase} from "../../../../modules/app-apis/use-cases/comment-api/updateMany";
import {IUpdateOneCommentByIdUseCase} from "../../../../modules/app-apis/use-cases/comment-api/updateOneById";
import {ICommentDocument} from "../../../../domain/models/CommentModel";
import {IGetCommentByIdUseCase} from "../../../../modules/app-apis/use-cases/comment-api/getOne";


export interface ICommentController{
    create(req: Request, res: Response): Promise<Response>
    // update(req: Request, res: Response): Promise<Response>
    // delete(req: Request, res: Response): Promise<Response>
    updateOne(req: Request, res: Response): Promise<Response>
    deleteOne(req: Request, res: Response): Promise<Response>
    getByBuilding(req: Request, res: Response): Promise<Response>
    deleteByBuilding(req: Request, res: Response): Promise<Response>
    getOne(req: Request, res: Response): Promise<Response>
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


    async create(req: Request, res: Response): Promise<Response>{
        try{
            const data = req.body
            const comment = await this.createCommentUseCase.execute(data)
            return res.status(201).send(comment)

        }catch (err: any) {
            return res.status(403).send(err.message)
        }
    }




    async updateOne(req: Request, res: Response): Promise<Response>{
        try{
            const id = req.params.id
            const data = req.body
            const comment = await this.updateOneCommentById.execute(id, data)
            return res.status(300).send(comment)

        }catch (err: any) {
            return res.status(403).send(err.message)
        }
    }




    async deleteOne(req: Request, res: Response): Promise<Response>{
        const id = req.params.id

        try{
            const comment = await this.deleteCommentByIdUseCase.execute(id)
            return res.status(203).json(comment)
        }catch (err: any){
            return res.status(403).json(err.message)
        }
    }


    async getByBuilding(req: Request, res: Response): Promise<Response>{
        const buildingId = req.body.buildingId
        try{
            const comments = await this.getCommentsByBuildingUseCase.execute(buildingId);
            return res.status(200).json(comments)
        }catch (err: any) {
            return res.status(403).send(err.message)
        }
    }


    async deleteByBuilding(req: Request, res: Response): Promise<Response>{
        const buildingId = req.body.buildingId
        try{
            const comments = await this.deleteCommentByBuildingUseCase.execute(buildingId);
            return res.status(200).json(comments)
        }catch (err: any) {
            return res.status(403).send(err.message)
        }
    }


    async getOne(req: Request, res: Response): Promise<Response>{
        const id = req.params.id
        try{
            const comment = await this.getCommentByIdUseCase.execute(id)
            console.log(comment, "-- comment");
            return res.status(200).json(comment)
        }catch (err: any) {
            return res.status(404).json(err.message)
        }
    }


}


