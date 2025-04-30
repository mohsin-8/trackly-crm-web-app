import mongoose from "mongoose";

export interface permissions {
    module_id: mongoose.Schema.Types.ObjectId | string;
    name: string;
    description: string;
};