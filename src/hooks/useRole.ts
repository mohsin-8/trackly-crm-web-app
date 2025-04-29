import { useEffect, useState } from "react";

type Role = "admin" | "sales" | "support" | null;

export const useRole = () => {
    const [role, setRole] = useState<Role>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getRole = async () => {
            try {
                const res = await fetch("/api/auth/me", { credentials: "include" });
                const data = await res.json();

                if (res.ok && data.role) {
                    setRole(data.role);
                } else {
                    setRole(null);
                }
            } catch (error) {
                setRole(null);
            } finally {
                setLoading(false);
            }
        };

        getRole();
    }, []);

    return { role, loading };
};