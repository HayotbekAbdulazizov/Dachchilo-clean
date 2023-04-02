import mongoose from "mongoose";
import {BOOKING_TYPE, IBookingDocument, STATUS} from "../../../domain/models/BookingModel";


const BookingSchema = new mongoose.Schema({

        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        type: {
            type: String,
            enum: BOOKING_TYPE,
            default: BOOKING_TYPE.SHORTTERM
        },


        building: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Building',
            required: true
        },

        status: {
            type: String,
            enum: STATUS,
            default: STATUS.SUBMITTED,
            required: true
        },



    },
    {
        timestamps: true
    }
)







export const BookingModel = mongoose.model<IBookingDocument>("Booking", BookingSchema)