import {IGetAllCategoriesUseCase} from "../../../../modules/app-apis/use-cases/category-api/getAll";
import { symbols } from "../../../../dependencies/symbols";
import { injectable, inject } from "inversify";
import {ICreateCategoryUseCase} from "../../../../modules/app-apis/use-cases/category-api/create";
import {IGetOneCategoryByIdUseCase} from "../../../../modules/app-apis/use-cases/category-api/getOneById";
import {IUpdateOneCategoryByIdUseCase} from "../../../../modules/app-apis/use-cases/category-api/updateOneById";
import {IDeleteOneCategoryByIdUseCase} from "../../../../modules/app-apis/use-cases/category-api/deleteOne";
import { Response, Request } from "express";
import {errorHandlerController} from "../../../../shared/utils/errorHandler";


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



    @errorHandlerController
    async getAll(_req: Request, res: Response): Promise<Response>{
        const categories = await this.getAllCategoriesUseCase.execute({})
        return res.status(200).json(categories)
    }


    @errorHandlerController
    async create(req: Request, res: Response): Promise<Response>{
        const data = req.body
        const category = await this.createCategoryUseCase.execute(data)
        return res.status(201).send(category)
    }



    @errorHandlerController
    async getById(req: Request, res: Response): Promise<Response>{
        const id = req.params.id
        const category = await this.getOneCategoryByIdUseCase.execute(id)
        return res.status(200).send(category)
    }



    @errorHandlerController
    async updateById(req: Request, res: Response): Promise<Response>{
        const id = req.params.id
        const data = req.body
        const category = await this.updateOneCategoryByIdUseCase.execute(id, data)
        return res.status(300).send(category)
    }



    @errorHandlerController
    async deleteById(req: Request, res: Response): Promise<Response>{
        const id = req.params.id
        const category = await this.deleteOneCategoryByIdUseCase.execute(id)
        return res.status(203).json(category)
    }


}


