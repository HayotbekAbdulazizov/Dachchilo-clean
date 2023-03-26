import {IBuildingRepository} from "../../../domain/interfaces/repositories/BuildingRepository";
import {IBuildingDocument} from "../../../domain/models/building";
import {Model, FilterQuery} from "mongoose";
import {IMongoDriver, MongoDriver, MongoDriverIns} from "../driver";



export class BuildingRepository implements IBuildingRepository {
    private model!: Model<IBuildingDocument>;
    private db!: any;

    constructor() {
        this.db = new MongoDriver()
        this.init()
    }

    private async init(){
        await this.db.init()
        this.model = this.db.buildingModel
    }

    getAll(query: FilterQuery<IBuildingDocument>): Promise<IBuildingDocument[]> {
        return this.model.find(query)
    }

}


export const BuildingRepositoryIns = new BuildingRepository()