"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDriverIns = exports.MongoDriver = void 0;
const mongoose_1 = require("mongoose");
const buildingSchema_1 = require("./schemas/buildingSchema");
class MongoDriver {
    async init() {
        return new Promise((resolve) => {
            this.db = (0, mongoose_1.createConnection)('mongodb://127.0.0.1:27017/dachchilo');
            this.db.once('open', async () => {
                await this.createModels();
                console.log(this.buildingModel);
                resolve();
            });
        });
    }
    async createModels() {
        this.buildingModel = await this.db.model('Building', buildingSchema_1.BuildingSchema);
        console.log(' - Db models are created - ');
    }
}
exports.MongoDriver = MongoDriver;
exports.MongoDriverIns = new MongoDriver();
