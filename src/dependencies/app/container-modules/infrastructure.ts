import {ContainerModule, interfaces} from "inversify";
import {MongoDriver, IMongoDriver} from "../../../infrastructure/mongoDB/driver";
import {symbols} from "../../symbols";
import {IBuildingRepository} from "../../../domain/interfaces/repositories/BuildingRepository";
import {BuildingRepository} from "../../../infrastructure/mongoDB/repositories/buildingRepository";


export const InfrastructureModule = new ContainerModule((bind: interfaces.Bind) => {
    bind<IMongoDriver>(symbols.DB.driver).to(MongoDriver).inSingletonScope();
    bind<IBuildingRepository>(symbols.DB.repositories.buildingRepository).to(BuildingRepository);
})