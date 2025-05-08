import axios from '@/lib/axios';
import { permissions } from '@/lib/types/permissions';

export const getAllPermissions = async (): Promise<permissions[]> => {
    const res = await axios.get('/api/permissions');
    return res.data;
};

export const updatePermissions = async (id: string, name: string, description: string) => {
    await axios.put(`/api/permissions/${id}`, {name, description});
};

export const deletePermission = async (id: string) => {
    await axios.delete(`/api/permissions/${id}`);
};