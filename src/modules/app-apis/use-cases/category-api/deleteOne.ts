import {ICategoryDocument} from "../../../../domain/models/CategoryModel";
import {inject, injectable} from "inversify";
import {ICategoryRepository} from "../../../../domain/interfaces/repositories/CategoryRepository";
import {symbols} from "../../../../dependencies/symbols";
import { ObjectId, QueryOptions} from "mongoose";
import {globalErrorHandler} from "../../../../shared/utils/errorHandler";


export interface IDeleteOneCategoryByIdUseCase {
    execute(id: string | ObjectId, options?: QueryOptions): Promise<ICategoryDocument | null>
}



@injectable()
export class DeleteOneCategoryByIdUseCase implements IDeleteOneCategoryByIdUseCase{

    constructor(
        @inject<ICategoryRepository>(symbols.DB.repositories.categoryRepository)
        private categoryRepository: ICategoryRepository
    ) {}


    @globalErrorHandler
    async execute(id: string | ObjectId, options: QueryOptions = {}): Promise<ICategoryDocument | null> {
        return await this.categoryRepository.deleteOne({_id: id}, options)
    }


}