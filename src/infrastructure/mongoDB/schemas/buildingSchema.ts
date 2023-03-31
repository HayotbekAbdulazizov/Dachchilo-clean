import mongoose from "mongoose";
import { STATUS, TERM } from "../../../domain/models/building";
import slugify from "slugify"



export const BuildingSchema = new mongoose.Schema({

        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category"
        },

        status: {
            type: String,
            enum: STATUS,
            default: STATUS.FREE
        },

        title: {
            type: String,
            required: true
        },

        price: {
            type: Number,
            required: true
        },

        image: {
            type: String,
            required: true
        },

        slug: {
            type: String,
        },

        description: {
          type: String,
          required: true
        },

        type: {
          type: String,
          enum: TERM,
          default: "SHORT"
        },

    },
    {
        timestamps: true
    }
)



BuildingSchema.pre("save", async function (next) {
    if (this.isModified("slug")) {
        return next();
    }
    this.slug = slugify(this.title)
    return next();
});