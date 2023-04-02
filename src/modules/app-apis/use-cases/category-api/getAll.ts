import {ICategoryDocument} from "../../../../domain/models/CategoryModel";
import {inject, injectable} from "inversify";
import {ICategoryRepository} from "../../../../domain/interfaces/repositories/CategoryRepository";
import {symbols} from "../../../../dependencies/symbols";
import {FilterQuery} from "mongoose";
import {globalErrorHandler} from "../../../../shared/utils/errorHandler";


export interface IGetAllCategoriesUseCase {
    execute(query: FilterQuery<ICategoryDocument>): Promise<ICategoryDocument[]>
}



@injectable()
export class GetAllCategoriesUseCase implements IGetAllCategoriesUseCase{

    constructor(
        @inject<ICategoryRepository>(symbols.DB.repositories.categoryRepository)
        private categoryRepository: ICategoryRepository
    ) {}


    @globalErrorHandler
    async execute(query: FilterQuery<ICategoryDocument> = {}): Promise<ICategoryDocument[]> {
        return await this.categoryRepository.get(query)
    }


}