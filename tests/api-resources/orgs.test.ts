// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Crosmos from 'crosmos';

const client = new Crosmos({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource orgs', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.orgs.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('setActive: only required params', async () => {
    const response = await client.orgs.setActive({ org_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });
  });

  // Mock server tests are disabled
  test.skip('listMembers', async () => {
    const response = await client.orgs.listMembers('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
  });

  // Mock server tests are disabled
  test.skip('updateMember: only required params', async () => {
    const response = await client.orgs.updateMember('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      org_uuid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      role: 'admin',
    });
  });

  // Mock server tests are disabled
  test.skip('deleteMember: only required params', async () => {
    const response = await client.orgs.deleteMember('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      org_uuid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // Mock server tests are disabled
  test.skip('createInvite: only required params', async () => {
    const response = await client.orgs.createInvite('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      email: 'dev@stainless.com',
    });
  });

  // Mock server tests are disabled
  test.skip('listInvites', async () => {
    const response = await client.orgs.listInvites('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
  });

  // Mock server tests are disabled
  test.skip('revokeInvite: only required params', async () => {
    const response = await client.orgs.revokeInvite('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      org_uuid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // Mock server tests are disabled
  test.skip('acceptInvite: only required params', async () => {
    const response = await client.orgs.acceptInvite({ token: 'xxxxxxxxxxxxxxxxxxxx' });
  });

  // Mock server tests are disabled
  test.skip('previewInvite: only required params', async () => {
    const response = await client.orgs.previewInvite({ token: 'token' });
  });
});
