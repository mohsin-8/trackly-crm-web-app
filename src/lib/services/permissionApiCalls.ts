import axios from '@/lib/axios';
import { permissions } from '@/lib/types/permissions';

export const getAllPermissions = async (): Promise<permissions[]> => {
    const res = await axios.get('/api/permissions');
    return res.data;
};