import {ICategoryDocument, ICategoryInput} from "../../../../domain/models/category";
import {inject, injectable} from "inversify";
import {ICategoryRepository} from "../../../../domain/interfaces/repositories/CategoryRepository";
import {symbols} from "../../../../dependencies/symbols";


export interface ICreateCategoryUseCase {
    execute(data: ICategoryInput): Promise<ICategoryDocument>
}



@injectable()
export class CreateCategoryUseCase implements ICreateCategoryUseCase{

    constructor(
       @inject<ICategoryRepository>(symbols.DB.repositories.categoryRepository)
       private categoryRepository: ICategoryRepository
    ) {}


    async execute(data: ICategoryInput): Promise<ICategoryDocument> {
        try{
            return await this.categoryRepository.create(data)
        }catch (err: any) {
            throw new Error(err.message)
        }
    }


}