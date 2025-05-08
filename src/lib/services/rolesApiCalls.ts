import axios from '@/lib/axios';
import { Role } from '@/lib/types/roles';

export const getRoles = async (): Promise<Role[]> => {
    const res = await axios.get('/api/roles');
    return res.data;
};

export const getRolesById = async (id: string | null) => {
    const res = await axios.get(`/api/roles/${id}`);
    return res.data;
};

export const deleteRole = async (id: string) => {
    await axios.delete(`/api/roles/${id}`);
};

export const updateRole = async (id: string, name: string) => {
    await axios.put(`/api/roles/${id}`, { name });
};

export const createRole = async (name: string) => {
    await axios.post(`/api/roles`, {name});
};