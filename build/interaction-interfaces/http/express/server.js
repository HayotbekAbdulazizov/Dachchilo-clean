"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const buildingController_1 = require("./controllers/buildingController");
class Server {
    constructor() {
        this.buildingController = new buildingController_1.BuildingController();
        this.app = (0, express_1.default)();
    }
    init() {
        this.app.use(express_1.default.json());
        this.router();
    }
    async listen() {
        this.app.listen(3000, () => {
            console.log("--- App started listening ---");
        });
    }
    router() {
        this.app.get('/buildings', this.buildingController.getAll.bind(this.buildingController));
    }
}
exports.Server = Server;
// export default new Server()
