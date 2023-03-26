"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildingControllerIns = exports.BuildingController = void 0;
const getAll_1 = require("../../../../modules/app-apis/use-cases/buildings-api/getAll");
class BuildingController {
    constructor() {
        this.getAllBuildingsUseCase = getAll_1.GetAllBuildingsUseCaseIns;
    }
    async getAll(req, res) {
        const body = req.body;
        const responseData = await this.getAllBuildingsUseCase.execute({});
        return res.json(responseData);
    }
}
exports.BuildingController = BuildingController;
exports.BuildingControllerIns = new BuildingController();
