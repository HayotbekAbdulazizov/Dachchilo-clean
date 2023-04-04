import {inject, injectable} from "inversify";
import {symbols} from "../../../../dependencies/symbols";
import {globalErrorHandler} from "../../../../shared/utils/errorHandler";
import {IUserDocument} from "../../../../domain/models/UserModel";
import {IUserRepository} from "../../../../domain/interfaces/repositories/UserRepository";
import {ObjectId} from "mongoose";


export interface IDeleteUserByIdUseCase {
    execute(id: string | ObjectId): Promise<IUserDocument | null>
}





@injectable()
export class DeleteUserByIdUseCase implements IDeleteUserByIdUseCase{
    constructor(
        @inject<IUserRepository>(symbols.DB.repositories.userRepository)
        private userRepository: IUserRepository,
    ) {}


    @globalErrorHandler
    async execute(id: string | ObjectId): Promise<IUserDocument | null> {
        return this.userRepository.deleteOne({_id: id})
    }


}