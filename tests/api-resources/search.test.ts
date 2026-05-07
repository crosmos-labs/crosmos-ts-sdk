// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Crosmos from 'crosmos';

const client = new Crosmos({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource search', () => {
  // Mock server tests are disabled
  test.skip('hybrid: only required params', async () => {
    const responsePromise = client.search.hybrid({
      query: 'x',
      space_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('hybrid: required and optional params', async () => {
    const response = await client.search.hybrid({
      query: 'x',
      space_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      diversify: true,
      graph: true,
      include_source: true,
      limit: 1,
      recency_bias: 0,
      rerank: true,
    });
  });
});
