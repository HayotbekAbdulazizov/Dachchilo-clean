"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildingRepositoryIns = exports.BuildingRepository = void 0;
const driver_1 = require("../driver");
class BuildingRepository {
    constructor() {
        this.db = new driver_1.MongoDriver();
        this.init();
    }
    async init() {
        await this.db.init();
        this.model = this.db.buildingModel;
    }
    getAll(query) {
        return this.model.find(query);
    }
}
exports.BuildingRepository = BuildingRepository;
exports.BuildingRepositoryIns = new BuildingRepository();
