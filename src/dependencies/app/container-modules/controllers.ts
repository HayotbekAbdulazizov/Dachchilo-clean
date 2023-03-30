import {ContainerModule, interfaces} from "inversify";
import {
    BuildingController,
    IBuildingController
} from "../../../interaction-interfaces/http/express/controllers/buildingController";
import {symbols} from "../../symbols";
import "reflect-metadata";


export const ControllersModule = new ContainerModule((bind: interfaces.Bind) => {
    bind<IBuildingController>(symbols.controllers.buildingController).to(BuildingController)
})