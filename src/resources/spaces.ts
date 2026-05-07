// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Spaces extends APIResource {
  /**
   * Create a new memory space within the caller's active organization.
   */
  create(body: SpaceCreateParams, options?: RequestOptions): APIPromise<Space> {
    return this._client.post('/api/v1/spaces', { body, ...options });
  }

  /**
   * List memory spaces in the user's active organization.
   *
   * Pass `?name=` to resolve a space by its human-readable name (useful for
   * LLM/plugin flows that have a name but not the UUID).
   */
  list(query: SpaceListParams | null | undefined = {}, options?: RequestOptions): APIPromise<SpaceList> {
    return this._client.get('/api/v1/spaces', { query, ...options });
  }

  /**
   * Delete a memory space and all its contents (cascading).
   */
  delete(spaceUuid: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/v1/spaces/${spaceUuid}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get a memory space by UUID.
   */
  get(spaceUuid: string, options?: RequestOptions): APIPromise<Space> {
    return this._client.get(path`/api/v1/spaces/${spaceUuid}`, options);
  }
}

export interface Space {
  id: string;

  created_at: string;

  description: string | null;

  meta: { [key: string]: unknown } | null;

  name: string;

  org_id: string;

  updated_at: string;
}

export interface SpaceList {
  spaces: Array<Space>;

  total: number;
}

export interface SpaceCreateParams {
  name: string;

  description?: string | null;

  meta?: { [key: string]: unknown } | null;
}

export interface SpaceListParams {
  /**
   * Exact-match filter on space name within the active org. Returns 0 or 1 spaces
   * (names are unique per org).
   */
  name?: string | null;
}

export declare namespace Spaces {
  export {
    type Space as Space,
    type SpaceList as SpaceList,
    type SpaceCreateParams as SpaceCreateParams,
    type SpaceListParams as SpaceListParams,
  };
}
