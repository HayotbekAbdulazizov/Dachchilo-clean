"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./interaction-interfaces/http/express/server");
async function start() {
    const server = new server_1.Server();
    server.init();
    server.listen();
}
start();
