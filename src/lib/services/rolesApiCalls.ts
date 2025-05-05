import axios from '@/lib/axios';
import { Role } from '@/lib/types/roles';

export const getRoles = async (): Promise<Role[]> => {
    const res = await axios.get('/api/roles');
    return res.data;
};

export const deleteRole = async (id: string) => {
    await axios.delete(`/api/roles/${id}`);
};