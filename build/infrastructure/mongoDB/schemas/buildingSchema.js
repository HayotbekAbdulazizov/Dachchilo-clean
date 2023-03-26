"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildingSchema = void 0;
const mongoose_1 = require("mongoose");
exports.BuildingSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});
