import {inject, injectable} from "inversify";
import {symbols} from "../../../../dependencies/symbols";
import {globalErrorHandler} from "../../../../shared/utils/errorHandler";
import {IUserDocument, IUserRegistrationInput} from "../../../../domain/models/UserModel";
import {IUserRepository} from "../../../../domain/interfaces/repositories/UserRepository";
import {IRegisterUserUseCase} from "./register";


export interface IUpdateUserByIdUseCase {
    execute(id: string | Object, data: IUserRegistrationInput): Promise<IUserDocument | null>
}





@injectable()
export class UpdateUserByIdUseCase implements IUpdateUserByIdUseCase{
    constructor(
        @inject<IUserRepository>(symbols.DB.repositories.userRepository)
        private userRepository: IUserRepository,
    ) {}


    @globalErrorHandler
    async execute(id: string | Object, data: IUserRegistrationInput): Promise<IUserDocument | null> {
        return this.userRepository.updateOne({_id: id}, data)
    }


}