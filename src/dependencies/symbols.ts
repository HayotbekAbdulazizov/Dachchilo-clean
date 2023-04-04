export const symbols = {
     controllers: {
         buildingController: Symbol.for('BuildingController'),
         categoryController: Symbol.for('CategoryController'),
         commentController: Symbol.for('CommentController'),
         userController: Symbol.for('UserController')
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
        },

        user: {
            register: Symbol.for('registerUserUseCase'),
            login: Symbol.for('loginUserUseCase'),
            deleteById: Symbol.for('deleteUserByIdUseCase'),
            // getByEmail: Symbol.for('getUserByEmailUseCase'),
            updateById: Symbol.for('updateUserByIdUseCase'),
            getById: Symbol.for('getUserByIdUseCase')
        }
    },





    DB: {
        driver: Symbol.for('MongoDriver'),
        repositories: {
            buildingRepository: Symbol.for('BuildingRepository'),
            categoryRepository: Symbol.for('CategoryRepository'),
            commentRepository: Symbol.for('CommentRepository'),
            userRepository: Symbol.for('UserRepository')
        }
    },


    server: Symbol.for('Server'),


}