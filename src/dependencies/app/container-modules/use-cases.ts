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
    DeleteOneCategoryUseCase,
    IDeleteOneCategoryUseCase
} from "../../../modules/app-apis/use-cases/category-api/deleteOne";
import {
    GetOneByIdCategoryUseCase,
    IGetOneByIdCategoryUseCase
} from "../../../modules/app-apis/use-cases/category-api/getOneById";
import {
    IUpdateOneCategoryByIdUseCase,
    UpdateOneCategoryByIdUseCase
} from "../../../modules/app-apis/use-cases/category-api/updateOneById";






export const UseCasesModule = new ContainerModule((bind: interfaces.Bind) => {
    bind<IGetAllBuildingsUseCase>(symbols.useCases.building.getAll).to(GetAllBuildingsUseCase)
    bind<ICreateBuildingUseCase>(symbols.useCases.building.create).to(CreateBuildingUseCase)
    bind<IGetBuildingByIdUseCase>(symbols.useCases.building.getById).to(GetBuildingByIdUseCase)
    bind<IUpdateBuildingByIdUseCase>(symbols.useCases.building.updateById).to(UpdateBuildingByIdUseCase)
    bind<IDeleteBuildingByIdUseCase>(symbols.useCases.building.deleteById).to(DeleteBuildingByIdUseCase)


    bind<ICreateCategoryUseCase>(symbols.useCases.category.create).to(CreateCategoryUseCase)
    bind<IGetAllCategoriesUseCase>(symbols.useCases.category.getAll).to(GetAllCategoriesUseCase)
    bind<IDeleteOneCategoryUseCase>(symbols.useCases.category.deleteOneById).to(DeleteOneCategoryUseCase)
    bind<IGetOneByIdCategoryUseCase>(symbols.useCases.category.getOneById).to(GetOneByIdCategoryUseCase)
    bind<IUpdateOneCategoryByIdUseCase>(symbols.useCases.category.updateOneById).to(UpdateOneCategoryByIdUseCase)

})