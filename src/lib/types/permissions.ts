import { mod_modules } from "./mod_modules";

export interface Permission {
    _id: string;
    module_id: string | mod_modules;
    description: string;
};