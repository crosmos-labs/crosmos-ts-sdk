// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Crosmos } from '../client';

export abstract class APIResource {
  protected _client: Crosmos;

  constructor(client: Crosmos) {
    this._client = client;
  }
}
