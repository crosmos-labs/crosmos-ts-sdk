// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Jobs extends APIResource {
  /**
   * Get Job
   */
  getStatus(jobID: string, options?: RequestOptions): APIPromise<JobGetStatusResponse> {
    return this._client.get(path`/api/v1/jobs/${jobID}`, options);
  }
}

export interface JobGetStatusResponse {
  completed_at: string | null;

  created_at: string;

  error_message: string | null;

  job_id: string;

  result: JobGetStatusResponse.Result | null;

  source_ids: Array<number>;

  started_at: string | null;

  status: 'pending' | 'processing' | 'completed' | 'partial' | 'failed' | 'cancelled';
}

export namespace JobGetStatusResponse {
  export interface Result {
    edge_count: number;

    entity_count: number;

    failed_source_ids: Array<number>;

    memory_count: number;

    source_ids: Array<number>;

    tokens_used: number;

    error_message?: string;

    source_errors?: { [key: string]: string };
  }
}

export declare namespace Jobs {
  export { type JobGetStatusResponse as JobGetStatusResponse };
}
