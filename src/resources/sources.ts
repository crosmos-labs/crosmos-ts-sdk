// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Sources extends APIResource {
  /**
   * List Sources
   */
  list(query: SourceListParams | null | undefined = {}, options?: RequestOptions): APIPromise<SourceList> {
    return this._client.get('/api/v1/sources', { query, ...options });
  }

  /**
   * Delete Source
   */
  delete(
    sourceUuid: string,
    params: SourceDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { space_id, space_uuid } = params ?? {};
    return this._client.delete(path`/api/v1/sources/${sourceUuid}`, {
      query: { space_id, space_uuid },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get Source
   */
  get(
    sourceUuid: string,
    query: SourceGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Source> {
    return this._client.get(path`/api/v1/sources/${sourceUuid}`, { query, ...options });
  }

  /**
   * Enqueue a batch of sources for asynchronous ingestion. Fire-and-forget: returns
   * 202 with a job_id you can poll via GET /jobs/{job_id}.
   */
  ingest(body: SourceIngestParams, options?: RequestOptions): APIPromise<IngestAccepted> {
    return this._client.post('/api/v1/sources', { body, ...options });
  }
}

export interface IngestAccepted {
  job_id: string;

  /**
   * One entry per job the request was split into.
   */
  jobs: Array<IngestAccepted.Job>;

  source_ids: Array<string>;

  status: 'pending';
}

export namespace IngestAccepted {
  export interface Job {
    job_id: string;

    source_ids: Array<string>;
  }
}

export interface Source {
  id: string;

  content: string;

  content_type: string;

  created_at: string;

  extraction_status: 'pending' | 'processing' | 'completed' | 'failed';

  meta: { [key: string]: unknown } | null;

  space_id: string;

  token_count: number;

  updated_at: string;
}

export interface SourceList {
  count: number;

  sources: Array<SourceList.Source>;

  total: number;
}

export namespace SourceList {
  export interface Source {
    id: string;

    content_preview: string;

    content_type: string;

    created_at: string;

    extraction_status: 'pending' | 'processing' | 'completed' | 'failed';

    meta: { [key: string]: unknown } | null;

    space_id: string;

    token_count: number;

    updated_at: string;
  }
}

export interface SourceListParams {
  content_type?: string;

  extraction_status?: 'pending' | 'processing' | 'completed' | 'failed';

  limit?: number;

  offset?: number | null;

  space_id?: string;

  space_uuid?: string;
}

export interface SourceDeleteParams {
  space_id?: string;

  space_uuid?: string;
}

export interface SourceGetParams {
  space_id?: string;

  space_uuid?: string;
}

export interface SourceIngestParams {
  sources: Array<SourceIngestParams.Source>;

  space_id: string;
}

export namespace SourceIngestParams {
  export interface Source {
    content: string;

    /**
     * Today only `text` and `markdown` are processable.
     */
    content_type?:
      | 'text'
      | 'markdown'
      | 'conversation'
      | 'html'
      | 'json'
      | 'pdf'
      | 'image'
      | 'audio'
      | 'video';

    meta?: { [key: string]: unknown } | null;

    role?: string;

    visibility?: 'private' | 'org';
  }
}

export declare namespace Sources {
  export {
    type IngestAccepted as IngestAccepted,
    type Source as Source,
    type SourceList as SourceList,
    type SourceListParams as SourceListParams,
    type SourceDeleteParams as SourceDeleteParams,
    type SourceGetParams as SourceGetParams,
    type SourceIngestParams as SourceIngestParams,
  };
}
