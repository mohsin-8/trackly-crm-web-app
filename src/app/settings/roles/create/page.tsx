import React from 'react';
import Layout from '@/components/Layout/Layout';
import EditRoleComp from '@/components/EditRoleComp/EditRoleComp';

const RolesCreate = async () => {
    return (
        <Layout>
            <EditRoleComp />
        </Layout>
    )
}

export default RolesCreate;