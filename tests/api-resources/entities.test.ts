// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Crosmos from 'crosmos';

const client = new Crosmos({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource entities', () => {
  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.entities.list({ space_uuid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.entities.list({
      space_uuid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      entity_type: 'entity_type',
      limit: 1,
      offset: 0,
      order: 'asc',
      q: 'q',
      sort_by: 'name',
    });
  });

  // Mock server tests are disabled
  test.skip('get: only required params', async () => {
    const responsePromise = client.entities.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      space_uuid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('get: required and optional params', async () => {
    const response = await client.entities.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      space_uuid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });
});
