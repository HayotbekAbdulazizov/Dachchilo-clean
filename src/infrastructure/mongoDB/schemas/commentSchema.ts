import mongoose from "mongoose";


export const CommentSchema = new mongoose.Schema({

        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },

        building: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Building"
        },

        comment: {
            type: String,
            required: true
        }

    },
    {
        timestamps: true
    }
)