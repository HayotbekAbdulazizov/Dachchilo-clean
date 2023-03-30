export const symbols = {
     controllers: {
         buildingController: Symbol.for('BuildingController'),
     },

    useCases: {
         building: {
             getAll: Symbol.for('getAllBuildingsUseCase'),
             create: Symbol.for('createBuildingUseCase'),
             updateById: Symbol.for('updateBuildingById'),
             getById: Symbol.for('getBuildingByIdUseCase'),
             deleteById: Symbol.for('removeOneBuildingUseCase'),
             delete: Symbol.for('removeBuildingsUseCase')
         }
    },

    DB: {
        driver: Symbol.for('MongoDriver'),
        repositories: {
            buildingRepository: Symbol.for('BuildingRepository'),
        }
    },


    server: Symbol.for('Server'),


}