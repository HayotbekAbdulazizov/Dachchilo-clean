import mongoose from "mongoose";
import {IFavouriteDocument} from "../../../domain/models/FavouriteModel";

const FavouriteSchema = new mongoose.Schema({

        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },

        building: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Building"
        },

    },
    {
        timestamps: true
    }
)





export const FavouriteModel = mongoose.model<IFavouriteDocument>("Favourite", FavouriteSchema)