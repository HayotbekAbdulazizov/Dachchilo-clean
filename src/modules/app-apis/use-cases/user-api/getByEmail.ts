import {inject, injectable} from "inversify";
import {symbols} from "../../../../dependencies/symbols";
import {globalErrorHandler} from "../../../../shared/utils/errorHandler";
import {IUserDocument} from "../../../../domain/models/UserModel";
import {IUserRepository} from "../../../../domain/interfaces/repositories/UserRepository";
import {ObjectId} from "mongoose";


export interface IGetUserByEmailUseCase {
    execute(email: string): Promise<IUserDocument | null>
}





@injectable()
export class GetUserByEmailUseCase implements IGetUserByEmailUseCase{
    constructor(
        @inject<IUserRepository>(symbols.DB.repositories.userRepository)
        private userRepository: IUserRepository,
    ) {}


    @globalErrorHandler
    async execute(email: string): Promise<IUserDocument | null> {
        return this.userRepository.getOne({email: email})
    }


}