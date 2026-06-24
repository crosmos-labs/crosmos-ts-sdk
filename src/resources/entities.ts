// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Entities extends APIResource {
  /**
   * List entities
   */
  list(query: EntityListParams | null | undefined = {}, options?: RequestOptions): APIPromise<EntityList> {
    return this._client.get('/api/v1/entities', { query, ...options });
  }

  /**
   * Get entity
   */
  get(
    entityUuid: string,
    query: EntityGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EntityDetail> {
    return this._client.get(path`/api/v1/entities/${entityUuid}`, { query, ...options });
  }
}

export interface Entity {
  id: string;

  created_at: string;

  edge_count: number;

  entity_type: string | null;

  name: string;

  space_id: string;

  updated_at: string;
}

export interface EntityDetail extends Entity {
  memories: Array<EntityDetail.Memory>;
}

export namespace EntityDetail {
  export interface Memory {
    content: string;

    created_at: string;

    memory_id: string;

    memory_type: string;
  }
}

export interface EntityList {
  entities: Array<Entity>;

  total: number;
}

export interface EntityListParams {
  entity_type?: string;

  limit?: number;

  offset?: number | null;

  order?: 'asc' | 'desc';

  q?: string;

  sort_by?: 'name' | 'edge_count' | 'created_at';

  space_id?: string;

  space_uuid?: string;
}

export interface EntityGetParams {
  space_id?: string;

  space_uuid?: string;
}

export declare namespace Entities {
  export {
    type Entity as Entity,
    type EntityDetail as EntityDetail,
    type EntityList as EntityList,
    type EntityListParams as EntityListParams,
    type EntityGetParams as EntityGetParams,
  };
}
