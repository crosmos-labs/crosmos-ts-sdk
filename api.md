# API

## V1

Types:

```python
from crosmos.types.api import V1GetJobStatusResponse, V1GetUsageResponse
```

Methods:

- <code title="get /api/v1/jobs/{job_id}">client.api.v1.<a href="./src/crosmos/resources/api/v1/v1.py">get_job_status</a>(job_id) -> <a href="./src/crosmos/types/api/v1_get_job_status_response.py">V1GetJobStatusResponse</a></code>
- <code title="get /api/v1/usage">client.api.v1.<a href="./src/crosmos/resources/api/v1/v1.py">get_usage</a>(\*\*<a href="src/crosmos/types/api/v1_get_usage_params.py">params</a>) -> <a href="./src/crosmos/types/api/v1_get_usage_response.py">V1GetUsageResponse</a></code>

### Auth

Types:

```python
from crosmos.types.api.v1 import AuthGetMeResponse, AuthRefreshResponse
```

Methods:

- <code title="get /api/v1/auth/me">client.api.v1.auth.<a href="./src/crosmos/resources/api/v1/auth/auth.py">get_me</a>() -> <a href="./src/crosmos/types/api/v1/auth_get_me_response.py">AuthGetMeResponse</a></code>
- <code title="post /api/v1/auth/refresh">client.api.v1.auth.<a href="./src/crosmos/resources/api/v1/auth/auth.py">refresh</a>(\*\*<a href="src/crosmos/types/api/v1/auth_refresh_params.py">params</a>) -> <a href="./src/crosmos/types/api/v1/auth_refresh_response.py">AuthRefreshResponse</a></code>

#### Keys

Types:

```python
from crosmos.types.api.v1.auth import KeyCreateResponse, KeyListResponse
```

Methods:

- <code title="post /api/v1/auth/keys">client.api.v1.auth.keys.<a href="./src/crosmos/resources/api/v1/auth/keys.py">create</a>(\*\*<a href="src/crosmos/types/api/v1/auth/key_create_params.py">params</a>) -> <a href="./src/crosmos/types/api/v1/auth/key_create_response.py">KeyCreateResponse</a></code>
- <code title="get /api/v1/auth/keys">client.api.v1.auth.keys.<a href="./src/crosmos/resources/api/v1/auth/keys.py">list</a>() -> <a href="./src/crosmos/types/api/v1/auth/key_list_response.py">KeyListResponse</a></code>
- <code title="delete /api/v1/auth/keys/{key_id}">client.api.v1.auth.keys.<a href="./src/crosmos/resources/api/v1/auth/keys.py">revoke</a>(key_id) -> None</code>

#### OAuth

Types:

```python
from crosmos.types.api.v1.auth import (
    OAuthAuthorizeResponse,
    OAuthCallbackResponse,
    OAuthGetProvidersResponse,
)
```

Methods:

- <code title="get /api/v1/auth/oauth/{provider}/authorize">client.api.v1.auth.oauth.<a href="./src/crosmos/resources/api/v1/auth/oauth.py">authorize</a>(provider, \*\*<a href="src/crosmos/types/api/v1/auth/oauth_authorize_params.py">params</a>) -> <a href="./src/crosmos/types/api/v1/auth/oauth_authorize_response.py">OAuthAuthorizeResponse</a></code>
- <code title="post /api/v1/auth/oauth/{provider}/callback">client.api.v1.auth.oauth.<a href="./src/crosmos/resources/api/v1/auth/oauth.py">callback</a>(provider, \*\*<a href="src/crosmos/types/api/v1/auth/oauth_callback_params.py">params</a>) -> <a href="./src/crosmos/types/api/v1/auth/oauth_callback_response.py">OAuthCallbackResponse</a></code>
- <code title="get /api/v1/auth/oauth/providers">client.api.v1.auth.oauth.<a href="./src/crosmos/resources/api/v1/auth/oauth.py">get_providers</a>() -> <a href="./src/crosmos/types/api/v1/auth/oauth_get_providers_response.py">OAuthGetProvidersResponse</a></code>

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

### Demo

Types:

```python
from crosmos.types.api.v1 import DemoBookResponse
```

Methods:

- <code title="post /api/v1/demo/book">client.api.v1.demo.<a href="./src/crosmos/resources/api/v1/demo.py">book</a>(\*\*<a href="src/crosmos/types/api/v1/demo_book_params.py">params</a>) -> <a href="./src/crosmos/types/api/v1/demo_book_response.py">DemoBookResponse</a></code>

### Admin

Types:

```python
from crosmos.types.api.v1 import AdminGetDemoRequestsResponse, AdminSendInviteResponse
```

Methods:

- <code title="get /api/v1/admin/demo-requests">client.api.v1.admin.<a href="./src/crosmos/resources/api/v1/admin.py">get_demo_requests</a>(\*\*<a href="src/crosmos/types/api/v1/admin_get_demo_requests_params.py">params</a>) -> <a href="./src/crosmos/types/api/v1/admin_get_demo_requests_response.py">AdminGetDemoRequestsResponse</a></code>
- <code title="post /api/v1/admin/invites">client.api.v1.admin.<a href="./src/crosmos/resources/api/v1/admin.py">send_invite</a>(\*\*<a href="src/crosmos/types/api/v1/admin_send_invite_params.py">params</a>) -> <a href="./src/crosmos/types/api/v1/admin_send_invite_response.py">AdminSendInviteResponse</a></code>

# WellKnown

Types:

```python
from crosmos.types import WellKnownRetrieveOAuthMetadataResponse
```

Methods:

- <code title="get /.well-known/oauth-authorization-server">client.well_known.<a href="./src/crosmos/resources/well_known.py">retrieve_oauth_metadata</a>() -> <a href="./src/crosmos/types/well_known_retrieve_oauth_metadata_response.py">WellKnownRetrieveOAuthMetadataResponse</a></code>

# OAuth

Types:

```python
from crosmos.types import OAuthRegisterResponse
```

Methods:

- <code title="post /oauth/register">client.oauth.<a href="./src/crosmos/resources/oauth.py">register</a>(\*\*<a href="src/crosmos/types/oauth_register_params.py">params</a>) -> <a href="./src/crosmos/types/oauth_register_response.py">OAuthRegisterResponse</a></code>

# Health

Types:

```python
from crosmos.types import HealthCheckResponse
```

Methods:

- <code title="get /health">client.health.<a href="./src/crosmos/resources/health.py">check</a>() -> <a href="./src/crosmos/types/health_check_response.py">HealthCheckResponse</a></code>
