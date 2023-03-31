export const symbols = {
     controllers: {
         buildingController: Symbol.for('BuildingController'),
         categoryController: Symbol.for('CategoryController'),
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
        }
    },

    DB: {
        driver: Symbol.for('MongoDriver'),
        repositories: {
            buildingRepository: Symbol.for('BuildingRepository'),
            categoryRepository: Symbol.for('CategoryRepository'),
        }
    },


    server: Symbol.for('Server'),


}