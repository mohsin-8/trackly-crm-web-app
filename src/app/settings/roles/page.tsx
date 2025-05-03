import React from 'react';
import Roles from '@/components/Roles/Roles';
import { Role } from '@/lib/types/roles';

const RolesPage = async () => {
    const res = await fetch("http://localhost:3000/api/roles", { cache: "no-store" });
    const rolesData: Role[] = await res.json();
    return <Roles roles={rolesData} />
}

export default RolesPage;