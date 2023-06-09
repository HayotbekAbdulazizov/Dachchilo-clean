"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildingSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const BuildingModel_1 = require("../../../domain/models/BuildingModel");
const slugify_1 = __importDefault(require("slugify"));
exports.BuildingSchema = new mongoose_1.default.Schema({
    category: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Category"
    },
    author: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User"
    },
    status: {
        type: String,
        enum: BuildingModel_1.STATUS,
        default: BuildingModel_1.STATUS.FREE
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
        enum: BuildingModel_1.TERM,
        default: "SHORT"
    },
    comments: [{
            type: mongoose_1.default.Types.ObjectId,
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
}, {
    timestamps: true
});
exports.BuildingSchema.pre("save", async function (next) {
    if (this.isModified("slug")) {
        return next();
    }
    this.slug = (0, slugify_1.default)(this.title);
    return next();
});
