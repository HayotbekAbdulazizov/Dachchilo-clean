"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllBuildingsUseCaseIns = exports.GetAllBuildingsUseCase = void 0;
const buildingRepository_1 = require("../../../../infrastructure/mongoDB/repositories/buildingRepository");
class GetAllBuildingsUseCase {
    constructor() {
        this.buildingRepository = buildingRepository_1.BuildingRepositoryIns;
    }
    async execute(query) {
        return this.buildingRepository.getAll(query);
    }
}
exports.GetAllBuildingsUseCase = GetAllBuildingsUseCase;
exports.GetAllBuildingsUseCaseIns = new GetAllBuildingsUseCase();
