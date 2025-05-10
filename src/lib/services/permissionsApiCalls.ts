import axios from '@/lib/axios';
import { Permission } from '@/lib/types/permissions';

export const getPermissions = async (): Promise<Permission[]> => {
    const res = await axios.get('/api/permissions');
    return res.data;
};