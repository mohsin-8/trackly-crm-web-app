import React from 'react';
import Layout from '@/components/Layout/Layout';
import EditModuleComp from '@/components/EditModuleComp/EditModuleComp';

const ModuleCreate = async () => {
    return (
        <Layout>
            <EditModuleComp />
        </Layout>
    )
}

export default ModuleCreate;