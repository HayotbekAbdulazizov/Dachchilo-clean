import {ICategoryDocument, ICategoryInput} from "../../../../domain/models/CategoryModel";
import {inject, injectable} from "inversify";
import {ICategoryRepository} from "../../../../domain/interfaces/repositories/CategoryRepository";
import {symbols} from "../../../../dependencies/symbols";
import {ObjectId, QueryOptions} from "mongoose";
import {globalErrorHandler} from "../../../../shared/utils/errorHandler";


export interface IUpdateOneCategoryByIdUseCase {
    execute(id: string | ObjectId, data: ICategoryInput, options?: QueryOptions): Promise<ICategoryDocument | null>
}



@injectable()
export class UpdateOneCategoryByIdUseCase implements IUpdateOneCategoryByIdUseCase{

    constructor(
        @inject<ICategoryRepository>(symbols.DB.repositories.categoryRepository)
        private categoryRepository: ICategoryRepository
    ) {}


    @globalErrorHandler
    async execute(id: string | ObjectId, data: ICategoryInput, options: QueryOptions = {}): Promise<ICategoryDocument | null> {
        return await this.categoryRepository.updateOne({_id: id} , data, options)
    }


}