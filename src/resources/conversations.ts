// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Conversations extends APIResource {
  /**
   * Ingest a multi-turn conversation. The conversation is stored as a single source
   * and segmented at ingestion into windows of 4 turns; each window is extracted
   * independently with the prior window as lookback context for pronoun resolution.
   */
  ingest(body: ConversationIngestParams, options?: RequestOptions): APIPromise<IngestConversation> {
    return this._client.post('/api/v1/conversations', { body, ...options });
  }
}

export interface IngestConversation {
  job_id: string;

  source_id: string;

  status: 'pending';
}

export interface ConversationIngestParams {
  messages: Array<ConversationIngestParams.Message>;

  space_id: string;

  meta?: { [key: string]: unknown } | null;

  session_date?: string;

  session_id?: string;

  visibility?: 'private' | 'org';
}

export namespace ConversationIngestParams {
  export interface Message {
    content: string;

    role: string;
  }
}

export declare namespace Conversations {
  export {
    type IngestConversation as IngestConversation,
    type ConversationIngestParams as ConversationIngestParams,
  };
}
