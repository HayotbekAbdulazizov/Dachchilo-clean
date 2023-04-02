export const symbols = {
     controllers: {
         buildingController: Symbol.for('BuildingController'),
         categoryController: Symbol.for('CategoryController'),
         commentController: Symbol.for('CommentController'),
     },




    useCases: {
         building: {
             getAll: Symbol.for('getAllBuildingsUseCase'),
             create: Symbol.for('createBuildingUseCase'),
             updateById: Symbol.for('updateBuildingById'),
             getById: Symbol.for('getBuildingByIdUseCase'),
             deleteById: Symbol.for('removeOneBuildingUseCase'),
             delete: Symbol.for('removeBuildingsUseCase')
         },

        category: {
             getAll: Symbol.for('getAllCategoriesUseCase'),
             create: Symbol.for('createCategoryUseCase'),
             getOneById: Symbol.for('getOneCategoryByIdUseCase'),
             updateOneById: Symbol.for('updateOneCategoryByIdUseCase'),
             deleteOneById: Symbol.for('deleteOneCategoryByIdUseCase'),
        },

        comment: {
             create: Symbol.for('createCommentUseCase'),
             updateOneById: Symbol.for('updateOneCommentByIdUseCase'),
             deleteOneById: Symbol.for('deleteOneCommentByIdUseCase'),
             deleteByBuilding: Symbol.for('deleteCommentsByBuildingUseCase'),
             getByBuilding: Symbol.for('getCommentByBuildingUseCase'),
             getById: Symbol.for('getCommentByIdUseCase')
        }
    },





    DB: {
        driver: Symbol.for('MongoDriver'),
        repositories: {
            buildingRepository: Symbol.for('BuildingRepository'),
            categoryRepository: Symbol.for('CategoryRepository'),
            commentRepository: Symbol.for('CommentRepository'),
        }
    },


    server: Symbol.for('Server'),


}