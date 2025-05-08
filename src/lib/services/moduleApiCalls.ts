import axios from '@/lib/axios';
import { mod_modules } from '@/lib/types/mod_modules';

export const getModules = async (): Promise<mod_modules[]> => {
    const res = await axios.get('/api/mod-modules');
    return res.data;
};

export const deleteModule = async (id: string) => {
    await axios.delete(`/api/mod-modules/${id}`);
};

export const getModuleById = async (id: string | null) => {
    const res = await axios.get(`/api/mod-modules/${id}`);
    return res.data;
};

export const updateModule = async (id: string, name: string) => {
    await axios.put(`/api/mod-modules/${id}`, { name });
};

export const createModule = async (name: string) => {
    const res = await axios.post(`/api/mod-modules`, { name });
    return res.data;
};