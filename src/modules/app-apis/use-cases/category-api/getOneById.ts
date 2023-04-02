import {ICategoryDocument} from "../../../../domain/models/CategoryModel";
import {inject, injectable} from "inversify";
import {ICategoryRepository} from "../../../../domain/interfaces/repositories/CategoryRepository";
import {symbols} from "../../../../dependencies/symbols";
import {ObjectId} from "mongoose";
import {globalErrorHandler} from "../../../../shared/utils/errorHandler";


export interface IGetOneCategoryByIdUseCase {
    execute(id: string | ObjectId): Promise<ICategoryDocument | null>
}



@injectable()
export class GetOneCategoryByIdUseCase implements IGetOneCategoryByIdUseCase{

    constructor(
        @inject<ICategoryRepository>(symbols.DB.repositories.categoryRepository)
        private categoryRepository: ICategoryRepository
    ) {}


    @globalErrorHandler
    async execute(id: string | ObjectId): Promise<ICategoryDocument | null> {
        return await this.categoryRepository.getOne({_id: id})
    }


}