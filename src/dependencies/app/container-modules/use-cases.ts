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


export const UseCasesModule = new ContainerModule((bind: interfaces.Bind) => {
    bind<IGetAllBuildingsUseCase>(symbols.useCases.building.getAll).to(GetAllBuildingsUseCase)
    bind<ICreateBuildingUseCase>(symbols.useCases.building.create).to(CreateBuildingUseCase)
    bind<IGetBuildingByIdUseCase>(symbols.useCases.building.getById).to(GetBuildingByIdUseCase)
    bind<IUpdateBuildingByIdUseCase>(symbols.useCases.building.updateById).to(UpdateBuildingByIdUseCase)
    bind<IDeleteBuildingByIdUseCase>(symbols.useCases.building.deleteById).to(DeleteBuildingByIdUseCase)
})