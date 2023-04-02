import {IBuildingDocument} from "../../domain/models/BuildingModel";
import {BuildingSchema} from "./schemas/buildingSchema";
import { ICategoryDocument } from "../../domain/models/CategoryModel";
import { CategorySchema } from "./schemas/categorySchema";
import {ICommentDocument} from "../../domain/models/CommentModel";
import { CommentSchema } from "./schemas/commentSchema"

import { Connection, createConnection, Model } from 'mongoose';
import { injectable } from "inversify"
import "reflect-metadata"



export interface IMongoDriver{
    buildingModel: Model<IBuildingDocument>;
    categoryModel: Model<ICategoryDocument>;
    commentModel: Model<ICommentDocument>
    init(): Promise<void>
}



@injectable()
export class MongoDriver implements IMongoDriver {
    private db!: Connection;
    categoryModel!: Model<ICategoryDocument>;
    buildingModel!: Model<IBuildingDocument>;
    commentModel!: Model<ICommentDocument>



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
        this.buildingModel = this.db.model<IBuildingDocument>('Building', BuildingSchema);
        this.categoryModel = this.db.model<ICategoryDocument>('Category', CategorySchema);
        this.commentModel = this.db.model<ICommentDocument>('Comment', CommentSchema);
        console.log(' - Db models are created - ')
    }
}


