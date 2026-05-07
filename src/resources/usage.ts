// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class UsageResource extends APIResource {
  /**
   * Return org-level usage for the active billing period and plan limits.
   */
  get(query: UsageGetParams | null | undefined = {}, options?: RequestOptions): APIPromise<Usage> {
    return this._client.get('/api/v1/usage', { query, ...options });
  }
}

/**
 * Aggregated org-level usage and current plan limits.
 */
export interface Usage {
  period_end: string;

  period_start: string;

  plan: string;

  /**
   * Used / limit / remaining triple. `-1` limit means unlimited.
   */
  queries: Usage.Queries;

  rate_limit_per_day: number;

  rate_limit_rpm: number;

  /**
   * Used / limit / remaining triple. `-1` limit means unlimited.
   */
  spaces: Usage.Spaces;

  /**
   * Used / limit / remaining triple. `-1` limit means unlimited.
   */
  tokens: Usage.Tokens;
}

export namespace Usage {
  /**
   * Used / limit / remaining triple. `-1` limit means unlimited.
   */
  export interface Queries {
    limit: number;

    remaining: number;

    used: number;
  }

  /**
   * Used / limit / remaining triple. `-1` limit means unlimited.
   */
  export interface Spaces {
    limit: number;

    remaining: number;

    used: number;
  }

  /**
   * Used / limit / remaining triple. `-1` limit means unlimited.
   */
  export interface Tokens {
    limit: number;

    remaining: number;

    used: number;
  }
}

export interface UsageGetParams {
  /**
   * End date (defaults to today)
   */
  end_date?: string | null;

  /**
   * Start date (defaults to 1st of current month)
   */
  start_date?: string | null;
}

export declare namespace UsageResource {
  export { type Usage as Usage, type UsageGetParams as UsageGetParams };
}
