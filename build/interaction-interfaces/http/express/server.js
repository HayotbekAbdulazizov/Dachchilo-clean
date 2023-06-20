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
const dotenv_1 = __importDefault(require("dotenv"));
const multerUpload_1 = require("../../../shared/utils/multerUpload");
const cluster_1 = __importDefault(require("cluster"));
const os_1 = __importDefault(require("os"));
let Server = class Server {
    constructor(buildingController, categoryController, commentController, userController) {
        this.buildingController = buildingController;
        this.categoryController = categoryController;
        this.commentController = commentController;
        this.userController = userController;
        this.app = (0, express_1.default)(); // Should try to put it to container
    }
    init() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(multerUpload_1.upload);
        dotenv_1.default.config();
        this.router();
    }
    async listen() {
        const numCPUs = os_1.default.cpus().length;
        if (cluster_1.default.isPrimary) {
            console.log(`Master ${process.pid} is running`);
            // Fork workers equal to the number of CPUs
            for (let i = 0; i < numCPUs - 1; i++) {
                cluster_1.default.fork();
            }
            // Listen for worker exit event
            cluster_1.default.on('exit', (worker, code, signal) => {
                console.log(`Worker ${worker.process.pid} died with code ${code} and signal ${signal}`);
                console.log('Starting a new worker');
                cluster_1.default.fork();
            });
        }
        else {
            // Start the Express app
            let port = 3000;
            //   if(cluster.worker){
            port = 3000 + cluster_1.default.worker.id;
            //   }
            this.app.listen(port, () => {
                console.log(`Worker ${process.pid} started and listening on port ${port}`);
            });
        }
    }
    router() {
        this.app.get('/buildings', this.buildingController.getAll.bind(this.buildingController));
        this.app.post('/buildings', this.buildingController.create.bind(this.buildingController));
        this.app.get('/buildings/:id', this.buildingController.getById.bind(this.buildingController));
        this.app.put('/buildings/:id', this.buildingController.updateById.bind(this.buildingController));
        this.app.delete('/buildings/:id', this.buildingController.deleteById.bind(this.buildingController));
        this.app.get('/category', this.categoryController.getAll.bind(this.categoryController));
        this.app.post('/category', this.categoryController.create.bind(this.categoryController));
        this.app.put('/category/:id', this.categoryController.updateById.bind(this.categoryController));
        this.app.delete('/category/:id', this.categoryController.deleteById.bind(this.categoryController));
        this.app.get('/category/:id', this.categoryController.getById.bind(this.categoryController));
        this.app.post('/comment', this.commentController.create.bind(this.commentController));
        this.app.get('/comment/:id', this.commentController.getOne.bind(this.commentController));
        this.app.get('/comment/building/:buildingId', this.commentController.getByBuilding.bind(this.commentController));
        this.app.delete('/comment/:id', this.commentController.deleteOne.bind(this.commentController));
        this.app.put('/comment/:id', this.commentController.updateOne.bind(this.commentController));
        this.app.delete('/comment/building', this.commentController.deleteByBuilding.bind(this.commentController));
        this.app.post('/user/register', this.userController.register.bind(this.userController));
        this.app.post('/user/login', this.userController.login.bind(this.userController));
    }
};
Server = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(symbols_1.symbols.controllers.buildingController)),
    __param(1, (0, inversify_1.inject)(symbols_1.symbols.controllers.categoryController)),
    __param(2, (0, inversify_1.inject)(symbols_1.symbols.controllers.commentController)),
    __param(3, (0, inversify_1.inject)(symbols_1.symbols.controllers.userController)),
    __metadata("design:paramtypes", [Object, Object, Object, Object])
], Server);
exports.Server = Server;
