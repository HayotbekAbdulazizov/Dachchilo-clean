import {ICategoryDocument} from "../../../../domain/models/CategoryModel";
import {inject, injectable} from "inversify";
import {ICategoryRepository} from "../../../../domain/interfaces/repositories/CategoryRepository";
import {symbols} from "../../../../dependencies/symbols";
import {FilterQuery} from "mongoose";


export interface IGetAllCategoriesUseCase {
    execute(query: FilterQuery<ICategoryDocument>): Promise<ICategoryDocument[]>
}



@injectable()
export class GetAllCategoriesUseCase implements IGetAllCategoriesUseCase{

    constructor(
        @inject<ICategoryRepository>(symbols.DB.repositories.categoryRepository)
        private categoryRepository: ICategoryRepository
    ) {}


    async execute(query: FilterQuery<ICategoryDocument> = {}): Promise<ICategoryDocument[]> {
        try{
            return await this.categoryRepository.get(query)
        }catch (err: any) {
            throw new Error(err.message)
        }
    }


}