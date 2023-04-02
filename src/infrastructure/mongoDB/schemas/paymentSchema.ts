import mongoose from "mongoose";
import {CURRENCY, PAYMENT_STATUS, PAYMENT_TYPE} from "../../../domain/models/PaymentModel";


const PaymentSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    booking: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Booking",
        required: true
    },

    paymentType: {
        type: String,
        enum: PAYMENT_TYPE,
        default: PAYMENT_TYPE.CASH ,
        required: true
    },

    amount: {
        type: Number,
        required: true
    },

    currency: {
        type: String,
        enum: CURRENCY,
        default: CURRENCY.UZS,
        required: true
    },

    status: {
        type: String,
        enum: PAYMENT_STATUS,
    }

})