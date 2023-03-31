import {ICategoryDocument} from "../../../../domain/models/category";
import {inject, injectable} from "inversify";
import {ICategoryRepository} from "../../../../domain/interfaces/repositories/CategoryRepository";
import {symbols} from "../../../../dependencies/symbols";
import { ObjectId, QueryOptions} from "mongoose";


export interface IDeleteOneCategoryByIdUseCase {
    execute(id: string | ObjectId, options?: QueryOptions): Promise<ICategoryDocument | null>
}



@injectable()
export class DeleteOneCategoryByIdUseCase implements IDeleteOneCategoryByIdUseCase{

    constructor(
        @inject<ICategoryRepository>(symbols.DB.repositories.categoryRepository)
        private categoryRepository: ICategoryRepository
    ) {}


    async execute(id: string | ObjectId, options: QueryOptions = {}): Promise<ICategoryDocument | null> {
        try{
            return await this.categoryRepository.deleteOne({_id: id}, options)
        }catch (err: any) {
            throw new Error(err.message)
        }
    }


}