import axios from '@/lib/axios';
import { Permission } from '@/lib/types/permissions';

export const getPermissions = async (): Promise<Permission[]> => {
    const res = await axios.get('/api/permissions');
    return res.data;
};

export const deletePermissions = async (id: string) => {
    await axios.delete(`/api/permissions/${id}`);
};

export const getPermissionById = async (id: string | null) => {
    const res = await axios.get(`/api/permissions/${id}`);
    return res.data;
};

export const updatePermission = async (id: string, name: string) => {
    await axios.put(`/api/permissions/${id}`, { name });
};

export const createPermission = async (name: string) => {
    const res = await axios.post(`/api/permissions`, { name });
    return res.data;
};