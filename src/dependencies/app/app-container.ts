import { Container } from 'inversify'
import { InfrastructureModule } from "./container-modules/infrastructure";
import {ControllersModule} from "./container-modules/controllers";
import {UseCasesModule} from "./container-modules/use-cases";
import {IMongoDriver} from "../../infrastructure/mongoDB/driver";
import {symbols} from "../symbols";

export class AppContainer {
    static Services = new Container()

    static loadAll(){
        this.Services.load(InfrastructureModule)
        this.Services.load(ControllersModule)
        this.Services.load(UseCasesModule)
    }


    static async init(){
        const db = this.Services.get<IMongoDriver>(symbols.DB.driver)
        db.init()
    }

}