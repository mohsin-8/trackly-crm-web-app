import axios from '@/lib/axios';
import { permissions, receivePermissionData } from '@/lib/types/permissions';

export const getAllPermissions = async (): Promise<permissions[]> => {
    const res = await axios.get('/api/permissions');
    return res.data;
};

export const updatePermissions = async (id: string, data: receivePermissionData) => {
    const res = await axios.put(`/api/permissions/${id}`, { data });
    return res.data;
};

export const deletePermission = async (id: string) => {
    await axios.delete(`/api/permissions/${id}`);
};

export const createPermission = async (id: string, data: receivePermissionData) => {
    const res = await axios.post(`/api/permissions/${id}`, data);
    return res.data;
};

export const getPermissionById = async (id: string) => {
    const res = await axios.get(`/api/permissions/${id}`);
    return res.data;
};