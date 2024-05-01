import { Document } from "mongoose";

export default interface userInterface extends Document {
    email: string;
    password: string;
};