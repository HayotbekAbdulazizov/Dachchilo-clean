import mongoose from "mongoose";
import {ROLE} from "../../../domain/models/UserModel";
import bcrypt from "bcrypt"
import { IUserDocument } from "../../../domain/models/UserModel";


export const UserSchema = new mongoose.Schema({
        email: {
            type: String,
            required:true,
            unique:true
        },

        name: {
            type: String,
            required: true
        },

        password: {
            type: String,
            required:true
        },

        role: {
            type: String,
            enum: ROLE,
            default: ROLE.USER
        },

    },
    {
        timestamps: true
    }
)




UserSchema.pre("save", async function (next) {
    let user = this as IUserDocument;

    if (!user.isModified("password")) {
        return next();
    }

    const salt = await bcrypt.genSalt(10);
    user.password = bcrypt.hashSync(user.password, salt);
    return next();
});




UserSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
    return bcrypt.compare(candidatePassword, this.password).catch((_e)=> false)
}

