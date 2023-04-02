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
exports.BuildingController = void 0;
const inversify_1 = require("inversify");
require("reflect-metadata");
const symbols_1 = require("../../../../dependencies/symbols");
const errorHandler_1 = require("../../../../shared/utils/errorHandler");
let BuildingController = class BuildingController {
    constructor(getAllBuildingsUseCase, createBuildingUseCase, getBuildingByIdUseCase, updateBuildingByIdUseCase, deleteBuildingByIdUseCase) {
        this.getAllBuildingsUseCase = getAllBuildingsUseCase;
        this.createBuildingUseCase = createBuildingUseCase;
        this.getBuildingByIdUseCase = getBuildingByIdUseCase;
        this.updateBuildingByIdUseCase = updateBuildingByIdUseCase;
        this.deleteBuildingByIdUseCase = deleteBuildingByIdUseCase;
    }
    async getAll(_req, res) {
        const responseData = await this.getAllBuildingsUseCase.execute({});
        return res.json(responseData);
    }
    async create(req, res) {
        const data = req.body;
        const building = await this.createBuildingUseCase.execute(data);
        return res.status(201).send(building);
    }
    async getById(req, res) {
        const id = req.params.id;
        const building = await this.getBuildingByIdUseCase.execute(id);
        return res.status(200).send(building);
    }
    async updateById(req, res) {
        const id = req.params.id;
        const data = req.body;
        const building = await this.updateBuildingByIdUseCase.execute(id, data);
        return res.status(300).send(building);
    }
    async deleteById(req, res) {
        const id = req.params.id;
        const building = await this.deleteBuildingByIdUseCase.execute(id);
        return res.status(203).json(building);
    }
};
__decorate([
    errorHandler_1.errorHandlerController,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BuildingController.prototype, "getAll", null);
__decorate([
    errorHandler_1.errorHandlerController,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BuildingController.prototype, "create", null);
__decorate([
    errorHandler_1.errorHandlerController,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BuildingController.prototype, "getById", null);
__decorate([
    errorHandler_1.errorHandlerController,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BuildingController.prototype, "updateById", null);
__decorate([
    errorHandler_1.errorHandlerController,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BuildingController.prototype, "deleteById", null);
BuildingController = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(symbols_1.symbols.useCases.building.getAll)),
    __param(1, (0, inversify_1.inject)(symbols_1.symbols.useCases.building.create)),
    __param(2, (0, inversify_1.inject)(symbols_1.symbols.useCases.building.getById)),
    __param(3, (0, inversify_1.inject)(symbols_1.symbols.useCases.building.updateById)),
    __param(4, (0, inversify_1.inject)(symbols_1.symbols.useCases.building.deleteById)),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object])
], BuildingController);
exports.BuildingController = BuildingController;
