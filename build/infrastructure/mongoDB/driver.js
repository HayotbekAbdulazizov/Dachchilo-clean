"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDriver = void 0;
const buildingSchema_1 = require("./schemas/buildingSchema");
const categorySchema_1 = require("./schemas/categorySchema");
const commentSchema_1 = require("./schemas/commentSchema");
const mongoose_1 = require("mongoose");
const inversify_1 = require("inversify");
require("reflect-metadata");
const userSchema_1 = require("./schemas/userSchema");
let MongoDriver = class MongoDriver {
    async init() {
        return new Promise((resolve) => {
            // this.db = createConnection('mongodb+srv://abdulazizovdev:123@cluster0.inovmu4.mongodb.net');
            this.db = (0, mongoose_1.createConnection)('mongodb://127.0.0.1:27017/dachchilo');
            this.db.once('open', async () => {
                await this.createModels();
                resolve();
            });
        });
    }
    createModels() {
        this.buildingModel = this.db.model('Building', buildingSchema_1.BuildingSchema);
        this.categoryModel = this.db.model('Category', categorySchema_1.CategorySchema);
        this.commentModel = this.db.model('Comment', commentSchema_1.CommentSchema);
        this.userModel = this.db.model('User', userSchema_1.UserSchema);
        console.log(' --- Database models are created --- ');
    }
};
MongoDriver = __decorate([
    (0, inversify_1.injectable)()
], MongoDriver);
exports.MongoDriver = MongoDriver;
