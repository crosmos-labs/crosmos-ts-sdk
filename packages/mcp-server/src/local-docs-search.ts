// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type PerLanguageData = {
  method?: string;
  example?: string;
};

type MethodEntry = {
  name: string;
  endpoint: string;
  httpMethod: string;
  summary: string;
  description: string;
  stainlessPath: string;
  qualified: string;
  params?: string[];
  response?: string;
  markdown?: string;
  perLanguage?: Record<string, PerLanguageData>;
};

type ProseChunk = {
  content: string;
  tag: string;
  sectionContext?: string;
  source?: string;
};

type MiniSearchDocument = {
  id: string;
  kind: 'http_method' | 'prose';
  name?: string;
  endpoint?: string;
  summary?: string;
  description?: string;
  qualified?: string;
  stainlessPath?: string;
  content?: string;
  sectionContext?: string;
  _original: Record<string, unknown>;
};

type SearchResult = {
  results: (string | Record<string, unknown>)[];
};

const EMBEDDED_METHODS: MethodEntry[] = [
  {
    name: 'list',
    endpoint: '/api/v1/spaces',
    httpMethod: 'get',
    summary: 'List Spaces',
    description:
      "List memory spaces in the user's active organization.\n\nPass ``?name=`` to resolve a space by its human-readable name (useful for\nLLM/plugin flows that have a name but not the UUID).",
    stainlessPath: '(resource) spaces > (method) list',
    qualified: 'client.spaces.list',
    params: ['name?: string;'],
    response:
      '{ spaces: { id: string; created_at: string; description: string; meta: object; name: string; org_id: string; updated_at: string; }[]; total: number; }',
    markdown:
      "## list\n\n`client.spaces.list(name?: string): { spaces: space[]; total: number; }`\n\n**get** `/api/v1/spaces`\n\nList memory spaces in the user's active organization.\n\nPass ``?name=`` to resolve a space by its human-readable name (useful for\nLLM/plugin flows that have a name but not the UUID).\n\n### Parameters\n\n- `name?: string`\n  Exact-match filter on space name within the active org. Returns 0 or 1 spaces (names are unique per org).\n\n### Returns\n\n- `{ spaces: { id: string; created_at: string; description: string; meta: object; name: string; org_id: string; updated_at: string; }[]; total: number; }`\n\n  - `spaces: { id: string; created_at: string; description: string; meta: object; name: string; org_id: string; updated_at: string; }[]`\n  - `total: number`\n\n### Example\n\n```typescript\nimport Crosmos from 'crosmos';\n\nconst client = new Crosmos();\n\nconst spaceList = await client.spaces.list();\n\nconsole.log(spaceList);\n```",
    perLanguage: {
      typescript: {
        method: 'client.spaces.list',
        example:
          "import Crosmos from 'crosmos';\n\nconst client = new Crosmos({\n  apiKey: process.env['CROSMOS_API_KEY'], // This is the default and can be omitted\n});\n\nconst spaceList = await client.spaces.list();\n\nconsole.log(spaceList.spaces);",
      },
      python: {
        method: 'spaces.list',
        example:
          'import os\nfrom crosmos import Crosmos\n\nclient = Crosmos(\n    api_key=os.environ.get("CROSMOS_API_KEY"),  # This is the default and can be omitted\n)\nspace_list = client.spaces.list()\nprint(space_list.spaces)',
      },
      http: {
        example:
          'curl https://api.crosmos.dev/api/v1/spaces \\\n    -H "Authorization: Bearer $CROSMOS_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/api/v1/spaces',
    httpMethod: 'post',
    summary: 'Create Space',
    description: "Create a new memory space within the caller's active organization.",
    stainlessPath: '(resource) spaces > (method) create',
    qualified: 'client.spaces.create',
    params: ['name: string;', 'description?: string;', 'meta?: object;'],
    response:
      '{ id: string; created_at: string; description: string; meta: object; name: string; org_id: string; updated_at: string; }',
    markdown:
      "## create\n\n`client.spaces.create(name: string, description?: string, meta?: object): { id: string; created_at: string; description: string; meta: object; name: string; org_id: string; updated_at: string; }`\n\n**post** `/api/v1/spaces`\n\nCreate a new memory space within the caller's active organization.\n\n### Parameters\n\n- `name: string`\n\n- `description?: string`\n\n- `meta?: object`\n\n### Returns\n\n- `{ id: string; created_at: string; description: string; meta: object; name: string; org_id: string; updated_at: string; }`\n\n  - `id: string`\n  - `created_at: string`\n  - `description: string`\n  - `meta: object`\n  - `name: string`\n  - `org_id: string`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport Crosmos from 'crosmos';\n\nconst client = new Crosmos();\n\nconst space = await client.spaces.create({ name: 'x' });\n\nconsole.log(space);\n```",
    perLanguage: {
      typescript: {
        method: 'client.spaces.create',
        example:
          "import Crosmos from 'crosmos';\n\nconst client = new Crosmos({\n  apiKey: process.env['CROSMOS_API_KEY'], // This is the default and can be omitted\n});\n\nconst space = await client.spaces.create({ name: 'x' });\n\nconsole.log(space.id);",
      },
      python: {
        method: 'spaces.create',
        example:
          'import os\nfrom crosmos import Crosmos\n\nclient = Crosmos(\n    api_key=os.environ.get("CROSMOS_API_KEY"),  # This is the default and can be omitted\n)\nspace = client.spaces.create(\n    name="x",\n)\nprint(space.id)',
      },
      http: {
        example:
          'curl https://api.crosmos.dev/api/v1/spaces \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $CROSMOS_API_KEY" \\\n    -d \'{\n          "name": "x"\n        }\'',
      },
    },
  },
  {
    name: 'get',
    endpoint: '/api/v1/spaces/{space_uuid}',
    httpMethod: 'get',
    summary: 'Get Space',
    description: 'Get a memory space by UUID.',
    stainlessPath: '(resource) spaces > (method) get',
    qualified: 'client.spaces.get',
    params: ['space_uuid: string;'],
    response:
      '{ id: string; created_at: string; description: string; meta: object; name: string; org_id: string; updated_at: string; }',
    markdown:
      "## get\n\n`client.spaces.get(space_uuid: string): { id: string; created_at: string; description: string; meta: object; name: string; org_id: string; updated_at: string; }`\n\n**get** `/api/v1/spaces/{space_uuid}`\n\nGet a memory space by UUID.\n\n### Parameters\n\n- `space_uuid: string`\n\n### Returns\n\n- `{ id: string; created_at: string; description: string; meta: object; name: string; org_id: string; updated_at: string; }`\n\n  - `id: string`\n  - `created_at: string`\n  - `description: string`\n  - `meta: object`\n  - `name: string`\n  - `org_id: string`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport Crosmos from 'crosmos';\n\nconst client = new Crosmos();\n\nconst space = await client.spaces.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(space);\n```",
    perLanguage: {
      typescript: {
        method: 'client.spaces.get',
        example:
          "import Crosmos from 'crosmos';\n\nconst client = new Crosmos({\n  apiKey: process.env['CROSMOS_API_KEY'], // This is the default and can be omitted\n});\n\nconst space = await client.spaces.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(space.id);",
      },
      python: {
        method: 'spaces.get',
        example:
          'import os\nfrom crosmos import Crosmos\n\nclient = Crosmos(\n    api_key=os.environ.get("CROSMOS_API_KEY"),  # This is the default and can be omitted\n)\nspace = client.spaces.get(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(space.id)',
      },
      http: {
        example:
          'curl https://api.crosmos.dev/api/v1/spaces/$SPACE_UUID \\\n    -H "Authorization: Bearer $CROSMOS_API_KEY"',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/api/v1/spaces/{space_uuid}',
    httpMethod: 'delete',
    summary: 'Delete Space',
    description: 'Delete a memory space and all its contents (cascading).',
    stainlessPath: '(resource) spaces > (method) delete',
    qualified: 'client.spaces.delete',
    params: ['space_uuid: string;'],
    markdown:
      "## delete\n\n`client.spaces.delete(space_uuid: string): void`\n\n**delete** `/api/v1/spaces/{space_uuid}`\n\nDelete a memory space and all its contents (cascading).\n\n### Parameters\n\n- `space_uuid: string`\n\n### Example\n\n```typescript\nimport Crosmos from 'crosmos';\n\nconst client = new Crosmos();\n\nawait client.spaces.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e')\n```",
    perLanguage: {
      typescript: {
        method: 'client.spaces.delete',
        example:
          "import Crosmos from 'crosmos';\n\nconst client = new Crosmos({\n  apiKey: process.env['CROSMOS_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.spaces.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');",
      },
      python: {
        method: 'spaces.delete',
        example:
          'import os\nfrom crosmos import Crosmos\n\nclient = Crosmos(\n    api_key=os.environ.get("CROSMOS_API_KEY"),  # This is the default and can be omitted\n)\nclient.spaces.delete(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)',
      },
      http: {
        example:
          'curl https://api.crosmos.dev/api/v1/spaces/$SPACE_UUID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $CROSMOS_API_KEY"',
      },
    },
  },
  {
    name: 'hybrid',
    endpoint: '/api/v1/search',
    httpMethod: 'post',
    summary: 'Search Memories',
    description: 'Perform a search for relevant memories within a specified memory space.',
    stainlessPath: '(resource) search > (method) hybrid',
    qualified: 'client.search.hybrid',
    params: [
      'query: string;',
      'space_id: string;',
      'diversify?: boolean;',
      'graph?: boolean;',
      'include_source?: boolean;',
      'limit?: number;',
      'recency_bias?: number;',
      'rerank?: boolean;',
    ],
    response:
      '{ candidates: { content: string; created_at: string; event_time: string; memory_id: string; memory_type: string; recorded_at: string; score: number; source?: string; }[]; query: string; took_ms: number; total: number; }',
    markdown:
      "## hybrid\n\n`client.search.hybrid(query: string, space_id: string, diversify?: boolean, graph?: boolean, include_source?: boolean, limit?: number, recency_bias?: number, rerank?: boolean): { candidates: object[]; query: string; took_ms: number; total: number; }`\n\n**post** `/api/v1/search`\n\nPerform a search for relevant memories within a specified memory space.\n\n### Parameters\n\n- `query: string`\n  The search query text\n\n- `space_id: string`\n  The memory space to search within\n\n- `diversify?: boolean`\n  Apply MMR diversity post-rerank. Enable for broad/summarization intents.\n\n- `graph?: boolean`\n  Include graph traversal signal. Disable for semantic + keyword only.\n\n- `include_source?: boolean`\n  Include original source text in results.\n\n- `limit?: number`\n  Max number of results to return\n\n- `recency_bias?: number`\n  Override recency weighting. 0.0 disables recency, higher values favor recent memories.\n\n- `rerank?: boolean`\n  Apply cross-encoder reranking. Disable for lower latency.\n\n### Returns\n\n- `{ candidates: { content: string; created_at: string; event_time: string; memory_id: string; memory_type: string; recorded_at: string; score: number; source?: string; }[]; query: string; took_ms: number; total: number; }`\n\n  - `candidates: { content: string; created_at: string; event_time: string; memory_id: string; memory_type: string; recorded_at: string; score: number; source?: string; }[]`\n  - `query: string`\n  - `took_ms: number`\n  - `total: number`\n\n### Example\n\n```typescript\nimport Crosmos from 'crosmos';\n\nconst client = new Crosmos();\n\nconst search = await client.search.hybrid({ query: 'x', space_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(search);\n```",
    perLanguage: {
      typescript: {
        method: 'client.search.hybrid',
        example:
          "import Crosmos from 'crosmos';\n\nconst client = new Crosmos({\n  apiKey: process.env['CROSMOS_API_KEY'], // This is the default and can be omitted\n});\n\nconst search = await client.search.hybrid({\n  query: 'x',\n  space_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(search.candidates);",
      },
      python: {
        method: 'search.hybrid',
        example:
          'import os\nfrom crosmos import Crosmos\n\nclient = Crosmos(\n    api_key=os.environ.get("CROSMOS_API_KEY"),  # This is the default and can be omitted\n)\nsearch = client.search.hybrid(\n    query="x",\n    space_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(search.candidates)',
      },
      http: {
        example:
          'curl https://api.crosmos.dev/api/v1/search \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $CROSMOS_API_KEY" \\\n    -d \'{\n          "query": "x",\n          "space_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"\n        }\'',
      },
    },
  },
  {
    name: 'ingest',
    endpoint: '/api/v1/sources',
    httpMethod: 'post',
    summary: 'Ingest Sources',
    description:
      'Upload raw content sources for ingestion into the knowledge graph.\nEach source is a discrete content payload (text, markdown.)\nthat will be processed by the extraction pipeline.',
    stainlessPath: '(resource) sources > (method) ingest',
    qualified: 'client.sources.ingest',
    params: [
      'sources: { content: string; content_type?: string; meta?: object; role?: string; }[];',
      'space_id: string;',
    ],
    response: '{ job_id: string; source_ids: string[]; status?: string; }',
    markdown:
      "## ingest\n\n`client.sources.ingest(sources: { content: string; content_type?: string; meta?: object; role?: string; }[], space_id: string): { job_id: string; source_ids: string[]; status?: string; }`\n\n**post** `/api/v1/sources`\n\nUpload raw content sources for ingestion into the knowledge graph.\nEach source is a discrete content payload (text, markdown.)\nthat will be processed by the extraction pipeline.\n\n### Parameters\n\n- `sources: { content: string; content_type?: string; meta?: object; role?: string; }[]`\n  Array of source payloads to ingest\n\n- `space_id: string`\n  Memory space to ingest into\n\n### Returns\n\n- `{ job_id: string; source_ids: string[]; status?: string; }`\n\n  - `job_id: string`\n  - `source_ids: string[]`\n  - `status?: string`\n\n### Example\n\n```typescript\nimport Crosmos from 'crosmos';\n\nconst client = new Crosmos();\n\nconst ingestAccepted = await client.sources.ingest({ sources: [{ content: 'x' }], space_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(ingestAccepted);\n```",
    perLanguage: {
      typescript: {
        method: 'client.sources.ingest',
        example:
          "import Crosmos from 'crosmos';\n\nconst client = new Crosmos({\n  apiKey: process.env['CROSMOS_API_KEY'], // This is the default and can be omitted\n});\n\nconst ingestAccepted = await client.sources.ingest({\n  sources: [{ content: 'x' }],\n  space_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(ingestAccepted.job_id);",
      },
      python: {
        method: 'sources.ingest',
        example:
          'import os\nfrom crosmos import Crosmos\n\nclient = Crosmos(\n    api_key=os.environ.get("CROSMOS_API_KEY"),  # This is the default and can be omitted\n)\ningest_accepted = client.sources.ingest(\n    sources=[{\n        "content": "x"\n    }],\n    space_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(ingest_accepted.job_id)',
      },
      http: {
        example:
          'curl https://api.crosmos.dev/api/v1/sources \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $CROSMOS_API_KEY" \\\n    -d \'{\n          "sources": [\n            {\n              "content": "x"\n            }\n          ],\n          "space_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"\n        }\'',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/v1/sources',
    httpMethod: 'get',
    summary: 'List Sources',
    description:
      "List sources in the caller's org, sorted by created_at desc.\n\nIf space_id is provided, returns only sources in that space.\nOtherwise, returns sources across all spaces in the org.",
    stainlessPath: '(resource) sources > (method) list',
    qualified: 'client.sources.list',
    params: [
      'content_type?: string;',
      'extraction_status?: string;',
      'limit?: number;',
      'offset?: number;',
      'space_id?: string;',
    ],
    response:
      '{ count: number; sources: { id: string; content_type: string; created_at: string; extraction_status: string; space_id: string; token_count: number; updated_at: string; content_preview?: string; meta?: object; }[] | { id: string; content: string; content_type: string; created_at: string; extraction_status: string; space_id: string; token_count: number; updated_at: string; meta?: object; }[]; total?: number; }',
    markdown:
      "## list\n\n`client.sources.list(content_type?: string, extraction_status?: string, limit?: number, offset?: number, space_id?: string): { count: number; sources: object[] | source[]; total?: number; }`\n\n**get** `/api/v1/sources`\n\nList sources in the caller's org, sorted by created_at desc.\n\nIf space_id is provided, returns only sources in that space.\nOtherwise, returns sources across all spaces in the org.\n\n### Parameters\n\n- `content_type?: string`\n\n- `extraction_status?: string`\n\n- `limit?: number`\n\n- `offset?: number`\n\n- `space_id?: string`\n\n### Returns\n\n- `{ count: number; sources: { id: string; content_type: string; created_at: string; extraction_status: string; space_id: string; token_count: number; updated_at: string; content_preview?: string; meta?: object; }[] | { id: string; content: string; content_type: string; created_at: string; extraction_status: string; space_id: string; token_count: number; updated_at: string; meta?: object; }[]; total?: number; }`\n\n  - `count: number`\n  - `sources: { id: string; content_type: string; created_at: string; extraction_status: string; space_id: string; token_count: number; updated_at: string; content_preview?: string; meta?: object; }[] | { id: string; content: string; content_type: string; created_at: string; extraction_status: string; space_id: string; token_count: number; updated_at: string; meta?: object; }[]`\n  - `total?: number`\n\n### Example\n\n```typescript\nimport Crosmos from 'crosmos';\n\nconst client = new Crosmos();\n\nconst sourceList = await client.sources.list();\n\nconsole.log(sourceList);\n```",
    perLanguage: {
      typescript: {
        method: 'client.sources.list',
        example:
          "import Crosmos from 'crosmos';\n\nconst client = new Crosmos({\n  apiKey: process.env['CROSMOS_API_KEY'], // This is the default and can be omitted\n});\n\nconst sourceList = await client.sources.list();\n\nconsole.log(sourceList.count);",
      },
      python: {
        method: 'sources.list',
        example:
          'import os\nfrom crosmos import Crosmos\n\nclient = Crosmos(\n    api_key=os.environ.get("CROSMOS_API_KEY"),  # This is the default and can be omitted\n)\nsource_list = client.sources.list()\nprint(source_list.count)',
      },
      http: {
        example:
          'curl https://api.crosmos.dev/api/v1/sources \\\n    -H "Authorization: Bearer $CROSMOS_API_KEY"',
      },
    },
  },
  {
    name: 'get',
    endpoint: '/api/v1/sources/{source_uuid}',
    httpMethod: 'get',
    summary: 'Get Source',
    description: 'Get a source by UUID.',
    stainlessPath: '(resource) sources > (method) get',
    qualified: 'client.sources.get',
    params: ['source_uuid: string;', 'space_uuid: string;'],
    response:
      '{ id: string; content: string; content_type: string; created_at: string; extraction_status: string; space_id: string; token_count: number; updated_at: string; meta?: object; }',
    markdown:
      "## get\n\n`client.sources.get(source_uuid: string, space_uuid: string): { id: string; content: string; content_type: string; created_at: string; extraction_status: string; space_id: string; token_count: number; updated_at: string; meta?: object; }`\n\n**get** `/api/v1/sources/{source_uuid}`\n\nGet a source by UUID.\n\n### Parameters\n\n- `source_uuid: string`\n\n- `space_uuid: string`\n\n### Returns\n\n- `{ id: string; content: string; content_type: string; created_at: string; extraction_status: string; space_id: string; token_count: number; updated_at: string; meta?: object; }`\n\n  - `id: string`\n  - `content: string`\n  - `content_type: string`\n  - `created_at: string`\n  - `extraction_status: string`\n  - `space_id: string`\n  - `token_count: number`\n  - `updated_at: string`\n  - `meta?: object`\n\n### Example\n\n```typescript\nimport Crosmos from 'crosmos';\n\nconst client = new Crosmos();\n\nconst source = await client.sources.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { space_uuid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(source);\n```",
    perLanguage: {
      typescript: {
        method: 'client.sources.get',
        example:
          "import Crosmos from 'crosmos';\n\nconst client = new Crosmos({\n  apiKey: process.env['CROSMOS_API_KEY'], // This is the default and can be omitted\n});\n\nconst source = await client.sources.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  space_uuid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(source.id);",
      },
      python: {
        method: 'sources.get',
        example:
          'import os\nfrom crosmos import Crosmos\n\nclient = Crosmos(\n    api_key=os.environ.get("CROSMOS_API_KEY"),  # This is the default and can be omitted\n)\nsource = client.sources.get(\n    source_uuid="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    space_uuid="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(source.id)',
      },
      http: {
        example:
          'curl https://api.crosmos.dev/api/v1/sources/$SOURCE_UUID \\\n    -H "Authorization: Bearer $CROSMOS_API_KEY"',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/api/v1/sources/{source_uuid}',
    httpMethod: 'delete',
    summary: 'Delete Source',
    description: 'Delete a source document by UUID.',
    stainlessPath: '(resource) sources > (method) delete',
    qualified: 'client.sources.delete',
    params: ['source_uuid: string;', 'space_uuid: string;'],
    markdown:
      "## delete\n\n`client.sources.delete(source_uuid: string, space_uuid: string): void`\n\n**delete** `/api/v1/sources/{source_uuid}`\n\nDelete a source document by UUID.\n\n### Parameters\n\n- `source_uuid: string`\n\n- `space_uuid: string`\n\n### Example\n\n```typescript\nimport Crosmos from 'crosmos';\n\nconst client = new Crosmos();\n\nawait client.sources.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { space_uuid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' })\n```",
    perLanguage: {
      typescript: {
        method: 'client.sources.delete',
        example:
          "import Crosmos from 'crosmos';\n\nconst client = new Crosmos({\n  apiKey: process.env['CROSMOS_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.sources.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  space_uuid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});",
      },
      python: {
        method: 'sources.delete',
        example:
          'import os\nfrom crosmos import Crosmos\n\nclient = Crosmos(\n    api_key=os.environ.get("CROSMOS_API_KEY"),  # This is the default and can be omitted\n)\nclient.sources.delete(\n    source_uuid="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    space_uuid="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)',
      },
      http: {
        example:
          'curl https://api.crosmos.dev/api/v1/sources/$SOURCE_UUID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $CROSMOS_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/v1/memories',
    httpMethod: 'get',
    summary: 'List Memories',
    description: 'List memories in a memory space.',
    stainlessPath: '(resource) memories > (method) list',
    qualified: 'client.memories.list',
    params: [
      'space_uuid: string;',
      'limit?: number;',
      "memory_type?: 'viewpoint' | 'semantic' | 'episode';",
      'offset?: number;',
      "order?: 'asc' | 'desc';",
      "sort_by?: 'created_at' | 'importance_score' | 'event_time' | 'last_accessed_at' | 'access_frequency';",
    ],
    response:
      '{ count: number; memories: { id: string; access_frequency: number; content: string; created_at: string; event_time: string; forgotten_at: string; importance_score: number; last_accessed_at: string; memory_type: string; meta: object; space_id: string; }[]; }',
    markdown:
      "## list\n\n`client.memories.list(space_uuid: string, limit?: number, memory_type?: 'viewpoint' | 'semantic' | 'episode', offset?: number, order?: 'asc' | 'desc', sort_by?: 'created_at' | 'importance_score' | 'event_time' | 'last_accessed_at' | 'access_frequency'): { count: number; memories: memory[]; }`\n\n**get** `/api/v1/memories`\n\nList memories in a memory space.\n\n### Parameters\n\n- `space_uuid: string`\n\n- `limit?: number`\n\n- `memory_type?: 'viewpoint' | 'semantic' | 'episode'`\n\n- `offset?: number`\n\n- `order?: 'asc' | 'desc'`\n\n- `sort_by?: 'created_at' | 'importance_score' | 'event_time' | 'last_accessed_at' | 'access_frequency'`\n\n### Returns\n\n- `{ count: number; memories: { id: string; access_frequency: number; content: string; created_at: string; event_time: string; forgotten_at: string; importance_score: number; last_accessed_at: string; memory_type: string; meta: object; space_id: string; }[]; }`\n\n  - `count: number`\n  - `memories: { id: string; access_frequency: number; content: string; created_at: string; event_time: string; forgotten_at: string; importance_score: number; last_accessed_at: string; memory_type: string; meta: object; space_id: string; }[]`\n\n### Example\n\n```typescript\nimport Crosmos from 'crosmos';\n\nconst client = new Crosmos();\n\nconst memoryList = await client.memories.list({ space_uuid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(memoryList);\n```",
    perLanguage: {
      typescript: {
        method: 'client.memories.list',
        example:
          "import Crosmos from 'crosmos';\n\nconst client = new Crosmos({\n  apiKey: process.env['CROSMOS_API_KEY'], // This is the default and can be omitted\n});\n\nconst memoryList = await client.memories.list({\n  space_uuid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(memoryList.count);",
      },
      python: {
        method: 'memories.list',
        example:
          'import os\nfrom crosmos import Crosmos\n\nclient = Crosmos(\n    api_key=os.environ.get("CROSMOS_API_KEY"),  # This is the default and can be omitted\n)\nmemory_list = client.memories.list(\n    space_uuid="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(memory_list.count)',
      },
      http: {
        example:
          'curl https://api.crosmos.dev/api/v1/memories \\\n    -H "Authorization: Bearer $CROSMOS_API_KEY"',
      },
    },
  },
  {
    name: 'get',
    endpoint: '/api/v1/memories/{memory_uuid}',
    httpMethod: 'get',
    summary: 'Get Memory',
    description: 'Get a memory by UUID.',
    stainlessPath: '(resource) memories > (method) get',
    qualified: 'client.memories.get',
    params: ['memory_uuid: string;', 'space_uuid: string;'],
    response:
      '{ id: string; access_frequency: number; content: string; created_at: string; event_time: string; forgotten_at: string; importance_score: number; last_accessed_at: string; memory_type: string; meta: object; space_id: string; }',
    markdown:
      "## get\n\n`client.memories.get(memory_uuid: string, space_uuid: string): { id: string; access_frequency: number; content: string; created_at: string; event_time: string; forgotten_at: string; importance_score: number; last_accessed_at: string; memory_type: string; meta: object; space_id: string; }`\n\n**get** `/api/v1/memories/{memory_uuid}`\n\nGet a memory by UUID.\n\n### Parameters\n\n- `memory_uuid: string`\n\n- `space_uuid: string`\n\n### Returns\n\n- `{ id: string; access_frequency: number; content: string; created_at: string; event_time: string; forgotten_at: string; importance_score: number; last_accessed_at: string; memory_type: string; meta: object; space_id: string; }`\n\n  - `id: string`\n  - `access_frequency: number`\n  - `content: string`\n  - `created_at: string`\n  - `event_time: string`\n  - `forgotten_at: string`\n  - `importance_score: number`\n  - `last_accessed_at: string`\n  - `memory_type: string`\n  - `meta: object`\n  - `space_id: string`\n\n### Example\n\n```typescript\nimport Crosmos from 'crosmos';\n\nconst client = new Crosmos();\n\nconst memory = await client.memories.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { space_uuid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(memory);\n```",
    perLanguage: {
      typescript: {
        method: 'client.memories.get',
        example:
          "import Crosmos from 'crosmos';\n\nconst client = new Crosmos({\n  apiKey: process.env['CROSMOS_API_KEY'], // This is the default and can be omitted\n});\n\nconst memory = await client.memories.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  space_uuid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(memory.id);",
      },
      python: {
        method: 'memories.get',
        example:
          'import os\nfrom crosmos import Crosmos\n\nclient = Crosmos(\n    api_key=os.environ.get("CROSMOS_API_KEY"),  # This is the default and can be omitted\n)\nmemory = client.memories.get(\n    memory_uuid="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    space_uuid="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(memory.id)',
      },
      http: {
        example:
          'curl https://api.crosmos.dev/api/v1/memories/$MEMORY_UUID \\\n    -H "Authorization: Bearer $CROSMOS_API_KEY"',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/api/v1/memories/{memory_uuid}',
    httpMethod: 'delete',
    summary: 'Forget Memory',
    description: 'Soft-delete a memory and cascade to all edges whose provenance is this memory.',
    stainlessPath: '(resource) memories > (method) delete',
    qualified: 'client.memories.delete',
    params: ['memory_uuid: string;', 'space_uuid: string;'],
    markdown:
      "## delete\n\n`client.memories.delete(memory_uuid: string, space_uuid: string): void`\n\n**delete** `/api/v1/memories/{memory_uuid}`\n\nSoft-delete a memory and cascade to all edges whose provenance is this memory.\n\n### Parameters\n\n- `memory_uuid: string`\n\n- `space_uuid: string`\n\n### Example\n\n```typescript\nimport Crosmos from 'crosmos';\n\nconst client = new Crosmos();\n\nawait client.memories.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { space_uuid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' })\n```",
    perLanguage: {
      typescript: {
        method: 'client.memories.delete',
        example:
          "import Crosmos from 'crosmos';\n\nconst client = new Crosmos({\n  apiKey: process.env['CROSMOS_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.memories.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  space_uuid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});",
      },
      python: {
        method: 'memories.delete',
        example:
          'import os\nfrom crosmos import Crosmos\n\nclient = Crosmos(\n    api_key=os.environ.get("CROSMOS_API_KEY"),  # This is the default and can be omitted\n)\nclient.memories.delete(\n    memory_uuid="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    space_uuid="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)',
      },
      http: {
        example:
          'curl https://api.crosmos.dev/api/v1/memories/$MEMORY_UUID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $CROSMOS_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/v1/entities',
    httpMethod: 'get',
    summary: 'List Entities',
    description: 'List Entities',
    stainlessPath: '(resource) entities > (method) list',
    qualified: 'client.entities.list',
    params: [
      'space_uuid: string;',
      'entity_type?: string;',
      'limit?: number;',
      'offset?: number;',
      "order?: 'asc' | 'desc';",
      'q?: string;',
      "sort_by?: 'name' | 'edge_count' | 'created_at';",
    ],
    response:
      '{ entities: { id: string; created_at: string; edge_count: number; entity_type: string; name: string; space_id: string; updated_at: string; }[]; total: number; }',
    markdown:
      "## list\n\n`client.entities.list(space_uuid: string, entity_type?: string, limit?: number, offset?: number, order?: 'asc' | 'desc', q?: string, sort_by?: 'name' | 'edge_count' | 'created_at'): { entities: entity[]; total: number; }`\n\n**get** `/api/v1/entities`\n\nList Entities\n\n### Parameters\n\n- `space_uuid: string`\n\n- `entity_type?: string`\n  Filter by entity type\n\n- `limit?: number`\n\n- `offset?: number`\n\n- `order?: 'asc' | 'desc'`\n\n- `q?: string`\n  Search entities by name\n\n- `sort_by?: 'name' | 'edge_count' | 'created_at'`\n\n### Returns\n\n- `{ entities: { id: string; created_at: string; edge_count: number; entity_type: string; name: string; space_id: string; updated_at: string; }[]; total: number; }`\n\n  - `entities: { id: string; created_at: string; edge_count: number; entity_type: string; name: string; space_id: string; updated_at: string; }[]`\n  - `total: number`\n\n### Example\n\n```typescript\nimport Crosmos from 'crosmos';\n\nconst client = new Crosmos();\n\nconst entityList = await client.entities.list({ space_uuid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(entityList);\n```",
    perLanguage: {
      typescript: {
        method: 'client.entities.list',
        example:
          "import Crosmos from 'crosmos';\n\nconst client = new Crosmos({\n  apiKey: process.env['CROSMOS_API_KEY'], // This is the default and can be omitted\n});\n\nconst entityList = await client.entities.list({\n  space_uuid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(entityList.entities);",
      },
      python: {
        method: 'entities.list',
        example:
          'import os\nfrom crosmos import Crosmos\n\nclient = Crosmos(\n    api_key=os.environ.get("CROSMOS_API_KEY"),  # This is the default and can be omitted\n)\nentity_list = client.entities.list(\n    space_uuid="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(entity_list.entities)',
      },
      http: {
        example:
          'curl https://api.crosmos.dev/api/v1/entities \\\n    -H "Authorization: Bearer $CROSMOS_API_KEY"',
      },
    },
  },
  {
    name: 'get',
    endpoint: '/api/v1/entities/{entity_uuid}',
    httpMethod: 'get',
    summary: 'Get Entity',
    description: 'Get Entity',
    stainlessPath: '(resource) entities > (method) get',
    qualified: 'client.entities.get',
    params: ['entity_uuid: string;', 'space_uuid: string;'],
    response:
      '{ id: string; created_at: string; edge_count: number; entity_type: string; memories: { content: string; created_at: string; memory_id: string; memory_type: string; }[]; name: string; space_id: string; updated_at: string; }',
    markdown:
      "## get\n\n`client.entities.get(entity_uuid: string, space_uuid: string): { id: string; created_at: string; edge_count: number; entity_type: string; memories: object[]; name: string; space_id: string; updated_at: string; }`\n\n**get** `/api/v1/entities/{entity_uuid}`\n\nGet Entity\n\n### Parameters\n\n- `entity_uuid: string`\n\n- `space_uuid: string`\n\n### Returns\n\n- `{ id: string; created_at: string; edge_count: number; entity_type: string; memories: { content: string; created_at: string; memory_id: string; memory_type: string; }[]; name: string; space_id: string; updated_at: string; }`\n\n  - `id: string`\n  - `created_at: string`\n  - `edge_count: number`\n  - `entity_type: string`\n  - `memories: { content: string; created_at: string; memory_id: string; memory_type: string; }[]`\n  - `name: string`\n  - `space_id: string`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport Crosmos from 'crosmos';\n\nconst client = new Crosmos();\n\nconst entityDetail = await client.entities.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { space_uuid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(entityDetail);\n```",
    perLanguage: {
      typescript: {
        method: 'client.entities.get',
        example:
          "import Crosmos from 'crosmos';\n\nconst client = new Crosmos({\n  apiKey: process.env['CROSMOS_API_KEY'], // This is the default and can be omitted\n});\n\nconst entityDetail = await client.entities.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  space_uuid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(entityDetail.id);",
      },
      python: {
        method: 'entities.get',
        example:
          'import os\nfrom crosmos import Crosmos\n\nclient = Crosmos(\n    api_key=os.environ.get("CROSMOS_API_KEY"),  # This is the default and can be omitted\n)\nentity_detail = client.entities.get(\n    entity_uuid="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    space_uuid="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(entity_detail.id)',
      },
      http: {
        example:
          'curl https://api.crosmos.dev/api/v1/entities/$ENTITY_UUID \\\n    -H "Authorization: Bearer $CROSMOS_API_KEY"',
      },
    },
  },
  {
    name: 'ingest',
    endpoint: '/api/v1/conversations',
    httpMethod: 'post',
    summary: 'Ingest Conversation',
    description:
      'Ingest a multi-turn conversation into the knowledge graph.\n- Each turn is converted into a source with provenance metadata.',
    stainlessPath: '(resource) conversations > (method) ingest',
    qualified: 'client.conversations.ingest',
    params: [
      'messages: { content: string; role: string; }[];',
      'space_id: string;',
      'meta?: object;',
      'session_date?: string;',
      'session_id?: string;',
    ],
    response: '{ job_id: string; source_id: string; status?: string; }',
    markdown:
      "## ingest\n\n`client.conversations.ingest(messages: { content: string; role: string; }[], space_id: string, meta?: object, session_date?: string, session_id?: string): { job_id: string; source_id: string; status?: string; }`\n\n**post** `/api/v1/conversations`\n\nIngest a multi-turn conversation into the knowledge graph.\n- Each turn is converted into a source with provenance metadata.\n\n### Parameters\n\n- `messages: { content: string; role: string; }[]`\n  Ordered conversation messages\n\n- `space_id: string`\n  Memory space to ingest into\n\n- `meta?: object`\n  Optional metadata attached to all created sources\n\n- `session_date?: string`\n  ISO date string for when the session occurred\n\n- `session_id?: string`\n  Session identifier. Auto-generated if not provided.\n\n### Returns\n\n- `{ job_id: string; source_id: string; status?: string; }`\n\n  - `job_id: string`\n  - `source_id: string`\n  - `status?: string`\n\n### Example\n\n```typescript\nimport Crosmos from 'crosmos';\n\nconst client = new Crosmos();\n\nconst ingestConversation = await client.conversations.ingest({ messages: [{ content: 'x', role: 'x' }], space_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(ingestConversation);\n```",
    perLanguage: {
      typescript: {
        method: 'client.conversations.ingest',
        example:
          "import Crosmos from 'crosmos';\n\nconst client = new Crosmos({\n  apiKey: process.env['CROSMOS_API_KEY'], // This is the default and can be omitted\n});\n\nconst ingestConversation = await client.conversations.ingest({\n  messages: [{ content: 'x', role: 'x' }],\n  space_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(ingestConversation.job_id);",
      },
      python: {
        method: 'conversations.ingest',
        example:
          'import os\nfrom crosmos import Crosmos\n\nclient = Crosmos(\n    api_key=os.environ.get("CROSMOS_API_KEY"),  # This is the default and can be omitted\n)\ningest_conversation = client.conversations.ingest(\n    messages=[{\n        "content": "x",\n        "role": "x",\n    }],\n    space_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(ingest_conversation.job_id)',
      },
      http: {
        example:
          'curl https://api.crosmos.dev/api/v1/conversations \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $CROSMOS_API_KEY" \\\n    -d \'{\n          "messages": [\n            {\n              "content": "x",\n              "role": "x"\n            }\n          ],\n          "space_id": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"\n        }\'',
      },
    },
  },
  {
    name: 'get_status',
    endpoint: '/api/v1/jobs/{job_id}',
    httpMethod: 'get',
    summary: 'Get Job Status',
    description: 'Poll for ingestion job status.',
    stainlessPath: '(resource) jobs > (method) get_status',
    qualified: 'client.jobs.getStatus',
    params: ['job_id: string;'],
    response:
      '{ created_at: string; job_id: string; source_ids: number[]; status: string; completed_at?: string; error_message?: string; result?: object; started_at?: string; }',
    markdown:
      "## get_status\n\n`client.jobs.getStatus(job_id: string): { created_at: string; job_id: string; source_ids: number[]; status: string; completed_at?: string; error_message?: string; result?: object; started_at?: string; }`\n\n**get** `/api/v1/jobs/{job_id}`\n\nPoll for ingestion job status.\n\n### Parameters\n\n- `job_id: string`\n\n### Returns\n\n- `{ created_at: string; job_id: string; source_ids: number[]; status: string; completed_at?: string; error_message?: string; result?: object; started_at?: string; }`\n\n  - `created_at: string`\n  - `job_id: string`\n  - `source_ids: number[]`\n  - `status: string`\n  - `completed_at?: string`\n  - `error_message?: string`\n  - `result?: object`\n  - `started_at?: string`\n\n### Example\n\n```typescript\nimport Crosmos from 'crosmos';\n\nconst client = new Crosmos();\n\nconst job = await client.jobs.getStatus('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(job);\n```",
    perLanguage: {
      typescript: {
        method: 'client.jobs.getStatus',
        example:
          "import Crosmos from 'crosmos';\n\nconst client = new Crosmos({\n  apiKey: process.env['CROSMOS_API_KEY'], // This is the default and can be omitted\n});\n\nconst job = await client.jobs.getStatus('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(job.job_id);",
      },
      python: {
        method: 'jobs.get_status',
        example:
          'import os\nfrom crosmos import Crosmos\n\nclient = Crosmos(\n    api_key=os.environ.get("CROSMOS_API_KEY"),  # This is the default and can be omitted\n)\njob = client.jobs.get_status(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(job.job_id)',
      },
      http: {
        example:
          'curl https://api.crosmos.dev/api/v1/jobs/$JOB_ID \\\n    -H "Authorization: Bearer $CROSMOS_API_KEY"',
      },
    },
  },
  {
    name: 'get',
    endpoint: '/api/v1/usage',
    httpMethod: 'get',
    summary: 'Get Usage',
    description: 'Return org-level usage for the active billing period and plan limits.',
    stainlessPath: '(resource) usage > (method) get',
    qualified: 'client.usage.get',
    params: ['end_date?: string;', 'start_date?: string;'],
    response:
      '{ period_end: string; period_start: string; plan: string; queries: { limit: number; remaining: number; used: number; }; rate_limit_per_day: number; rate_limit_rpm: number; spaces: { limit: number; remaining: number; used: number; }; tokens: { limit: number; remaining: number; used: number; }; }',
    markdown:
      "## get\n\n`client.usage.get(end_date?: string, start_date?: string): { period_end: string; period_start: string; plan: string; queries: object; rate_limit_per_day: number; rate_limit_rpm: number; spaces: object; tokens: object; }`\n\n**get** `/api/v1/usage`\n\nReturn org-level usage for the active billing period and plan limits.\n\n### Parameters\n\n- `end_date?: string`\n  End date (defaults to today)\n\n- `start_date?: string`\n  Start date (defaults to 1st of current month)\n\n### Returns\n\n- `{ period_end: string; period_start: string; plan: string; queries: { limit: number; remaining: number; used: number; }; rate_limit_per_day: number; rate_limit_rpm: number; spaces: { limit: number; remaining: number; used: number; }; tokens: { limit: number; remaining: number; used: number; }; }`\n  Aggregated org-level usage and current plan limits.\n\n  - `period_end: string`\n  - `period_start: string`\n  - `plan: string`\n  - `queries: { limit: number; remaining: number; used: number; }`\n  - `rate_limit_per_day: number`\n  - `rate_limit_rpm: number`\n  - `spaces: { limit: number; remaining: number; used: number; }`\n  - `tokens: { limit: number; remaining: number; used: number; }`\n\n### Example\n\n```typescript\nimport Crosmos from 'crosmos';\n\nconst client = new Crosmos();\n\nconst usage = await client.usage.get();\n\nconsole.log(usage);\n```",
    perLanguage: {
      typescript: {
        method: 'client.usage.get',
        example:
          "import Crosmos from 'crosmos';\n\nconst client = new Crosmos({\n  apiKey: process.env['CROSMOS_API_KEY'], // This is the default and can be omitted\n});\n\nconst usage = await client.usage.get();\n\nconsole.log(usage.period_end);",
      },
      python: {
        method: 'usage.get',
        example:
          'import os\nfrom crosmos import Crosmos\n\nclient = Crosmos(\n    api_key=os.environ.get("CROSMOS_API_KEY"),  # This is the default and can be omitted\n)\nusage = client.usage.get()\nprint(usage.period_end)',
      },
      http: {
        example:
          'curl https://api.crosmos.dev/api/v1/usage \\\n    -H "Authorization: Bearer $CROSMOS_API_KEY"',
      },
    },
  },
  {
    name: 'check',
    endpoint: '/health',
    httpMethod: 'get',
    summary: 'Health Check',
    description: 'Health Check',
    stainlessPath: '(resource) health > (method) check',
    qualified: 'client.health.check',
    response: 'object',
    markdown:
      "## check\n\n`client.health.check(): object`\n\n**get** `/health`\n\nHealth Check\n\n### Returns\n\n- `object`\n\n### Example\n\n```typescript\nimport Crosmos from 'crosmos';\n\nconst client = new Crosmos();\n\nconst response = await client.health.check();\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.health.check',
        example:
          "import Crosmos from 'crosmos';\n\nconst client = new Crosmos({\n  apiKey: process.env['CROSMOS_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.health.check();\n\nconsole.log(response);",
      },
      python: {
        method: 'health.check',
        example:
          'import os\nfrom crosmos import Crosmos\n\nclient = Crosmos(\n    api_key=os.environ.get("CROSMOS_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.health.check()\nprint(response)',
      },
      http: {
        example: 'curl https://api.crosmos.dev/health \\\n    -H "Authorization: Bearer $CROSMOS_API_KEY"',
      },
    },
  },
];

const EMBEDDED_READMES: { language: string; content: string }[] = [
  {
    language: 'python',
    content:
      '# Crosmos Python API library\n\n<!-- prettier-ignore -->\n[![PyPI version](https://img.shields.io/pypi/v/crosmos.svg?label=pypi%20(stable))](https://pypi.org/project/crosmos/)\n\nThe Crosmos Python library provides convenient access to the Crosmos REST API from any Python 3.9+\napplication. The library includes type definitions for all request params and response fields,\nand offers both synchronous and asynchronous clients powered by [httpx](https://github.com/encode/httpx).\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Crosmos MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=crosmos-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsImNyb3Ntb3MtbWNwIl0sImVudiI6eyJDUk9TTU9TX0FQSV9LRVkiOiJNeSBBUEkgS2V5In19)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22crosmos-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22crosmos-mcp%22%5D%2C%22env%22%3A%7B%22CROSMOS_API_KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Documentation\n\nThe REST API documentation can be found on [docs.crosmos.dev](https://docs.crosmos.dev). The full API of this library can be found in [api.md](api.md).\n\n## Installation\n\n```sh\n# install from PyPI\npip install crosmos\n```\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n```python\nimport os\nfrom crosmos import Crosmos\n\nclient = Crosmos(\n    api_key=os.environ.get("CROSMOS_API_KEY"),  # This is the default and can be omitted\n)\n\nsearch = client.search.hybrid(\n    query="What is my primary language?",\n    space_id="<your-space-uuid>",\n)\nprint(search.candidates)\n```\n\nWhile you can provide an `api_key` keyword argument,\nwe recommend using [python-dotenv](https://pypi.org/project/python-dotenv/)\nto add `CROSMOS_API_KEY="My API Key"` to your `.env` file\nso that your API Key is not stored in source control.\n\n## Async usage\n\nSimply import `AsyncCrosmos` instead of `Crosmos` and use `await` with each API call:\n\n```python\nimport os\nimport asyncio\nfrom crosmos import AsyncCrosmos\n\nclient = AsyncCrosmos(\n    api_key=os.environ.get("CROSMOS_API_KEY"),  # This is the default and can be omitted\n)\n\nasync def main() -> None:\n  search = await client.search.hybrid(\n      query="What is my primary language?",\n      space_id="<your-space-uuid>",\n  )\n  print(search.candidates)\n\nasyncio.run(main())\n```\n\nFunctionality between the synchronous and asynchronous clients is otherwise identical.\n\n### With aiohttp\n\nBy default, the async client uses `httpx` for HTTP requests. However, for improved concurrency performance you may also use `aiohttp` as the HTTP backend.\n\nYou can enable this by installing `aiohttp`:\n\n```sh\n# install from PyPI\npip install crosmos[aiohttp]\n```\n\nThen you can enable it by instantiating the client with `http_client=DefaultAioHttpClient()`:\n\n```python\nimport os\nimport asyncio\nfrom crosmos import DefaultAioHttpClient\nfrom crosmos import AsyncCrosmos\n\nasync def main() -> None:\n  async with AsyncCrosmos(\n    api_key=os.environ.get("CROSMOS_API_KEY"),  # This is the default and can be omitted\n    http_client=DefaultAioHttpClient(),\n) as client:\n    search = await client.search.hybrid(\n        query="What is my primary language?",\n        space_id="<your-space-uuid>",\n    )\n    print(search.candidates)\n\nasyncio.run(main())\n```\n\n\n\n## Using types\n\nNested request parameters are [TypedDicts](https://docs.python.org/3/library/typing.html#typing.TypedDict). Responses are [Pydantic models](https://docs.pydantic.dev) which also provide helper methods for things like:\n\n- Serializing back into JSON, `model.to_json()`\n- Converting to a dictionary, `model.to_dict()`\n\nTyped requests and responses provide autocomplete and documentation within your editor. If you would like to see type errors in VS Code to help catch bugs earlier, set `python.analysis.typeCheckingMode` to `basic`.\n\n\n\n\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API (for example, due to network connection problems or a timeout), a subclass of `crosmos.APIConnectionError` is raised.\n\nWhen the API returns a non-success status code (that is, 4xx or 5xx\nresponse), a subclass of `crosmos.APIStatusError` is raised, containing `status_code` and `response` properties.\n\nAll errors inherit from `crosmos.APIError`.\n\n```python\nimport crosmos\nfrom crosmos import Crosmos\n\nclient = Crosmos()\n\ntry:\n    client.search.hybrid(\n        query="What is my primary language?",\n        space_id="<your-space-uuid>",\n    )\nexcept crosmos.APIConnectionError as e:\n    print("The server could not be reached")\n    print(e.__cause__) # an underlying Exception, likely raised within httpx.\nexcept crosmos.RateLimitError as e:\n    print("A 429 status code was received; we should back off a bit.")\nexcept crosmos.APIStatusError as e:\n    print("Another non-200-range status code was received")\n    print(e.status_code)\n    print(e.response)\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors are automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors are all retried by default.\n\nYou can use the `max_retries` option to configure or disable retry settings:\n\n```python\nfrom crosmos import Crosmos\n\n# Configure the default for all requests:\nclient = Crosmos(\n    # default is 2\n    max_retries=0,\n)\n\n# Or, configure per-request:\nclient.with_options(max_retries = 5).search.hybrid(\n    query="What is my primary language?",\n    space_id="<your-space-uuid>",\n)\n```\n\n### Timeouts\n\nBy default requests time out after 1 minute. You can configure this with a `timeout` option,\nwhich accepts a float or an [`httpx.Timeout`](https://www.python-httpx.org/advanced/timeouts/#fine-tuning-the-configuration) object:\n\n```python\nfrom crosmos import Crosmos\n\n# Configure the default for all requests:\nclient = Crosmos(\n    # 20 seconds (default is 1 minute)\n    timeout=20.0,\n)\n\n# More granular control:\nclient = Crosmos(\n    timeout=httpx.Timeout(60.0, read=5.0, write=10.0, connect=2.0),\n)\n\n# Override per-request:\nclient.with_options(timeout = 5.0).search.hybrid(\n    query="What is my primary language?",\n    space_id="<your-space-uuid>",\n)\n```\n\nOn timeout, an `APITimeoutError` is thrown.\n\nNote that requests that time out are [retried twice by default](#retries).\n\n\n\n## Advanced\n\n### Logging\n\nWe use the standard library [`logging`](https://docs.python.org/3/library/logging.html) module.\n\nYou can enable logging by setting the environment variable `CROSMOS_LOG` to `info`.\n\n```shell\n$ export CROSMOS_LOG=info\n```\n\nOr to `debug` for more verbose logging.\n\n### How to tell whether `None` means `null` or missing\n\nIn an API response, a field may be explicitly `null`, or missing entirely; in either case, its value is `None` in this library. You can differentiate the two cases with `.model_fields_set`:\n\n```py\nif response.my_field is None:\n  if \'my_field\' not in response.model_fields_set:\n    print(\'Got json like {}, without a "my_field" key present at all.\')\n  else:\n    print(\'Got json like {"my_field": null}.\')\n```\n\n### Accessing raw response data (e.g. headers)\n\nThe "raw" Response object can be accessed by prefixing `.with_raw_response.` to any HTTP method call, e.g.,\n\n```py\nfrom crosmos import Crosmos\n\nclient = Crosmos()\nresponse = client.search.with_raw_response.hybrid(\n    query="What is my primary language?",\n    space_id="<your-space-uuid>",\n)\nprint(response.headers.get(\'X-My-Header\'))\n\nsearch = response.parse()  # get the object that `search.hybrid()` would have returned\nprint(search.candidates)\n```\n\nThese methods return an [`APIResponse`](https://github.com/crosmos-labs/crosmos-python-sdk/tree/main/src/crosmos/_response.py) object.\n\nThe async client returns an [`AsyncAPIResponse`](https://github.com/crosmos-labs/crosmos-python-sdk/tree/main/src/crosmos/_response.py) with the same structure, the only difference being `await`able methods for reading the response content.\n\n#### `.with_streaming_response`\n\nThe above interface eagerly reads the full response body when you make the request, which may not always be what you want.\n\nTo stream the response body, use `.with_streaming_response` instead, which requires a context manager and only reads the response body once you call `.read()`, `.text()`, `.json()`, `.iter_bytes()`, `.iter_text()`, `.iter_lines()` or `.parse()`. In the async client, these are async methods.\n\n```python\nwith client.search.with_streaming_response.hybrid(\n    query="What is my primary language?",\n    space_id="<your-space-uuid>",\n) as response :\n    print(response.headers.get(\'X-My-Header\'))\n\n    for line in response.iter_lines():\n      print(line)\n```\n\nThe context manager is required so that the response will reliably be closed.\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API.\n\nIf you need to access undocumented endpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can make requests using `client.get`, `client.post`, and other\nhttp verbs. Options on the client will be respected (such as retries) when making this request.\n\n```py\nimport httpx\n\nresponse = client.post(\n    "/foo",\n    cast_to=httpx.Response,\n    body={"my_param": True},\n)\n\nprint(response.headers.get("x-foo"))\n```\n\n#### Undocumented request params\n\nIf you want to explicitly send an extra param, you can do so with the `extra_query`, `extra_body`, and `extra_headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you can access the extra fields like `response.unknown_prop`. You\ncan also get all the extra fields on the Pydantic model as a dict with\n[`response.model_extra`](https://docs.pydantic.dev/latest/api/base_model/#pydantic.BaseModel.model_extra).\n\n### Configuring the HTTP client\n\nYou can directly override the [httpx client](https://www.python-httpx.org/api/#client) to customize it for your use case, including:\n\n- Support for [proxies](https://www.python-httpx.org/advanced/proxies/)\n- Custom [transports](https://www.python-httpx.org/advanced/transports/)\n- Additional [advanced](https://www.python-httpx.org/advanced/clients/) functionality\n\n```python\nimport httpx\nfrom crosmos import Crosmos, DefaultHttpxClient\n\nclient = Crosmos(\n    # Or use the `CROSMOS_BASE_URL` env var\n    base_url="http://my.test.server.example.com:8083",\n    http_client=DefaultHttpxClient(proxy="http://my.test.proxy.example.com", transport=httpx.HTTPTransport(local_address="0.0.0.0")),\n)\n```\n\nYou can also customize the client on a per-request basis by using `with_options()`:\n\n```python\nclient.with_options(http_client=DefaultHttpxClient(...))\n```\n\n### Managing HTTP resources\n\nBy default the library closes underlying HTTP connections whenever the client is [garbage collected](https://docs.python.org/3/reference/datamodel.html#object.__del__). You can manually close the client using the `.close()` method if desired, or with a context manager that closes when exiting.\n\n```py\nfrom crosmos import Crosmos\n\nwith Crosmos() as client:\n  # make requests here\n  ...\n\n# HTTP client is now closed\n```\n\n## Versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/crosmos-labs/crosmos-python-sdk/issues) with questions, bugs, or suggestions.\n\n### Determining the installed version\n\nIf you\'ve upgraded to the latest version but aren\'t seeing any new features you were expecting then your python environment is likely still using an older version.\n\nYou can determine the version that is being used at runtime with:\n\n```py\nimport crosmos\nprint(crosmos.__version__)\n```\n\n## Requirements\n\nPython 3.9 or higher.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n',
  },
  {
    language: 'typescript',
    content:
      "# Crosmos TypeScript API Library\n\n[![NPM version](https://img.shields.io/npm/v/crosmos.svg?label=npm%20(stable))](https://npmjs.org/package/crosmos) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/crosmos)\n\nThis library provides convenient access to the Crosmos REST API from server-side TypeScript or JavaScript.\n\n\n\nThe REST API documentation can be found on [docs.crosmos.dev](https://docs.crosmos.dev). The full API of this library can be found in [api.md](api.md).\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Crosmos MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=crosmos-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsImNyb3Ntb3MtbWNwIl0sImVudiI6eyJDUk9TTU9TX0FQSV9LRVkiOiJNeSBBUEkgS2V5In19)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22crosmos-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22crosmos-mcp%22%5D%2C%22env%22%3A%7B%22CROSMOS_API_KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n```sh\nnpm install crosmos\n```\n\n\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n<!-- prettier-ignore -->\n```js\nimport Crosmos from 'crosmos';\n\nconst client = new Crosmos({\n  apiKey: process.env['CROSMOS_API_KEY'], // This is the default and can be omitted\n});\n\nconst search = await client.search.hybrid({\n  query: 'What is my primary language?',\n  space_id: '<your-space-uuid>',\n});\n\nconsole.log(search.candidates);\n```\n\n\n\n### Request & Response types\n\nThis library includes TypeScript definitions for all request params and response fields. You may import and use them like so:\n\n<!-- prettier-ignore -->\n```ts\nimport Crosmos from 'crosmos';\n\nconst client = new Crosmos({\n  apiKey: process.env['CROSMOS_API_KEY'], // This is the default and can be omitted\n});\n\nconst params: Crosmos.SearchHybridParams = {\n  query: 'What is my primary language?',\n  space_id: '<your-space-uuid>',\n};\nconst search: Crosmos.Search = await client.search.hybrid(params);\n```\n\nDocumentation for each method, request param, and response field are available in docstrings and will appear on hover in most modern editors.\n\n\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API,\nor if the API returns a non-success status code (i.e., 4xx or 5xx response),\na subclass of `APIError` will be thrown:\n\n<!-- prettier-ignore -->\n```ts\nconst search = await client.search\n  .hybrid({ query: 'What is my primary language?', space_id: '<your-space-uuid>' })\n  .catch(async (err) => {\n    if (err instanceof Crosmos.APIError) {\n      console.log(err.status); // 400\n      console.log(err.name); // BadRequestError\n      console.log(err.headers); // {server: 'nginx', ...}\n    } else {\n      throw err;\n    }\n  });\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors will all be retried by default.\n\nYou can use the `maxRetries` option to configure or disable this:\n\n<!-- prettier-ignore -->\n```js\n// Configure the default for all requests:\nconst client = new Crosmos({\n  maxRetries: 0, // default is 2\n});\n\n// Or, configure per-request:\nawait client.search.hybrid({ query: 'What is my primary language?', space_id: '<your-space-uuid>' }, {\n  maxRetries: 5,\n});\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default. You can configure this with a `timeout` option:\n\n<!-- prettier-ignore -->\n```ts\n// Configure the default for all requests:\nconst client = new Crosmos({\n  timeout: 20 * 1000, // 20 seconds (default is 1 minute)\n});\n\n// Override per-request:\nawait client.search.hybrid({ query: 'What is my primary language?', space_id: '<your-space-uuid>' }, {\n  timeout: 5 * 1000,\n});\n```\n\nOn timeout, an `APIConnectionTimeoutError` is thrown.\n\nNote that requests which time out will be [retried twice by default](#retries).\n\n\n\n\n\n## Advanced Usage\n\n### Accessing raw Response data (e.g., headers)\n\nThe \"raw\" `Response` returned by `fetch()` can be accessed through the `.asResponse()` method on the `APIPromise` type that all methods return.\nThis method returns as soon as the headers for a successful response are received and does not consume the response body, so you are free to write custom parsing or streaming logic.\n\nYou can also use the `.withResponse()` method to get the raw `Response` along with the parsed data.\nUnlike `.asResponse()` this method consumes the body, returning once it is parsed.\n\n<!-- prettier-ignore -->\n```ts\nconst client = new Crosmos();\n\nconst response = await client.search\n  .hybrid({ query: 'What is my primary language?', space_id: '<your-space-uuid>' })\n  .asResponse();\nconsole.log(response.headers.get('X-My-Header'));\nconsole.log(response.statusText); // access the underlying Response object\n\nconst { data: search, response: raw } = await client.search\n  .hybrid({ query: 'What is my primary language?', space_id: '<your-space-uuid>' })\n  .withResponse();\nconsole.log(raw.headers.get('X-My-Header'));\nconsole.log(search.candidates);\n```\n\n### Logging\n\n> [!IMPORTANT]\n> All log messages are intended for debugging only. The format and content of log messages\n> may change between releases.\n\n#### Log levels\n\nThe log level can be configured in two ways:\n\n1. Via the `CROSMOS_LOG` environment variable\n2. Using the `logLevel` client option (overrides the environment variable if set)\n\n```ts\nimport Crosmos from 'crosmos';\n\nconst client = new Crosmos({\n  logLevel: 'debug', // Show all log messages\n});\n```\n\nAvailable log levels, from most to least verbose:\n\n- `'debug'` - Show debug messages, info, warnings, and errors\n- `'info'` - Show info messages, warnings, and errors\n- `'warn'` - Show warnings and errors (default)\n- `'error'` - Show only errors\n- `'off'` - Disable all logging\n\nAt the `'debug'` level, all HTTP requests and responses are logged, including headers and bodies.\nSome authentication-related headers are redacted, but sensitive data in request and response bodies\nmay still be visible.\n\n#### Custom logger\n\nBy default, this library logs to `globalThis.console`. You can also provide a custom logger.\nMost logging libraries are supported, including [pino](https://www.npmjs.com/package/pino), [winston](https://www.npmjs.com/package/winston), [bunyan](https://www.npmjs.com/package/bunyan), [consola](https://www.npmjs.com/package/consola), [signale](https://www.npmjs.com/package/signale), and [@std/log](https://jsr.io/@std/log). If your logger doesn't work, please open an issue.\n\nWhen providing a custom logger, the `logLevel` option still controls which messages are emitted, messages\nbelow the configured level will not be sent to your logger.\n\n```ts\nimport Crosmos from 'crosmos';\nimport pino from 'pino';\n\nconst logger = pino();\n\nconst client = new Crosmos({\n  logger: logger.child({ name: 'Crosmos' }),\n  logLevel: 'debug', // Send all messages to pino, allowing it to filter\n});\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.get`, `client.post`, and other HTTP verbs.\nOptions on the client, such as retries, will be respected when making these requests.\n\n```ts\nawait client.post('/some/path', {\n  body: { some_prop: 'foo' },\n  query: { some_query_arg: 'bar' },\n});\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use `// @ts-expect-error` on the undocumented\nparameter. This library doesn't validate at runtime that the request matches the type, so any extra values you\nsend will be sent as-is.\n\n```ts\nclient.search.hybrid({\n  // ...\n  // @ts-expect-error baz is not yet public\n  baz: 'undocumented option',\n});\n```\n\nFor requests with the `GET` verb, any extra params will be in the query, all other requests will send the\nextra param in the body.\n\nIf you want to explicitly send an extra argument, you can do so with the `query`, `body`, and `headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may access the response object with `// @ts-expect-error` on\nthe response object, or cast the response object to the requisite type. Like the request params, we do not\nvalidate or strip extra properties from the response from the API.\n\n### Customizing the fetch client\n\nBy default, this library expects a global `fetch` function is defined.\n\nIf you want to use a different `fetch` function, you can either polyfill the global:\n\n```ts\nimport fetch from 'my-fetch';\n\nglobalThis.fetch = fetch;\n```\n\nOr pass it to the client:\n\n```ts\nimport Crosmos from 'crosmos';\nimport fetch from 'my-fetch';\n\nconst client = new Crosmos({ fetch });\n```\n\n### Fetch options\n\nIf you want to set custom `fetch` options without overriding the `fetch` function, you can provide a `fetchOptions` object when instantiating the client or making a request. (Request-specific options override client options.)\n\n```ts\nimport Crosmos from 'crosmos';\n\nconst client = new Crosmos({\n  fetchOptions: {\n    // `RequestInit` options\n  },\n});\n```\n\n#### Configuring proxies\n\nTo modify proxy behavior, you can provide custom `fetchOptions` that add runtime-specific proxy\noptions to requests:\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/node.svg\" align=\"top\" width=\"18\" height=\"21\"> **Node** <sup>[[docs](https://github.com/nodejs/undici/blob/main/docs/docs/api/ProxyAgent.md#example---proxyagent-with-fetch)]</sup>\n\n```ts\nimport Crosmos from 'crosmos';\nimport * as undici from 'undici';\n\nconst proxyAgent = new undici.ProxyAgent('http://localhost:8888');\nconst client = new Crosmos({\n  fetchOptions: {\n    dispatcher: proxyAgent,\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/bun.svg\" align=\"top\" width=\"18\" height=\"21\"> **Bun** <sup>[[docs](https://bun.sh/guides/http/proxy)]</sup>\n\n```ts\nimport Crosmos from 'crosmos';\n\nconst client = new Crosmos({\n  fetchOptions: {\n    proxy: 'http://localhost:8888',\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/deno.svg\" align=\"top\" width=\"18\" height=\"21\"> **Deno** <sup>[[docs](https://docs.deno.com/api/deno/~/Deno.createHttpClient)]</sup>\n\n```ts\nimport Crosmos from 'npm:crosmos';\n\nconst httpClient = Deno.createHttpClient({ proxy: { url: 'http://localhost:8888' } });\nconst client = new Crosmos({\n  fetchOptions: {\n    client: httpClient,\n  },\n});\n```\n\n## Frequently Asked Questions\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/crosmos-labs/crosmos-ts-sdk/issues) with questions, bugs, or suggestions.\n\n## Requirements\n\nTypeScript >= 4.9 is supported.\n\nThe following runtimes are supported:\n\n- Web browsers (Up-to-date Chrome, Firefox, Safari, Edge, and more)\n- Node.js 20 LTS or later ([non-EOL](https://endoflife.date/nodejs)) versions.\n- Deno v1.28.0 or higher.\n- Bun 1.0 or later.\n- Cloudflare Workers.\n- Vercel Edge Runtime.\n- Jest 28 or greater with the `\"node\"` environment (`\"jsdom\"` is not supported at this time).\n- Nitro v2.6 or greater.\n\nNote that React Native is not supported at this time.\n\nIf you are interested in other runtime environments, please open or upvote an issue on GitHub.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n",
  },
];

const INDEX_OPTIONS = {
  fields: [
    'name',
    'endpoint',
    'summary',
    'description',
    'qualified',
    'stainlessPath',
    'content',
    'sectionContext',
  ],
  storeFields: ['kind', '_original'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.1,
    boost: {
      name: 5,
      stainlessPath: 3,
      endpoint: 3,
      qualified: 3,
      summary: 2,
      content: 1,
      description: 1,
    } as Record<string, number>,
  },
};

/**
 * Self-contained local search engine backed by MiniSearch.
 * Method data is embedded at SDK build time; prose documents
 * can be loaded from an optional docs directory at runtime.
 */
export class LocalDocsSearch {
  private methodIndex: MiniSearch<MiniSearchDocument>;
  private proseIndex: MiniSearch<MiniSearchDocument>;

  private constructor() {
    this.methodIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
    this.proseIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
  }

  static async create(opts?: { docsDir?: string }): Promise<LocalDocsSearch> {
    const instance = new LocalDocsSearch();
    instance.indexMethods(EMBEDDED_METHODS);
    for (const readme of EMBEDDED_READMES) {
      instance.indexProse(readme.content, `readme:${readme.language}`);
    }
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, language = 'typescript', detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score.
    // Filter prose hits so language-tagged content (READMEs and docs with
    // frontmatter) only matches the requested language.
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex
      .search(query)
      .filter((hit) => {
        const source = ((hit as Record<string, unknown>)['_original'] as ProseChunk | undefined)?.source;
        if (!source) return true;
        // Check for language-tagged sources: "readme:<lang>" or "lang:<lang>:<filename>"
        let taggedLang: string | undefined;
        if (source.startsWith('readme:')) taggedLang = source.slice('readme:'.length);
        else if (source.startsWith('lang:')) taggedLang = source.split(':')[1];
        if (!taggedLang) return true;
        return taggedLang === language || (language === 'javascript' && taggedLang === 'typescript');
      })
      .map((hit) => ({ ...hit, _kind: 'prose' as const }));
    const merged = [...methodHits, ...proseHits].sort((a, b) => b.score - a.score);
    const top = merged.slice(0, maxResults);

    const fullResults: (string | Record<string, unknown>)[] = [];

    for (const hit of top) {
      const original = (hit as Record<string, unknown>)['_original'];
      if (hit._kind === 'http_method') {
        const m = original as MethodEntry;
        if (useMarkdown && m.markdown) {
          fullResults.push(m.markdown);
        } else {
          // Use per-language data when available, falling back to the
          // top-level fields (which are TypeScript-specific in the
          // legacy codepath).
          const langData = m.perLanguage?.[language];
          fullResults.push({
            method: langData?.method ?? m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(langData?.example ? { example: langData.example } : {}),
            ...(m.params ? { params: m.params } : {}),
            ...(m.response ? { response: m.response } : {}),
          });
        }
      } else {
        const c = original as ProseChunk;
        fullResults.push({
          content: c.content,
          ...(c.source ? { source: c.source } : {}),
        });
      }
    }

    let totalLength = 0;
    const results: (string | Record<string, unknown>)[] = [];
    for (const result of fullResults) {
      const len = typeof result === 'string' ? result.length : JSON.stringify(result).length;
      totalLength += len;
      if (totalLength > maxLength) break;
      results.push(result);
    }

    if (results.length < fullResults.length) {
      results.unshift(`Truncated; showing ${results.length} of ${fullResults.length} results.`);
    }

    return { results };
  }

  private indexMethods(methods: MethodEntry[]): void {
    const docs: MiniSearchDocument[] = methods.map((m, i) => ({
      id: `method-${i}`,
      kind: 'http_method' as const,
      name: m.name,
      endpoint: m.endpoint,
      summary: m.summary,
      description: m.description,
      qualified: m.qualified,
      stainlessPath: m.stainlessPath,
      _original: m as unknown as Record<string, unknown>,
    }));
    if (docs.length > 0) {
      this.methodIndex.addAll(docs);
    }
  }

  private async loadDocsDirectory(docsDir: string): Promise<void> {
    let entries;
    try {
      entries = await fs.readdir(docsDir, { withFileTypes: true });
    } catch (err) {
      getLogger().warn({ err, docsDir }, 'Could not read docs directory');
      return;
    }

    const files = entries
      .filter((e) => e.isFile())
      .filter((e) => e.name.endsWith('.md') || e.name.endsWith('.markdown') || e.name.endsWith('.json'));

    for (const file of files) {
      try {
        const filePath = path.join(docsDir, file.name);
        const content = await fs.readFile(filePath, 'utf-8');

        if (file.name.endsWith('.json')) {
          const texts = extractTexts(JSON.parse(content));
          if (texts.length > 0) {
            this.indexProse(texts.join('\n\n'), file.name);
          }
        } else {
          // Parse optional YAML frontmatter for language tagging.
          // Files with a "language" field in frontmatter will only
          // surface in searches for that language.
          //
          // Example:
          //   ---
          //   language: python
          //   ---
          //   # Error handling in Python
          //   ...
          const frontmatter = parseFrontmatter(content);
          const source = frontmatter.language ? `lang:${frontmatter.language}:${file.name}` : file.name;
          this.indexProse(content, source);
        }
      } catch (err) {
        getLogger().warn({ err, file: file.name }, 'Failed to index docs file');
      }
    }
  }

  private indexProse(markdown: string, source: string): void {
    const chunks = chunkMarkdown(markdown);
    const baseId = this.proseIndex.documentCount;

    const docs: MiniSearchDocument[] = chunks.map((chunk, i) => ({
      id: `prose-${baseId + i}`,
      kind: 'prose' as const,
      content: chunk.content,
      ...(chunk.sectionContext != null ? { sectionContext: chunk.sectionContext } : {}),
      _original: { ...chunk, source } as unknown as Record<string, unknown>,
    }));

    if (docs.length > 0) {
      this.proseIndex.addAll(docs);
    }
  }
}

/** Lightweight markdown chunker — splits on headers, chunks by word count. */
function chunkMarkdown(markdown: string): { content: string; tag: string; sectionContext?: string }[] {
  // Strip YAML frontmatter
  const stripped = markdown.replace(/^---\n[\s\S]*?\n---\n?/, '');
  const lines = stripped.split('\n');

  const chunks: { content: string; tag: string; sectionContext?: string }[] = [];
  const headers: string[] = [];
  let current: string[] = [];

  const flush = () => {
    const text = current.join('\n').trim();
    if (!text) return;
    const sectionContext = headers.length > 0 ? headers.join(' > ') : undefined;
    // Split into ~200-word chunks
    const words = text.split(/\s+/);
    for (let i = 0; i < words.length; i += 200) {
      const slice = words.slice(i, i + 200).join(' ');
      if (slice) {
        chunks.push({ content: slice, tag: 'p', ...(sectionContext != null ? { sectionContext } : {}) });
      }
    }
    current = [];
  };

  for (const line of lines) {
    const headerMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headerMatch) {
      flush();
      const level = headerMatch[1]!.length;
      const text = headerMatch[2]!.trim();
      while (headers.length >= level) headers.pop();
      headers.push(text);
    } else {
      current.push(line);
    }
  }
  flush();

  return chunks;
}

/** Recursively extracts string values from a JSON structure. */
function extractTexts(data: unknown, depth = 0): string[] {
  if (depth > 10) return [];
  if (typeof data === 'string') return data.trim() ? [data] : [];
  if (Array.isArray(data)) return data.flatMap((item) => extractTexts(item, depth + 1));
  if (typeof data === 'object' && data !== null) {
    return Object.values(data).flatMap((v) => extractTexts(v, depth + 1));
  }
  return [];
}

/** Parses YAML frontmatter from a markdown string, extracting the language field if present. */
function parseFrontmatter(markdown: string): { language?: string } {
  const match = markdown.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const body = match[1] ?? '';
  const langMatch = body.match(/^language:\s*(.+)$/m);
  return langMatch ? { language: langMatch[1]!.trim() } : {};
}
