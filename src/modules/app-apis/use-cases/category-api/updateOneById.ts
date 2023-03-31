import {ICategoryDocument, ICategoryInput} from "../../../../domain/models/category";
import {inject, injectable} from "inversify";
import {ICategoryRepository} from "../../../../domain/interfaces/repositories/CategoryRepository";
import {symbols} from "../../../../dependencies/symbols";
import {ObjectId, QueryOptions} from "mongoose";


export interface IUpdateOneCategoryByIdUseCase {
    execute(id: string | ObjectId, data: ICategoryInput, options?: QueryOptions): Promise<ICategoryDocument | null>
}



@injectable()
export class UpdateOneCategoryByIdUseCase implements IUpdateOneCategoryByIdUseCase{

    constructor(
        @inject<ICategoryRepository>(symbols.DB.repositories.categoryRepository)
        private categoryRepository: ICategoryRepository
    ) {}


    async execute(id: string | ObjectId, data: ICategoryInput, options: QueryOptions = {}): Promise<ICategoryDocument | null> {
        try{
            return await this.categoryRepository.updateOne({_id: id} , data, options)
        }catch (err: any) {
            throw new Error(err.message)
        }
    }


}