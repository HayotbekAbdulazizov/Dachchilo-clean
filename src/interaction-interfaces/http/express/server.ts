import express, { Express } from "express";
import { BuildingController, IBuildingController } from "./controllers/buildingController";
import {symbols} from "../../../dependencies/symbols";
import {inject, injectable} from "inversify";
import "reflect-metadata"
import cors from 'cors';
import dotenv from 'dotenv';
import {ICategoryController} from "./controllers/categoryController";
import {ICommentController} from "./controllers/commentController";
import { upload} from "../../../shared/utils/multerUpload";
import {IUserController} from "./controllers/userController";
import cluster from  "cluster"
import os from 'os'







export interface IServer {
    app: Express
    init(): void;
    listen(): Promise<void>;
}



@injectable()
export class Server implements IServer {
    readonly app: Express ;

    constructor(
        @inject<BuildingController>(symbols.controllers.buildingController)
        private buildingController: IBuildingController,

        @inject<ICategoryController>(symbols.controllers.categoryController)
        private categoryController: ICategoryController,

        @inject<ICommentController>(symbols.controllers.commentController)
        private commentController: ICommentController,

        @inject<IUserController>(symbols.controllers.userController)
        private userController: IUserController
    ){
        this.app = express()        // Should try to put it to container
    }




    init(): void {
          this.app.use(cors())
          this.app.use(express.json())
          this.app.use(upload)
          dotenv.config();
          this.router()


    }


    async listen(): Promise<void>{

        const numCPUs = os.cpus().length;
        
        if (cluster.isPrimary) {
          console.log(`Master ${process.pid} is running`);
        
          // Fork workers equal to the number of CPUs
          for (let i = 0; i < numCPUs-1; i++) {
            cluster.fork();
          }
        
          // Listen for worker exit event
          cluster.on('exit', (worker, code, signal) => {
            console.log(`Worker ${worker.process.pid} died with code ${code} and signal ${signal}`);
            console.log('Starting a new worker');
            cluster.fork();
          });
        } else {
          // Start the Express app
          let port = 3000
        //   if(cluster.worker){
            port = 3000 + cluster.worker!.id as number;
        //   }

          this.app.listen(port, () => {
            console.log(`Worker ${process.pid} started and listening on port ${port}`);
          });
        }

    }


    private router(): void {
        this.app.get('/buildings', this.buildingController.getAll.bind(this.buildingController))
        this.app.post('/buildings', this.buildingController.create.bind(this.buildingController))
        this.app.get('/buildings/:id', this.buildingController.getById.bind(this.buildingController))
        this.app.put('/buildings/:id', this.buildingController.updateById.bind(this.buildingController))
        this.app.delete('/buildings/:id', this.buildingController.deleteById.bind(this.buildingController))


        this.app.get('/category', this.categoryController.getAll.bind(this.categoryController))
        this.app.post('/category', this.categoryController.create.bind(this.categoryController))
        this.app.put('/category/:id', this.categoryController.updateById.bind(this.categoryController))
        this.app.delete('/category/:id', this.categoryController.deleteById.bind(this.categoryController))
        this.app.get('/category/:id', this.categoryController.getById.bind(this.categoryController))


        this.app.post('/comment', this.commentController.create.bind(this.commentController))
        this.app.get('/comment/:id', this.commentController.getOne.bind(this.commentController))
        this.app.get('/comment/building/:buildingId', this.commentController.getByBuilding.bind(this.commentController))
        this.app.delete('/comment/:id', this.commentController.deleteOne.bind(this.commentController))
        this.app.put('/comment/:id', this.commentController.updateOne.bind(this.commentController))
        this.app.delete('/comment/building', this.commentController.deleteByBuilding.bind(this.commentController))

        this.app.post('/user/register', this.userController.register.bind(this.userController))
        this.app.post('/user/login', this.userController.login.bind(this.userController))


    }

}













