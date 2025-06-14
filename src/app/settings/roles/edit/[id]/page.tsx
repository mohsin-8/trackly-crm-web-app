import React from 'react';
import Layout from '@/components/Layout/Layout';
import EditRoleComp from '@/components/EditRoleComp/EditRoleComp';

const RolesEdit = async ({ params }: { params: { id: string } }) => {
    const { id } = await params;
    return (
        <Layout>
            <EditRoleComp id={id} />
        </Layout>
    )
}

export default RolesEdit;