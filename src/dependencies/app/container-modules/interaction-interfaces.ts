import {ContainerModule, interfaces} from "inversify";
import {IServer, Server} from "../../../interaction-interfaces/http/express/server";
import {symbols} from "../../symbols";
import "reflect-metadata";


export const InteractionInterfacesModule = new ContainerModule((bind: interfaces.Bind) => {
    bind<IServer>(symbols.server).to(Server)
})