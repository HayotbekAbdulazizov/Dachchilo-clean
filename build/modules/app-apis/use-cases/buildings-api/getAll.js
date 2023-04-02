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
exports.GetAllBuildingsUseCase = void 0;
const inversify_1 = require("inversify");
const symbols_1 = require("../../../../dependencies/symbols");
const errorHandler_1 = require("../../../../shared/utils/errorHandler");
let GetAllBuildingsUseCase = class GetAllBuildingsUseCase {
    constructor(buildingRepository) {
        this.buildingRepository = buildingRepository;
    }
    async execute(query) {
        return await this.buildingRepository.get(query);
    }
};
__decorate([
    errorHandler_1.globalErrorHandler,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GetAllBuildingsUseCase.prototype, "execute", null);
GetAllBuildingsUseCase = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(symbols_1.symbols.DB.repositories.buildingRepository)),
    __metadata("design:paramtypes", [Object])
], GetAllBuildingsUseCase);
exports.GetAllBuildingsUseCase = GetAllBuildingsUseCase;
