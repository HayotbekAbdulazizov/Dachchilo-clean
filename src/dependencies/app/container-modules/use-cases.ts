import {ContainerModule, interfaces} from "inversify";
import {
    GetAllBuildingsUseCase,
    IGetAllBuildingsUseCase,
} from "../../../modules/app-apis/use-cases/buildings-api/getAll";
import {ICreateBuildingUseCase, CreateBuildingUseCase} from "../../../modules/app-apis/use-cases/buildings-api/create";
import { IGetBuildingByIdUseCase, GetBuildingByIdUseCase } from "../../../modules/app-apis/use-cases/buildings-api/getById";

import {symbols} from "../../symbols";
import "reflect-metadata";
import {
    IUpdateBuildingByIdUseCase,
    UpdateBuildingByIdUseCase
} from "../../../modules/app-apis/use-cases/buildings-api/updateById";
import {
    DeleteBuildingByIdUseCase,
    IDeleteBuildingByIdUseCase
} from "../../../modules/app-apis/use-cases/buildings-api/deleteById";
import {CreateCategoryUseCase, ICreateCategoryUseCase} from "../../../modules/app-apis/use-cases/category-api/create";
import {GetAllCategoriesUseCase, IGetAllCategoriesUseCase} from "../../../modules/app-apis/use-cases/category-api/getAll";
import {
    IUpdateOneCategoryByIdUseCase,
    UpdateOneCategoryByIdUseCase
} from "../../../modules/app-apis/use-cases/category-api/updateOneById";
import {CreateCommentUseCase, ICreateCommentUseCase} from "../../../modules/app-apis/use-cases/comment-api/create";
import {
    DeleteCommentByBuildingUseCase,
    IDeleteCommentByBuildingUseCase
} from "../../../modules/app-apis/use-cases/comment-api/deleteByBuilding";
import {
    DeleteCommentByIdUseCase,
    IDeleteCommentByIdUseCase
} from "../../../modules/app-apis/use-cases/comment-api/deleteOneById";
import {
    GetCommentsByBuildingUseCase,
    IGetCommentsByBuildingUseCase
} from "../../../modules/app-apis/use-cases/comment-api/getByBuilding";
import { DeleteOneCategoryByIdUseCase, IDeleteOneCategoryByIdUseCase } from "../../../modules/app-apis/use-cases/category-api/deleteOne";
import { IGetOneCategoryByIdUseCase, GetOneCategoryByIdUseCase } from "../../../modules/app-apis/use-cases/category-api/getOneById";
import {UpdateOneCommentByIdUseCase, IUpdateOneCommentByIdUseCase} from "../../../modules/app-apis/use-cases/comment-api/updateOneById";
import {GetCommentByIdUseCase, IGetCommentByIdUseCase} from "../../../modules/app-apis/use-cases/comment-api/getOne";
import {IRegisterUserUseCase, RegisterUserUseCase} from "../../../modules/app-apis/use-cases/user-api/register";
import {ILoginUserUseCase, LoginUserUseCase} from "../../../modules/app-apis/use-cases/user-api/login";
import {DeleteUserByIdUseCase, IDeleteUserByIdUseCase} from "../../../modules/app-apis/use-cases/user-api/deleteById";
import {IUpdateUserByIdUseCase, UpdateUserByIdUseCase} from "../../../modules/app-apis/use-cases/user-api/updateById";
import {GetUserByIdUseCase, IGetUserByIdUseCase} from "../../../modules/app-apis/use-cases/user-api/getById";





export const UseCasesModule = new ContainerModule((bind: interfaces.Bind) => {
    bind<IGetAllBuildingsUseCase>(symbols.useCases.building.getAll).to(GetAllBuildingsUseCase)
    bind<ICreateBuildingUseCase>(symbols.useCases.building.create).to(CreateBuildingUseCase)
    bind<IGetBuildingByIdUseCase>(symbols.useCases.building.getById).to(GetBuildingByIdUseCase)
    bind<IUpdateBuildingByIdUseCase>(symbols.useCases.building.updateById).to(UpdateBuildingByIdUseCase)
    bind<IDeleteBuildingByIdUseCase>(symbols.useCases.building.deleteById).to(DeleteBuildingByIdUseCase)


    bind<ICreateCategoryUseCase>(symbols.useCases.category.create).to(CreateCategoryUseCase)
    bind<IGetAllCategoriesUseCase>(symbols.useCases.category.getAll).to(GetAllCategoriesUseCase)
    bind<IDeleteOneCategoryByIdUseCase>(symbols.useCases.category.deleteOneById).to(DeleteOneCategoryByIdUseCase)
    bind<IGetOneCategoryByIdUseCase>(symbols.useCases.category.getOneById).to(GetOneCategoryByIdUseCase)
    bind<IUpdateOneCategoryByIdUseCase>(symbols.useCases.category.updateOneById).to(UpdateOneCategoryByIdUseCase)


    bind<ICreateCommentUseCase>(symbols.useCases.comment.create).to(CreateCommentUseCase)
    bind<IDeleteCommentByBuildingUseCase>(symbols.useCases.comment.deleteByBuilding).to(DeleteCommentByBuildingUseCase)
    bind<IDeleteCommentByIdUseCase>(symbols.useCases.comment.deleteOneById).to(DeleteCommentByIdUseCase)
    bind<IGetCommentsByBuildingUseCase>(symbols.useCases.comment.getByBuilding).to(GetCommentsByBuildingUseCase)
    bind<IUpdateOneCommentByIdUseCase>(symbols.useCases.comment.updateOneById).to(UpdateOneCommentByIdUseCase)
    bind<IGetCommentByIdUseCase>(symbols.useCases.comment.getById).to(GetCommentByIdUseCase)


    bind<IRegisterUserUseCase>(symbols.useCases.user.register).to(RegisterUserUseCase)
    bind<ILoginUserUseCase>(symbols.useCases.user.login).to(LoginUserUseCase)
    bind<IDeleteUserByIdUseCase>(symbols.useCases.user.deleteById).to(DeleteUserByIdUseCase)
    bind<IUpdateUserByIdUseCase>(symbols.useCases.user.updateById).to(UpdateUserByIdUseCase)
    bind<IGetUserByIdUseCase>(symbols.useCases.user.getById).to(GetUserByIdUseCase)


})