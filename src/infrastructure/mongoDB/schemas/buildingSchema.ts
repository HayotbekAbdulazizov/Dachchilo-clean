import { Schema } from "mongoose";
import {IBuildingDocument} from "../../../domain/models/building";


export const BuildingSchema = new Schema<IBuildingDocument>({
    title: {
        type: String,
        required:true
    },

    price: {
        type: Number,
        required: true
    }
})