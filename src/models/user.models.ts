import { Model, Schema, model } from 'mongoose';
import userInterface from '../types/user.type';

const userSchema = new Schema<userInterface>({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
},{ versionKey: false });

const User: Model<userInterface> = model<userInterface>('User', userSchema);

export default User;
