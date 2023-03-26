export const symbols = {
     controllers: {
         buildingController: Symbol.for('BuildingController'),
     },

    useCases: {
         building: {
             getAll: Symbol.for('getAllBuildingsUseCase'),
             create: Symbol.for('createBuildingUseCase'),
             getOne: Symbol.for('getOneBuildingUseCase'),
             removeOne: Symbol.for('removeOneBuildingUseCase'),
             remove: Symbol.for('removeBuildingsUseCase')
         }
    },

    DB: {
        driver: Symbol.for('MongoDriver'),
        repositories: {
            buildingRepository: Symbol.for('BuildingRepository'),
        }
    }

}