import React from 'react';
import Layout from '@/components/Layout/Layout';
import EditPermissionComp from '@/components/EditPermissionComp/EditPermissionComp';

const PermissionEdit = async ({ params }: { params: { id: string } }) => {
    const { id } = await params;
    return (
        <Layout>
            <EditPermissionComp id={id} />
        </Layout>
    )
}

export default PermissionEdit;