# Spaces

Types:

```python
from crosmos.types import Space, SpaceListResponse
```

Methods:

- <code title="post /api/v1/spaces">client.spaces.<a href="./src/crosmos/resources/spaces.py">create</a>(\*\*<a href="src/crosmos/types/space_create_params.py">params</a>) -> <a href="./src/crosmos/types/space.py">Space</a></code>
- <code title="get /api/v1/spaces">client.spaces.<a href="./src/crosmos/resources/spaces.py">list</a>() -> <a href="./src/crosmos/types/space_list_response.py">SpaceListResponse</a></code>
- <code title="delete /api/v1/spaces/{space_id}">client.spaces.<a href="./src/crosmos/resources/spaces.py">delete</a>(space_id) -> None</code>
- <code title="get /api/v1/spaces/{space_id}">client.spaces.<a href="./src/crosmos/resources/spaces.py">get</a>(space_id) -> <a href="./src/crosmos/types/space.py">Space</a></code>

# Search

Types:

```python
from crosmos.types import Search
```

Methods:

- <code title="post /api/v1/search">client.search.<a href="./src/crosmos/resources/search.py">hybrid</a>(\*\*<a href="src/crosmos/types/search_hybrid_params.py">params</a>) -> <a href="./src/crosmos/types/search.py">Search</a></code>

# Sources

Types:

```python
from crosmos.types import Source, SourceListResponse, SourceIngestResponse
```

Methods:

- <code title="get /api/v1/sources">client.sources.<a href="./src/crosmos/resources/sources.py">list</a>(\*\*<a href="src/crosmos/types/source_list_params.py">params</a>) -> <a href="./src/crosmos/types/source_list_response.py">SourceListResponse</a></code>
- <code title="delete /api/v1/sources/{source_id}">client.sources.<a href="./src/crosmos/resources/sources.py">delete</a>(source_id) -> None</code>
- <code title="get /api/v1/sources/{source_id}">client.sources.<a href="./src/crosmos/resources/sources.py">get</a>(source_id) -> <a href="./src/crosmos/types/source.py">Source</a></code>
- <code title="post /api/v1/sources">client.sources.<a href="./src/crosmos/resources/sources.py">ingest</a>(\*\*<a href="src/crosmos/types/source_ingest_params.py">params</a>) -> <a href="./src/crosmos/types/source_ingest_response.py">SourceIngestResponse</a></code>

# Memories

Types:

```python
from crosmos.types import Memory, MemoryListResponse
```

Methods:

- <code title="get /api/v1/memories">client.memories.<a href="./src/crosmos/resources/memories.py">list</a>(\*\*<a href="src/crosmos/types/memory_list_params.py">params</a>) -> <a href="./src/crosmos/types/memory_list_response.py">MemoryListResponse</a></code>
- <code title="get /api/v1/memories/{memory_id}">client.memories.<a href="./src/crosmos/resources/memories.py">get</a>(memory_id) -> <a href="./src/crosmos/types/memory.py">Memory</a></code>

# Usage

Types:

```python
from crosmos.types import UsageGetResponse
```

Methods:

- <code title="get /api/v1/usage">client.usage.<a href="./src/crosmos/resources/usage.py">get</a>(\*\*<a href="src/crosmos/types/usage_get_params.py">params</a>) -> <a href="./src/crosmos/types/usage_get_response.py">UsageGetResponse</a></code>

# Jobs

Types:

```python
from crosmos.types import JobGetStatusResponse
```

Methods:

- <code title="get /api/v1/jobs/{job_id}">client.jobs.<a href="./src/crosmos/resources/jobs.py">get_status</a>(job_id) -> <a href="./src/crosmos/types/job_get_status_response.py">JobGetStatusResponse</a></code>

# Health

Types:

```python
from crosmos.types import HealthCheckResponse
```

Methods:

- <code title="get /health">client.health.<a href="./src/crosmos/resources/health.py">check</a>() -> <a href="./src/crosmos/types/health_check_response.py">HealthCheckResponse</a></code>
