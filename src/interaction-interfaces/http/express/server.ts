import express, {Express, Request, Response} from "express";
import { BuildingController, IBuildingController } from "./controllers/buildingController";
import {symbols} from "../../../dependencies/symbols";
import {inject, injectable} from "inversify";
import "reflect-metadata"
import cors from 'cors';





export interface IServer {
    app: Express
    init(): void;
    listen(): Promise<void>;
}



@injectable()
export class Server implements IServer {
    readonly app: Express ;

    constructor(
        @inject<BuildingController>(symbols.controllers.buildingController)
        private buildingController: IBuildingController,
    ){
        this.app = express()        // Should try to put it to container
    }


    init(): void {
        this.app.use(cors())
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
        this.app.post('/buildings', this.buildingController.create.bind(this.buildingController))
        this.app.get('/buildings/:id', this.buildingController.getById.bind(this.buildingController))
        this.app.put('/buildings/:id', this.buildingController.updateById.bind(this.buildingController))
        this.app.delete('/buildings/:id', this.buildingController.deleteById.bind(this.buildingController))
    }

}

