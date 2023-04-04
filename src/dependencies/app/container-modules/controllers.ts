import {ContainerModule, interfaces} from "inversify";
import {
    BuildingController,
    IBuildingController
} from "../../../interaction-interfaces/http/express/controllers/buildingController";
import { ICategoryController, CategoryController } from "../../../interaction-interfaces/http/express/controllers/categoryController";
import {symbols} from "../../symbols";
import "reflect-metadata";
import {
    CommentController,
    ICommentController
} from "../../../interaction-interfaces/http/express/controllers/commentController";
import {IUserController, UserController} from "../../../interaction-interfaces/http/express/controllers/userController";



export const ControllersModule = new ContainerModule((bind: interfaces.Bind) => {
    bind<IBuildingController>(symbols.controllers.buildingController).to(BuildingController)
    bind<ICategoryController>(symbols.controllers.categoryController).to(CategoryController)
    bind<ICommentController>(symbols.controllers.commentController).to(CommentController)
    bind<IUserController>(symbols.controllers.userController).to(UserController)
})