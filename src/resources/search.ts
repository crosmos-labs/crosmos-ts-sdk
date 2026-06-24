// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class SearchResource extends APIResource {
  /**
   * Search for relevant memories within a memory space using hybrid retrieval
   * (semantic + keyword + graph + temporal), RRF fusion, cross-encoder reranking,
   * and recency/temporal boosting.
   */
  hybrid(body: SearchHybridParams, options?: RequestOptions): APIPromise<Search> {
    return this._client.post('/api/v1/search', { body, ...options });
  }
}

export interface Search {
  candidates: Array<Search.Candidate>;

  query: string;
}

export namespace Search {
  export interface Candidate {
    content: string;

    created_at: string;

    event_time: string | null;

    memory_id: string;

    memory_type: string;

    owner_name: string | null;

    score: number;

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
