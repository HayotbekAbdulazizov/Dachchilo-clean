import { Container } from 'inversify'
import { InfrastructureModule } from "./container-modules/infrastructure";
import {ControllersModule} from "./container-modules/controllers";
import {UseCasesModule} from "./container-modules/use-cases";
import {IMongoDriver} from "../../infrastructure/mongoDB/driver";
import {symbols} from "../symbols";
import {InteractionInterfacesModule} from "./container-modules/interaction-interfaces";
import {IServer} from "../../interaction-interfaces/http/express/server";
import "reflect-metadata";


export class AppContainer {
    static Services = new Container()

    static loadAll(){
        this.Services.load(InfrastructureModule)
        this.Services.load(ControllersModule)
        this.Services.load(UseCasesModule)
        this.Services.load(InteractionInterfacesModule)
    }


    static async init(){
        const server = this.Services.get<IServer>(symbols.server)
        console.log(server);
        server.init()

        const db = this.Services.get<IMongoDriver>(symbols.DB.driver)
        await db.init()

        console.log('--- App started ,initialized ---')
    }

}