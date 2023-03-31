"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildingRepository = void 0;
const driver_1 = require("../driver");
const inversify_1 = require("inversify");
const symbols_1 = require("../../../dependencies/symbols");
let BuildingRepository = class BuildingRepository {
    constructor(db) {
        this.db = db;
        this.model = this.db.buildingModel;
    }
    async get(filter, options = {}) {
        try {
            return this.model.find(filter, options);
        }
        catch (err) {
            throw new Error(err.message);
        }
    }
    async create(data) {
        try {
            return await this.model.create(data);
        }
        catch (err) {
            throw new Error(err.message);
        }
    }
    async getOne(query, options = {}) {
        try {
            const building = await this.model.findOne(query, options);
            if (!building) {
                throw new Error("Buildding was not found");
            }
            return building;
        }
        catch (err) {
            throw new Error(err.message);
        }
    }
    async updateOne(query, data, options = {}) {
        try {
            const building = await this.model.findOneAndUpdate(query, data, options);
            if (!building) {
                throw new Error("Building was not found ");
            }
            return building;
        }
        catch (err) {
            throw new Error(err.message);
        }
    }
    async deleteOne(query, options = {}) {
        try {
            return await this.model.findOneAndDelete(query, options);
        }
        catch (err) {
            throw new Error(err.message);
        }
    }
};
BuildingRepository = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(symbols_1.symbols.DB.driver)),
    __metadata("design:paramtypes", [driver_1.MongoDriver])
], BuildingRepository);
exports.BuildingRepository = BuildingRepository;
