import mongoose from "mongoose";
import { STATUS, TERM } from "../../../domain/models/BuildingModel";
import slugify from "slugify"
import { IImage } from "../../../domain/models/BuildingModel";


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
            type: Array,
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

        comments: [{
            type: mongoose.Types.ObjectId,
            ref: "Comment"
        }],

        // saveds: [{
        //     type: mongoose.Types.ObjectId,
        //     ref: "Favourite"
        // }],

        commentsCount: {
            type: Number,
            required: true,
            default: 0
        },

        // savedsCount: {
        //     type: Number,
        //     required: true,
        //     default: 0
        // },

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