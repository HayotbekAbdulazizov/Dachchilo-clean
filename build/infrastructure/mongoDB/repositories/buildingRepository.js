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
const inversify_1 = require("inversify");
const symbols_1 = require("../../../dependencies/symbols");
const errorHandler_1 = require("../../../shared/utils/errorHandler");
const BaseRepository_1 = require("./BaseRepository");
let BuildingRepository = class BuildingRepository extends BaseRepository_1.BaseRepository {
    constructor(db) {
        super();
        this.db = db;
        super.init(this.db.buildingModel);
    }
    async get(query) {
        return await super.get(query);
    }
    async create(data) {
        return await super.create(data);
    }
    async getOne(query) {
        const building = await super.getOne(query);
        if (!building) {
            throw new Error("Buildding was not found");
        }
        return building;
    }
    async updateOne(query, data, options = {}) {
        const building = await super.updateOne(query, data, options);
        if (!building) {
            throw new Error("Building was not found ");
        }
        return building;
    }
    async deleteOne(query, options = {}) {
        return super.deleteOne(query, options);
    }
};
__decorate([
    errorHandler_1.globalErrorHandler,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BuildingRepository.prototype, "get", null);
__decorate([
    errorHandler_1.globalErrorHandler,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BuildingRepository.prototype, "create", null);
__decorate([
    errorHandler_1.globalErrorHandler,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BuildingRepository.prototype, "getOne", null);
__decorate([
    errorHandler_1.globalErrorHandler,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], BuildingRepository.prototype, "updateOne", null);
__decorate([
    errorHandler_1.globalErrorHandler,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BuildingRepository.prototype, "deleteOne", null);
BuildingRepository = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(symbols_1.symbols.DB.driver)),
    __metadata("design:paramtypes", [Object])
], BuildingRepository);
exports.BuildingRepository = BuildingRepository;
