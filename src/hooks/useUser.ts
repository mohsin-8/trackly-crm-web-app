import { useEffect, useState } from "react";
import axios from "@/lib/axios";

type Role = "admin" | "sales" | "support";

export interface IUser {
    _id: string;
    name: string;
    sudo_name: string;
    email: string;
    role: Role;
    createdAt: string;
    updatedAt: string;
}

export const useUser = () => {
    const [user, setUser] = useState<IUser | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get("/api/auth/me");
                setUser(res.data.user);
            } catch (err: any) {
                setError(err?.response?.data?.error || "Failed to load user");
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    return { user, loading, error };
};