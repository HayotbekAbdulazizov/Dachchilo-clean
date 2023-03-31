import {IBuildingDocument} from "../../domain/models/building";
import {BuildingSchema} from "./schemas/buildingSchema";
import { Connection, createConnection, Model } from 'mongoose';
import { injectable } from "inversify"
import { ICategoryDocument } from "../../domain/models/category";
import { CategorySchema } from "./schemas/categorySchema";
import "reflect-metadata"


export interface IMongoDriver{
    buildingModel: Model<IBuildingDocument>;
    categoryModel: Model<ICategoryDocument>;
    init(): Promise<void>
}



@injectable()
export class MongoDriver implements IMongoDriver {
    private db!: Connection;
    categoryModel!: Model<ICategoryDocument>;
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


    private createModels(): void{
        this.buildingModel = this.db.model('Building', BuildingSchema);
        this.categoryModel = this.db.model('Category', CategorySchema);
        console.log(' - Db models are created - ')
    }
}


