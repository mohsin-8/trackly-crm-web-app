import mongoose from "mongoose";

export interface permissions {
    _id: string;
    module_id: mongoose.Schema.Types.ObjectId | string;
    name: string;
    description: string;
};