import {IBuildingDocument} from "../../domain/models/building";
import {Connection, createConnection, Model} from "mongoose";
import {BuildingSchema} from "./schemas/buildingSchema";
import { injectable } from "inversify"
import "reflect-metadata"
export interface IMongoDriver{
    buildingModel: Model<IBuildingDocument>;
    init(): Promise<void>
}


@injectable()
export class MongoDriver implements IMongoDriver {
    private db!: Connection;
    buildingModel!: Model<IBuildingDocument>;


    async init(): Promise<void>{
        return new Promise((resolve) => {
            this.db = createConnection('mongodb://127.0.0.1:27017/dachchilo2');

            this.db.once('open',  async () => {
                await this.createModels()
                resolve()
            })
        })
    }


    private async createModels(){
        this.buildingModel = await this.db.model('Building', BuildingSchema)
        console.log(' - Db models are created - ')
    }
}


