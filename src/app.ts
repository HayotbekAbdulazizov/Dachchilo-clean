import {AppContainer} from "./dependencies/app/app-container";
import {IServer} from "./interaction-interfaces/http/express/server";
import {symbols} from "./dependencies/symbols";


async function start(): Promise<void> {
    AppContainer.loadAll();
    await AppContainer.init();

    const server = AppContainer.Services.get<IServer>(symbols.server);
    server.init()
    await server.listen();

}

setImmediate(start)