// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class SearchResource extends APIResource {
  /**
   * Perform a search for relevant memories within a specified memory space.
   */
  hybrid(body: SearchHybridParams, options?: RequestOptions): APIPromise<Search> {
    return this._client.post('/api/v1/search', { body, ...options });
  }
}

export interface Search {
  candidates: Array<Search.Candidate>;

  query: string;

  /**
   * Search execution time in milliseconds
   */
  took_ms: number;

  /**
   * Total number of candidates returned
   */
  total: number;
}

export namespace Search {
  export interface Candidate {
    content: string;

    created_at: string;

    event_time: string | null;

    memory_id: string;

    memory_type: string;

    recorded_at: string;

    score: number;

    /**
     * External id of the user who ingested this memory. Null for org-level memories
     * not attributable to a single user.
     */
    owner_id?: string | null;

    /**
     * Display name of the owning user, for attribution in shared orgs.
     */
    owner_name?: string | null;

    /**
     * Original source text the memory was extracted from
     */
    source?: string | null;
  }
}

export interface SearchHybridParams {
  /**
   * The search query text
   */
  query: string;

  /**
   * The memory space to search within
   */
  space_id: string;

  /**
   * Apply MMR diversity post-rerank. Enable for broad/summarization intents.
   */
  diversify?: boolean;

  /**
   * Include graph traversal signal. Disable for semantic + keyword only.
   */
  graph?: boolean;

  /**
   * Include original source text in results.
   */
  include_source?: boolean;

  /**
   * Max number of results to return
   */
  limit?: number;

  /**
   * Override recency weighting. 0.0 disables recency, higher values favor recent
   * memories.
   */
  recency_bias?: number | null;

  /**
   * Apply cross-encoder reranking. Disable for lower latency.
   */
  rerank?: boolean;
}

export declare namespace SearchResource {
  export { type Search as Search, type SearchHybridParams as SearchHybridParams };
}
