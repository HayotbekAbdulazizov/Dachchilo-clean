import {inject, injectable} from "inversify";
import {symbols} from "../../../../dependencies/symbols";
import {globalErrorHandler} from "../../../../shared/utils/errorHandler";
import {IUserDocument, IUserRegistrationInput} from "../../../../domain/models/UserModel";
import {IUserRepository} from "../../../../domain/interfaces/repositories/UserRepository";


export interface IRegisterUserUseCase {
    execute(data: IUserRegistrationInput): Promise<IUserDocument>
}



@injectable()
export class RegisterUserUseCase implements IRegisterUserUseCase{
    constructor(
        @inject<IUserRepository>(symbols.DB.repositories.userRepository)
        private userRepository: IUserRepository,
    ) {}


    @globalErrorHandler
    async execute(data: IUserRegistrationInput): Promise<IUserDocument> {
        const user = await this.userRepository.register(data)
        console.log(user, " -- USE-caSE")
        return user
    }


}