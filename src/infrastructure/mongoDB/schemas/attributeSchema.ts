import mongoose from "mongoose";
import {IAttributeDocument, TYPE} from "../../../domain/models/AttributeModel";


const AttributeSchema = new mongoose.Schema({

        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category"
        },

        title: {
            type: String,
            required: true
        },

        type: {
            type: String,
            enum: TYPE.TEXT,
        },

    },
    {
        timestamps: true
    }
)



export const AttributeModel = mongoose.model<IAttributeDocument>("Attribute", AttributeSchema)