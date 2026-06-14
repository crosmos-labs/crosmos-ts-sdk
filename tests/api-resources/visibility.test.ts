// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Crosmos from 'crosmos';

const client = new Crosmos({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource visibility', () => {
  // Mock server tests are disabled
  test.skip('createGroup: only required params', async () => {
    const response = await client.visibility.createGroup('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      name: 'x',
    });
  });

  // Mock server tests are disabled
  test.skip('listGroups', async () => {
    const response = await client.visibility.listGroups('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
  });

  // Mock server tests are disabled
  test.skip('updateGroup: only required params', async () => {
    const response = await client.visibility.updateGroup('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      org_uuid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // Mock server tests are disabled
  test.skip('deleteGroup: only required params', async () => {
    const response = await client.visibility.deleteGroup('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      org_uuid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // Mock server tests are disabled
  test.skip('listGroupMembers: only required params', async () => {
    const response = await client.visibility.listGroupMembers('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      org_uuid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // Mock server tests are disabled
  test.skip('addGroupMember: only required params', async () => {
    const response = await client.visibility.addGroupMember('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      org_uuid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      group_uuid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // Mock server tests are disabled
  test.skip('removeGroupMember: only required params', async () => {
    const response = await client.visibility.removeGroupMember('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      org_uuid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      group_uuid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // Mock server tests are disabled
  test.skip('createGrant: only required params', async () => {
    const response = await client.visibility.createGrant('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      subject_group_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      viewer_group_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // Mock server tests are disabled
  test.skip('listGrants', async () => {
    const response = await client.visibility.listGrants('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
  });

  // Mock server tests are disabled
  test.skip('previewGrant: only required params', async () => {
    const response = await client.visibility.previewGrant('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      subject_group_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      viewer_group_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // Mock server tests are disabled
  test.skip('deleteGrant: only required params', async () => {
    const response = await client.visibility.deleteGrant('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      org_uuid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // Mock server tests are disabled
  test.skip('preview: only required params', async () => {
    const response = await client.visibility.preview('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      user_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // Mock server tests are disabled
  test.skip('updateSettings: only required params', async () => {
    const response = await client.visibility.updateSettings('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      enabled: true,
    });
  });
});
