import {ContainerModule, interfaces} from "inversify";
import {
    GetAllBuildingsUseCase,
    IGetAllBuildingsUseCase
} from "../../../modules/app-apis/use-cases/buildings-api/getAll";
import {symbols} from "../../symbols";


export const UseCasesModule = new ContainerModule((bind: interfaces.Bind) => {
    bind<IGetAllBuildingsUseCase>(symbols.useCases.building.getAll).to(GetAllBuildingsUseCase)
})