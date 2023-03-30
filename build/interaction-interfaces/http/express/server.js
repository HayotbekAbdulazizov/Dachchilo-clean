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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const symbols_1 = require("../../../dependencies/symbols");
const inversify_1 = require("inversify");
require("reflect-metadata");
const cors_1 = __importDefault(require("cors"));
let Server = class Server {
    constructor(buildingController) {
        this.buildingController = buildingController;
        this.app = (0, express_1.default)(); // Should try to put it to container
    }
    init() {
        this.app.use((0, cors_1.default)());
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
        this.app.post('/buildings', this.buildingController.create.bind(this.buildingController));
        this.app.get('/buildings/:id', this.buildingController.getById.bind(this.buildingController));
        this.app.put('/buildings/:id', this.buildingController.updateById.bind(this.buildingController));
        this.app.delete('/buildings/:id', this.buildingController.deleteById.bind(this.buildingController));
    }
};
Server = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(symbols_1.symbols.controllers.buildingController)),
    __metadata("design:paramtypes", [Object])
], Server);
exports.Server = Server;
