import {ContainerModule, interfaces} from "inversify";
import {MongoDriver, IMongoDriver} from "../../../infrastructure/mongoDB/driver";
import {symbols} from "../../symbols";
import {IBuildingRepository} from "../../../domain/interfaces/repositories/BuildingRepository";
import {BuildingRepository} from "../../../infrastructure/mongoDB/repositories/buildingRepository";
import "reflect-metadata";
import {ICategoryRepository} from "../../../domain/interfaces/repositories/CategoryRepository";
import {CategoryRepository} from "../../../infrastructure/mongoDB/repositories/categoryRepository";
import {ICommentRepository} from "../../../domain/interfaces/repositories/CommentRepository";
import {CommentRepository} from "../../../infrastructure/mongoDB/repositories/commentRepository";


export const InfrastructureModule = new ContainerModule((bind: interfaces.Bind) => {
    bind<IMongoDriver>(symbols.DB.driver).to(MongoDriver).inSingletonScope();
    bind<IBuildingRepository>(symbols.DB.repositories.buildingRepository).to(BuildingRepository);
    bind<ICategoryRepository>(symbols.DB.repositories.categoryRepository).to(CategoryRepository)
    bind<ICommentRepository>(symbols.DB.repositories.commentRepository).to(CommentRepository)
})