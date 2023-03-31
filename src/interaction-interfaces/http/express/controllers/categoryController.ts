import {IGetAllCategoriesUseCase} from "../../../../modules/app-apis/use-cases/category-api/getAll";
import { symbols } from "../../../../dependencies/symbols";
import { injectable, inject } from "inversify";
import {ICreateCategoryUseCase} from "../../../../modules/app-apis/use-cases/category-api/create";
import {IGetOneCategoryByIdUseCase} from "../../../../modules/app-apis/use-cases/category-api/getOneById";
import {IUpdateOneCategoryByIdUseCase} from "../../../../modules/app-apis/use-cases/category-api/updateOneById";
import {IDeleteOneCategoryByIdUseCase} from "../../../../modules/app-apis/use-cases/category-api/deleteOne";
import { Response, Request } from "express";


export interface ICategoryController{
    getAll(req: Request, res: Response): Promise<Response>
    create(req: Request, res: Response): Promise<Response>
    getById(req: Request, res: Response): Promise<Response>
    updateById(req: Request, res: Response): Promise<Response>
    deleteById(req: Request, res: Response): Promise<Response>
}





@injectable()
export class CategoryController implements ICategoryController {
    constructor(
        @inject<IGetAllCategoriesUseCase>(symbols.useCases.category.getAll)
        private getAllCategoriesUseCase: IGetAllCategoriesUseCase,
        @inject<ICreateCategoryUseCase>(symbols.useCases.category.create)
        private createCategoryUseCase: ICreateCategoryUseCase,
        @inject<IGetOneCategoryByIdUseCase>(symbols.useCases.category.getOneById)
        private getOneCategoryByIdUseCase: IGetOneCategoryByIdUseCase,
        @inject<IUpdateOneCategoryByIdUseCase>(symbols.useCases.category.updateOneById)
        private updateOneCategoryByIdUseCase: IUpdateOneCategoryByIdUseCase,
        @inject<IDeleteOneCategoryByIdUseCase>(symbols.useCases.category.deleteOneById)
        private deleteOneCategoryByIdUseCase: IDeleteOneCategoryByIdUseCase,
    ) {}


    async getAll(_req: Request, res: Response): Promise<Response>{
        try{
            const categories = await this.getAllCategoriesUseCase.execute({})
            return res.status(200).json(categories)

        }catch (err: any) {
            return res.status(403).send(err.message)
        }
    }


    async create(req: Request, res: Response): Promise<Response>{
        try{
            const data = req.body
            const category = await this.createCategoryUseCase.execute(data)
            return res.status(201).send(category)

        }catch (err: any) {
            return res.status(403).send(err.message)
        }
    }



    async getById(req: Request, res: Response): Promise<Response>{
        try{
            const id = req.params.id
            const category = await this.getOneCategoryByIdUseCase.execute(id)
            return res.status(200).send(category)
        }catch (err: any) {
            return res.status(403).send(err.message)
        }
    }



    async updateById(req: Request, res: Response): Promise<Response>{
        try{
            const id = req.params.id
            const data = req.body
            const category = await this.updateOneCategoryByIdUseCase.execute(id, data)
            return res.status(300).send(category)

        }catch (err: any) {
            return res.status(403).send(err.message)
        }
    }



    async deleteById(req: Request, res: Response): Promise<Response>{
        const id = req.params.id

        try{
            const category = await this.deleteOneCategoryByIdUseCase.execute(id)
            return res.status(203).json(category)
        }catch (err: any){
            return res.status(403).json(err.message)
        }
    }


}


