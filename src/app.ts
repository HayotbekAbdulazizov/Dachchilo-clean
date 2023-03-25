import { Server } from "./interaction-interfaces/http/express/server";




async function start(): Promise<void>{
    const server = new Server()
    server.init()
    server.listen()
}




start()