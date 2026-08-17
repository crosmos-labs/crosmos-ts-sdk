// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class UsageResource extends APIResource {
  /**
   * Get org usage
   */
  get(query: UsageGetParams | null | undefined = {}, options?: RequestOptions): APIPromise<Usage> {
    return this._client.get('/api/v1/usage', { query, ...options });
  }
}

export interface Usage {
  period_end: string;

  period_start: string;

  plan: 'free' | 'developer' | 'pro' | 'enterprise';

  queries: UsageMetric;

  rate_limit_per_day: number;

  rate_limit_rpm: number;

  spaces: UsageMetric;

  tokens: UsageMetric;
}

export interface UsageMetric {
  limit: number;

  remaining: number;

  used: number;
}

export interface UsageGetParams {
  end_date?: string;

  start_date?: string;
}

export declare namespace UsageResource {
  export { type Usage as Usage, type UsageMetric as UsageMetric, type UsageGetParams as UsageGetParams };
}
