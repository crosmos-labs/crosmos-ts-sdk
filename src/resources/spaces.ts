// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Spaces extends APIResource {
  /**
   * Create memory space
   */
  create(body: SpaceCreateParams, options?: RequestOptions): APIPromise<SpaceCreateResponse> {
    return this._client.post('/api/v1/spaces', { body, ...options });
  }

  /**
   * Pass ?name= to resolve a space by its name (returns 0 or 1 since names are
   * unique per org).
   */
  list(query: SpaceListParams | null | undefined = {}, options?: RequestOptions): APIPromise<SpaceList> {
    return this._client.get('/api/v1/spaces', { query, ...options });
  }

  /**
   * Delete memory space (owner/admin only)
   */
  delete(spaceUuid: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/v1/spaces/${spaceUuid}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get memory space
   */
  get(spaceUuid: string, options?: RequestOptions): APIPromise<SpaceGetResponse> {
    return this._client.get(path`/api/v1/spaces/${spaceUuid}`, options);
  }
}

export interface SpaceList {
  spaces: Array<SpaceList.Space>;

  total: number;
}

export namespace SpaceList {
  export interface Space {
    id: string;

    created_at: string;

    description: string | null;

    meta: { [key: string]: unknown } | null;

    name: string;

    org_id: string;

    updated_at: string;
  }
}

export interface SpaceCreateResponse {
  id: string;

  created_at: string;

  description: string | null;

  meta: { [key: string]: unknown } | null;

  name: string;

  org_id: string;

  updated_at: string;
}

export interface SpaceGetResponse {
  id: string;

  created_at: string;

  description: string | null;

  meta: { [key: string]: unknown } | null;

  name: string;

  org_id: string;

  updated_at: string;
}

export interface SpaceCreateParams {
  name: string;

  description?: string | null;

  meta?: { [key: string]: unknown } | null;
}

export interface SpaceListParams {
  limit?: number;

  name?: string;

  offset?: number | null;
}

export declare namespace Spaces {
  export {
    type SpaceList as SpaceList,
    type SpaceCreateResponse as SpaceCreateResponse,
    type SpaceGetResponse as SpaceGetResponse,
    type SpaceCreateParams as SpaceCreateParams,
    type SpaceListParams as SpaceListParams,
  };
}
