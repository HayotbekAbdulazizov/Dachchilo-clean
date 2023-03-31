import mongoose from "mongoose";
import { CATEGORY_TYPE } from "../../../domain/models/category";
import slugify  from "slugify";


export const CategorySchema = new mongoose.Schema({

        title: {
            type: String,
            required: true
        },

        type: {
            type: String,
            enum: CATEGORY_TYPE,
            default: CATEGORY_TYPE.PARENT
        },

        parentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category"
        },

        buildings: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Building'
        }],

        slug: {
            type: String,
            slug: "title",
            unique: true
        }
    },
    {
        timestamps: true
    }
)



CategorySchema.pre("save", async function (next) {
    if (this.isModified("slug")) {
        return next();
    }
    this.slug = slugify(this.title)

    // Parent id
    this.type = this.parentId == null ? CATEGORY_TYPE.PARENT : CATEGORY_TYPE.CHILD
    return next();
});
