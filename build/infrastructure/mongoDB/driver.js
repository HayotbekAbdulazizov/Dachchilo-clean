"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDriver = void 0;
const mongoose_1 = require("mongoose");
const buildingSchema_1 = require("./schemas/buildingSchema");
const inversify_1 = require("inversify");
require("reflect-metadata");
let MongoDriver = class MongoDriver {
    async init() {
        return new Promise((resolve) => {
            this.db = (0, mongoose_1.createConnection)('mongodb://127.0.0.1:27017/dachchilo2');
            this.db.once('open', async () => {
                await this.createModels();
                resolve();
            });
        });
    }
    async createModels() {
        this.buildingModel = await this.db.model('Building', buildingSchema_1.BuildingSchema);
        console.log(' - Db models are created - ');
    }
};
MongoDriver = __decorate([
    (0, inversify_1.injectable)()
], MongoDriver);
exports.MongoDriver = MongoDriver;
