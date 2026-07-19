// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.spaces.create',
    fullyQualifiedName: 'spaces.create',
    httpMethod: 'post',
    httpPath: '/api/v1/spaces',
  },
  {
    clientCallName: 'client.spaces.list',
    fullyQualifiedName: 'spaces.list',
    httpMethod: 'get',
    httpPath: '/api/v1/spaces',
  },
  {
    clientCallName: 'client.spaces.delete',
    fullyQualifiedName: 'spaces.delete',
    httpMethod: 'delete',
    httpPath: '/api/v1/spaces/{space_uuid}',
  },
  {
    clientCallName: 'client.spaces.get',
    fullyQualifiedName: 'spaces.get',
    httpMethod: 'get',
    httpPath: '/api/v1/spaces/{space_uuid}',
  },
  {
    clientCallName: 'client.search.hybrid',
    fullyQualifiedName: 'search.hybrid',
    httpMethod: 'post',
    httpPath: '/api/v1/search',
  },
  {
    clientCallName: 'client.sources.list',
    fullyQualifiedName: 'sources.list',
    httpMethod: 'get',
    httpPath: '/api/v1/sources',
  },
  {
    clientCallName: 'client.sources.delete',
    fullyQualifiedName: 'sources.delete',
    httpMethod: 'delete',
    httpPath: '/api/v1/sources/{source_uuid}',
  },
  {
    clientCallName: 'client.sources.get',
    fullyQualifiedName: 'sources.get',
    httpMethod: 'get',
    httpPath: '/api/v1/sources/{source_uuid}',
  },
  {
    clientCallName: 'client.sources.ingest',
    fullyQualifiedName: 'sources.ingest',
    httpMethod: 'post',
    httpPath: '/api/v1/sources',
  },
  {
    clientCallName: 'client.memories.list',
    fullyQualifiedName: 'memories.list',
    httpMethod: 'get',
    httpPath: '/api/v1/memories',
  },
  {
    clientCallName: 'client.memories.delete',
    fullyQualifiedName: 'memories.delete',
    httpMethod: 'delete',
    httpPath: '/api/v1/memories/{memory_uuid}',
  },
  {
    clientCallName: 'client.memories.get',
    fullyQualifiedName: 'memories.get',
    httpMethod: 'get',
    httpPath: '/api/v1/memories/{memory_uuid}',
  },
  {
    clientCallName: 'client.entities.list',
    fullyQualifiedName: 'entities.list',
    httpMethod: 'get',
    httpPath: '/api/v1/entities',
  },
  {
    clientCallName: 'client.entities.get',
    fullyQualifiedName: 'entities.get',
    httpMethod: 'get',
    httpPath: '/api/v1/entities/{entity_uuid}',
  },
  {
    clientCallName: 'client.conversations.ingest',
    fullyQualifiedName: 'conversations.ingest',
    httpMethod: 'post',
    httpPath: '/api/v1/conversations',
  },
  {
    clientCallName: 'client.jobs.getStatus',
    fullyQualifiedName: 'jobs.getStatus',
    httpMethod: 'get',
    httpPath: '/api/v1/jobs/{job_id}',
  },
  {
    clientCallName: 'client.usage.get',
    fullyQualifiedName: 'usage.get',
    httpMethod: 'get',
    httpPath: '/api/v1/usage',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
