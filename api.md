# API

## V1

Types:

```python
from crosmos.types.api import V1GetJobStatusResponse, V1GetUsageResponse
```

Methods:

- <code title="get /api/v1/jobs/{job_id}">client.api.v1.<a href="./src/crosmos/resources/api/v1/v1.py">get_job_status</a>(job_id) -> <a href="./src/crosmos/types/api/v1_get_job_status_response.py">V1GetJobStatusResponse</a></code>
- <code title="get /api/v1/usage">client.api.v1.<a href="./src/crosmos/resources/api/v1/v1.py">get_usage</a>(\*\*<a href="src/crosmos/types/api/v1_get_usage_params.py">params</a>) -> <a href="./src/crosmos/types/api/v1_get_usage_response.py">V1GetUsageResponse</a></code>

### Spaces

Types:

```python
from crosmos.types.api.v1 import Space, SpaceListResponse
```

Methods:

- <code title="post /api/v1/spaces">client.api.v1.spaces.<a href="./src/crosmos/resources/api/v1/spaces.py">create</a>(\*\*<a href="src/crosmos/types/api/v1/space_create_params.py">params</a>) -> <a href="./src/crosmos/types/api/v1/space.py">Space</a></code>
- <code title="get /api/v1/spaces">client.api.v1.spaces.<a href="./src/crosmos/resources/api/v1/spaces.py">list</a>() -> <a href="./src/crosmos/types/api/v1/space_list_response.py">SpaceListResponse</a></code>
- <code title="delete /api/v1/spaces/{space_id}">client.api.v1.spaces.<a href="./src/crosmos/resources/api/v1/spaces.py">delete</a>(space_id) -> None</code>
- <code title="get /api/v1/spaces/{space_id}">client.api.v1.spaces.<a href="./src/crosmos/resources/api/v1/spaces.py">get</a>(space_id) -> <a href="./src/crosmos/types/api/v1/space.py">Space</a></code>

### Search

Types:

```python
from crosmos.types.api.v1 import Search
```

Methods:

- <code title="get /api/v1/search">client.api.v1.search.<a href="./src/crosmos/resources/api/v1/search.py">get</a>(\*\*<a href="src/crosmos/types/api/v1/search_get_params.py">params</a>) -> <a href="./src/crosmos/types/api/v1/search.py">Search</a></code>
- <code title="post /api/v1/search">client.api.v1.search.<a href="./src/crosmos/resources/api/v1/search.py">perform</a>(\*\*<a href="src/crosmos/types/api/v1/search_perform_params.py">params</a>) -> <a href="./src/crosmos/types/api/v1/search.py">Search</a></code>

### Sources

Types:

```python
from crosmos.types.api.v1 import Source, SourceListResponse, SourceIngestResponse
```

Methods:

- <code title="get /api/v1/sources">client.api.v1.sources.<a href="./src/crosmos/resources/api/v1/sources.py">list</a>(\*\*<a href="src/crosmos/types/api/v1/source_list_params.py">params</a>) -> <a href="./src/crosmos/types/api/v1/source_list_response.py">SourceListResponse</a></code>
- <code title="delete /api/v1/sources/{source_id}">client.api.v1.sources.<a href="./src/crosmos/resources/api/v1/sources.py">delete</a>(source_id) -> None</code>
- <code title="get /api/v1/sources/{source_id}">client.api.v1.sources.<a href="./src/crosmos/resources/api/v1/sources.py">get</a>(source_id) -> <a href="./src/crosmos/types/api/v1/source.py">Source</a></code>
- <code title="post /api/v1/sources">client.api.v1.sources.<a href="./src/crosmos/resources/api/v1/sources.py">ingest</a>(\*\*<a href="src/crosmos/types/api/v1/source_ingest_params.py">params</a>) -> <a href="./src/crosmos/types/api/v1/source_ingest_response.py">SourceIngestResponse</a></code>

### Memories

Types:

```python
from crosmos.types.api.v1 import Memory, MemoryListResponse
```

Methods:

- <code title="get /api/v1/memories">client.api.v1.memories.<a href="./src/crosmos/resources/api/v1/memories.py">list</a>(\*\*<a href="src/crosmos/types/api/v1/memory_list_params.py">params</a>) -> <a href="./src/crosmos/types/api/v1/memory_list_response.py">MemoryListResponse</a></code>
- <code title="get /api/v1/memories/{memory_id}">client.api.v1.memories.<a href="./src/crosmos/resources/api/v1/memories.py">get</a>(memory_id) -> <a href="./src/crosmos/types/api/v1/memory.py">Memory</a></code>

# Health

Types:

```python
from crosmos.types import HealthCheckResponse
```

Methods:

- <code title="get /health">client.health.<a href="./src/crosmos/resources/health.py">check</a>() -> <a href="./src/crosmos/types/health_check_response.py">HealthCheckResponse</a></code>
