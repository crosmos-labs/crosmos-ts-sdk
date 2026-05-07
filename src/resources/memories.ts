// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Memories extends APIResource {
  /**
   * List memories in a memory space.
   */
  list(query: MemoryListParams, options?: RequestOptions): APIPromise<MemoryList> {
    return this._client.get('/api/v1/memories', { query, ...options });
  }

  /**
   * Soft-delete a memory and cascade to all edges whose provenance is this memory.
   */
  delete(memoryUuid: string, params: MemoryDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { space_uuid } = params;
    return this._client.delete(path`/api/v1/memories/${memoryUuid}`, {
      query: { space_uuid },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get a memory by UUID.
   */
  get(memoryUuid: string, query: MemoryGetParams, options?: RequestOptions): APIPromise<Memory> {
    return this._client.get(path`/api/v1/memories/${memoryUuid}`, { query, ...options });
  }
}

export interface Memory {
  id: string;

  access_frequency: number;

  content: string;

  created_at: string;

  event_time: string | null;

  forgotten_at: string | null;

  importance_score: number | null;

  last_accessed_at: string;

  memory_type: string;

  meta: { [key: string]: unknown } | null;

  space_id: string;
}

export interface MemoryList {
  count: number;

  memories: Array<Memory>;
}

export interface MemoryListParams {
  space_uuid: string;

  limit?: number;

  memory_type?: 'viewpoint' | 'semantic' | 'episode' | null;

  offset?: number;

  order?: 'asc' | 'desc';

  sort_by?: 'created_at' | 'importance_score' | 'event_time' | 'last_accessed_at' | 'access_frequency';
}

export interface MemoryDeleteParams {
  space_uuid: string;
}

export interface MemoryGetParams {
  space_uuid: string;
}

export declare namespace Memories {
  export {
    type Memory as Memory,
    type MemoryList as MemoryList,
    type MemoryListParams as MemoryListParams,
    type MemoryDeleteParams as MemoryDeleteParams,
    type MemoryGetParams as MemoryGetParams,
  };
}
