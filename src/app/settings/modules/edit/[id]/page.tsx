import React from 'react';
import Layout from '@/components/Layout/Layout';
import EditModuleComp from '@/components/EditModuleComp/EditModuleComp';

const ModuleEdit = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  return (
    <Layout>
      <EditModuleComp id={id} />
    </Layout>
  )
}

export default ModuleEdit;