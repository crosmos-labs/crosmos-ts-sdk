// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { PagePromise, SpacesOffsetPage, type SpacesOffsetPageParams } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Spaces extends APIResource {
  /**
   * Create memory space
   */
  create(body: SpaceCreateParams, options?: RequestOptions): APIPromise<Space> {
    return this._client.post('/api/v1/spaces', { body, ...options });
  }

  /**
   * Pass ?name= to resolve a space by its name (returns 0 or 1 since names are
   * unique per org).
   */
  list(
    query: SpaceListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SpacesSpacesOffsetPage, Space> {
    return this._client.getAPIList('/api/v1/spaces', SpacesOffsetPage<Space>, { query, ...options });
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
  get(spaceUuid: string, options?: RequestOptions): APIPromise<Space> {
    return this._client.get(path`/api/v1/spaces/${spaceUuid}`, options);
  }
}

export type SpacesSpacesOffsetPage = SpacesOffsetPage<Space>;

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

export interface SpaceListParams extends SpacesOffsetPageParams {
  name?: string;
}

export declare namespace Spaces {
  export {
    type Space as Space,
    type SpaceList as SpaceList,
    type SpacesSpacesOffsetPage as SpacesSpacesOffsetPage,
    type SpaceCreateParams as SpaceCreateParams,
    type SpaceListParams as SpaceListParams,
  };
}
