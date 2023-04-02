import {ICategoryDocument, ICategoryInput} from "../../../../domain/models/CategoryModel";
import {inject, injectable} from "inversify";
import {ICategoryRepository} from "../../../../domain/interfaces/repositories/CategoryRepository";
import {symbols} from "../../../../dependencies/symbols";
import {globalErrorHandler} from "../../../../shared/utils/errorHandler";


export interface ICreateCategoryUseCase {
    execute(data: ICategoryInput): Promise<ICategoryDocument>
}



@injectable()
export class CreateCategoryUseCase implements ICreateCategoryUseCase{

    constructor(
       @inject<ICategoryRepository>(symbols.DB.repositories.categoryRepository)
       private categoryRepository: ICategoryRepository
    ) {}


    @globalErrorHandler
    async execute(data: ICategoryInput): Promise<ICategoryDocument> {
        return await this.categoryRepository.create(data)
    }


}