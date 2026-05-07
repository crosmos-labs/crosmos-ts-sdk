// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Entities extends APIResource {
  /**
   * List Entities
   */
  list(query: EntityListParams, options?: RequestOptions): APIPromise<EntityList> {
    return this._client.get('/api/v1/entities', { query, ...options });
  }

  /**
   * Get Entity
   */
  get(entityUuid: string, query: EntityGetParams, options?: RequestOptions): APIPromise<EntityDetail> {
    return this._client.get(path`/api/v1/entities/${entityUuid}`, { query, ...options });
  }
}

export interface Entity {
  id: string;

  created_at: string;

  /**
   * Total incoming + outgoing edges
   */
  edge_count: number;

  entity_type: string | null;

  name: string;

  space_id: string;

  updated_at: string;
}

export interface EntityDetail {
  id: string;

  created_at: string;

  /**
   * Total incoming + outgoing edges
   */
  edge_count: number;

  entity_type: string | null;

  /**
   * Recent memories mentioning this entity
   */
  memories: Array<EntityDetail.Memory>;

  name: string;

  space_id: string;

  updated_at: string;
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
  space_uuid: string;

  /**
   * Filter by entity type
   */
  entity_type?: string | null;

  limit?: number;

  offset?: number;

  order?: 'asc' | 'desc';

  /**
   * Search entities by name
   */
  q?: string | null;

  sort_by?: 'name' | 'edge_count' | 'created_at';
}

export interface EntityGetParams {
  space_uuid: string;
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
