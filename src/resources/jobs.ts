// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Jobs extends APIResource {
  /**
   * Poll for ingestion job status.
   */
  getStatus(jobID: string, options?: RequestOptions): APIPromise<Job> {
    return this._client.get(path`/api/v1/jobs/${jobID}`, options);
  }
}

export interface Job {
  created_at: string;

  job_id: string;

  source_ids: Array<number>;

  status: string;

  completed_at?: string | null;

  error_message?: string | null;

  result?: { [key: string]: unknown } | null;

  started_at?: string | null;
}

export declare namespace Jobs {
  export { type Job as Job };
}
