"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_container_1 = require("./dependencies/app/app-container");
const symbols_1 = require("./dependencies/symbols");
async function start() {
    app_container_1.AppContainer.loadAll();
    await app_container_1.AppContainer.init();
    console.log("--- App started Init ---");
    const server = app_container_1.AppContainer.Services.get(symbols_1.symbols.server);
    server.init();
    console.log("Server ----");
    await server.listen();
}
setImmediate(start);
