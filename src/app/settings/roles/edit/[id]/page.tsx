import React from 'react';
import Layout from '@/components/Layout/Layout';
import CreateRoleComp from '@/components/CreateRoleComp/CreateRoleComp';

const RolesEdit = async ({ params }: { params: { id: string } }) => {
    const { id } = await params;
    return (
        <Layout>
            <CreateRoleComp id={id} />
        </Layout>
    )
}

export default RolesEdit;