import {ICategoryDocument} from "../../../../domain/models/CategoryModel";
import {inject, injectable} from "inversify";
import {ICategoryRepository} from "../../../../domain/interfaces/repositories/CategoryRepository";
import {symbols} from "../../../../dependencies/symbols";
import {ObjectId} from "mongoose";


export interface IGetOneCategoryByIdUseCase {
    execute(id: string | ObjectId): Promise<ICategoryDocument | null>
}



@injectable()
export class GetOneCategoryByIdUseCase implements IGetOneCategoryByIdUseCase{

    constructor(
        @inject<ICategoryRepository>(symbols.DB.repositories.categoryRepository)
        private categoryRepository: ICategoryRepository
    ) {}


    async execute(id: string | ObjectId): Promise<ICategoryDocument | null> {
        try{
            return await this.categoryRepository.getOne({_id: id})
        }catch (err: any) {
            throw new Error(err.message)
        }
    }


}