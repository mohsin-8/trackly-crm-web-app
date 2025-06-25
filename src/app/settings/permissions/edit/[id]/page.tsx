import React from 'react';
import Layout from '@/components/Layout/Layout';
import EditOrCreatePermission from '@/components/EditOrCreatePermission/EditOrCreatePermission';

const PermissionsEdit = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  return (
    <Layout>
      <EditOrCreatePermission id={id} />
    </Layout>
  )
}

export default PermissionsEdit;