// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Sources extends APIResource {
  /**
   * List sources in the caller's org, sorted by created_at desc.
   *
   * If space_id is provided, returns only sources in that space. Otherwise, returns
   * sources across all spaces in the org.
   */
  list(query: SourceListParams | null | undefined = {}, options?: RequestOptions): APIPromise<SourceList> {
    return this._client.get('/api/v1/sources', { query, ...options });
  }

  /**
   * Delete a source document by UUID.
   */
  delete(sourceUuid: string, params: SourceDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { space_uuid } = params;
    return this._client.delete(path`/api/v1/sources/${sourceUuid}`, {
      query: { space_uuid },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get a source by UUID.
   */
  get(sourceUuid: string, query: SourceGetParams, options?: RequestOptions): APIPromise<Source> {
    return this._client.get(path`/api/v1/sources/${sourceUuid}`, { query, ...options });
  }

  /**
   * Upload raw content sources for ingestion into the knowledge graph. Each source
   * is a discrete content payload (text, markdown.) that will be processed by the
   * extraction pipeline.
   */
  ingest(body: SourceIngestParams, options?: RequestOptions): APIPromise<IngestAccepted> {
    return this._client.post('/api/v1/sources', { body, ...options });
  }
}

export interface IngestAccepted {
  job_id: string;

  source_ids: Array<string>;

  status?: string;
}

export interface Source {
  id: string;

  content: string;

  content_type: string;

  created_at: string;

  extraction_status: string;

  sequence: number;

  space_id: string;

  token_count: number;

  updated_at: string;

  meta?: unknown;
}

export interface SourceList {
  count: number;

  sources: Array<SourceList.UnionMember0> | Array<Source>;

  /**
   * Total matching sources (for pagination)
   */
  total?: number;
}

export namespace SourceList {
  export interface UnionMember0 {
    id: string;

    content_type: string;

    created_at: string;

    extraction_status: string;

    sequence: number;

    space_id: string;

    token_count: number;

    updated_at: string;

    /**
     * First 200 chars of source content for list views
     */
    content_preview?: string;

    meta?: unknown;
  }
}

export interface SourceListParams {
  content_type?: string | null;

  extraction_status?: string | null;

  limit?: number;

  offset?: number;

  space_id?: string | null;
}

export interface SourceDeleteParams {
  space_uuid: string;
}

export interface SourceGetParams {
  space_uuid: string;
}

export interface SourceIngestParams {
  /**
   * Array of source payloads to ingest
   */
  sources: Array<SourceIngestParams.Source>;

  /**
   * Memory space to ingest into
   */
  space_id: string;
}

export namespace SourceIngestParams {
  export interface Source {
    /**
     * Raw content to ingest
     */
    content: string;

    /**
     * Content MIME type: text, markdown, html, json, pdf, image, audio, video
     */
    content_type?: string;

    /**
     * Optional metadata stored with the source
     */
    meta?: { [key: string]: unknown } | null;

    /**
     * Optional speaker role (e.g. 'user', 'assistant')
     */
    role?: string | null;

    /**
     * Order within the batch (0-indexed)
     */
    sequence?: number;
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
