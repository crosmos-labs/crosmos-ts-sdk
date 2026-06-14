// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Conversations extends APIResource {
  /**
   * Ingest a multi-turn conversation into the knowledge graph.
   *
   * - Each turn is converted into a source with provenance metadata.
   */
  ingest(body: ConversationIngestParams, options?: RequestOptions): APIPromise<IngestConversation> {
    return this._client.post('/api/v1/conversations', { body, ...options });
  }
}

export interface IngestConversation {
  job_id: string;

  source_id: string;

  status?: string;
}

export interface ConversationIngestParams {
  /**
   * Ordered conversation messages
   */
  messages: Array<ConversationIngestParams.Message>;

  /**
   * Memory space to ingest into
   */
  space_id: string;

  /**
   * Optional metadata attached to all created sources
   */
  meta?: { [key: string]: unknown } | null;

  /**
   * ISO date string for when the session occurred
   */
  session_date?: string | null;

  /**
   * Session identifier. Auto-generated if not provided.
   */
  session_id?: string | null;

  /**
   * Read scope: 'private' (gated by the visibility graph) or 'org' (readable by
   * everyone in the org)
   */
  visibility?: 'private' | 'org';
}

export namespace ConversationIngestParams {
  export interface Message {
    /**
     * Message content
     */
    content: string;

    /**
     * Speaker role (e.g. 'user', 'assistant')
     */
    role: string;
  }
}

export declare namespace Conversations {
  export {
    type IngestConversation as IngestConversation,
    type ConversationIngestParams as ConversationIngestParams,
  };
}
