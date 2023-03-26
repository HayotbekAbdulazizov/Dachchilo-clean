import express, {Express, Request, Response} from "express";
import { BuildingController, IBuildingController } from "./controllers/buildingController";


export interface IServer {
    init(): void;
    listen(): Promise<void>;
}




export class Server implements IServer {
    private readonly app: Express ;
    private buildingController: IBuildingController;

    constructor(){
        this.buildingController = new BuildingController()
        this.app = express()
    }


    init(): void {
        this.app.use(express.json())
        this.router()
    }

    async listen(): Promise<void>{
        this.app.listen(3000, ()=>{
            console.log("--- App started listening ---")
        })
    }

    private router(): void {
        this.app.get('/buildings', this.buildingController.getAll.bind(this.buildingController))
    }

}




// export default new Server()