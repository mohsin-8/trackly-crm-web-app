export const accessControl: Record<string, string[]> = {
    "/dashboard": ["admin", "sales", "support"],
    "/projects": ["admin", "sales"],
    "/crm": ["admin"],
};  