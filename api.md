# Spaces

Types:

- <code><a href="./src/resources/spaces.ts">Space</a></code>
- <code><a href="./src/resources/spaces.ts">SpaceList</a></code>

Methods:

- <code title="post /api/v1/spaces">client.spaces.<a href="./src/resources/spaces.ts">create</a>({ ...params }) -> Space</code>
- <code title="get /api/v1/spaces">client.spaces.<a href="./src/resources/spaces.ts">list</a>({ ...params }) -> SpaceList</code>
- <code title="delete /api/v1/spaces/{space_uuid}">client.spaces.<a href="./src/resources/spaces.ts">delete</a>(spaceUuid) -> void</code>
- <code title="get /api/v1/spaces/{space_uuid}">client.spaces.<a href="./src/resources/spaces.ts">get</a>(spaceUuid) -> Space</code>

# Search

Types:

- <code><a href="./src/resources/search.ts">Search</a></code>

Methods:

- <code title="post /api/v1/search">client.search.<a href="./src/resources/search.ts">hybrid</a>({ ...params }) -> Search</code>

# Sources

Types:

- <code><a href="./src/resources/sources.ts">IngestAccepted</a></code>
- <code><a href="./src/resources/sources.ts">Source</a></code>
- <code><a href="./src/resources/sources.ts">SourceList</a></code>

Methods:

- <code title="get /api/v1/sources">client.sources.<a href="./src/resources/sources.ts">list</a>({ ...params }) -> SourceList</code>
- <code title="delete /api/v1/sources/{source_uuid}">client.sources.<a href="./src/resources/sources.ts">delete</a>(sourceUuid, { ...params }) -> void</code>
- <code title="get /api/v1/sources/{source_uuid}">client.sources.<a href="./src/resources/sources.ts">get</a>(sourceUuid, { ...params }) -> Source</code>
- <code title="post /api/v1/sources">client.sources.<a href="./src/resources/sources.ts">ingest</a>({ ...params }) -> IngestAccepted</code>

# Memories

Types:

- <code><a href="./src/resources/memories.ts">Memory</a></code>
- <code><a href="./src/resources/memories.ts">MemoryList</a></code>

Methods:

- <code title="get /api/v1/memories">client.memories.<a href="./src/resources/memories.ts">list</a>({ ...params }) -> MemoryList</code>
- <code title="delete /api/v1/memories/{memory_uuid}">client.memories.<a href="./src/resources/memories.ts">delete</a>(memoryUuid, { ...params }) -> void</code>
- <code title="get /api/v1/memories/{memory_uuid}">client.memories.<a href="./src/resources/memories.ts">get</a>(memoryUuid, { ...params }) -> Memory</code>

# Entities

Types:

- <code><a href="./src/resources/entities.ts">Entity</a></code>
- <code><a href="./src/resources/entities.ts">EntityDetail</a></code>
- <code><a href="./src/resources/entities.ts">EntityList</a></code>

Methods:

- <code title="get /api/v1/entities">client.entities.<a href="./src/resources/entities.ts">list</a>({ ...params }) -> EntityList</code>
- <code title="get /api/v1/entities/{entity_uuid}">client.entities.<a href="./src/resources/entities.ts">get</a>(entityUuid, { ...params }) -> EntityDetail</code>

# Conversations

Types:

- <code><a href="./src/resources/conversations.ts">IngestConversation</a></code>

Methods:

- <code title="post /api/v1/conversations">client.conversations.<a href="./src/resources/conversations.ts">ingest</a>({ ...params }) -> IngestConversation</code>

# Jobs

Types:

- <code><a href="./src/resources/jobs.ts">Job</a></code>

Methods:

- <code title="get /api/v1/jobs/{job_id}">client.jobs.<a href="./src/resources/jobs.ts">getStatus</a>(jobID) -> Job</code>

# Usage

Types:

- <code><a href="./src/resources/usage.ts">Usage</a></code>

Methods:

- <code title="get /api/v1/usage">client.usage.<a href="./src/resources/usage.ts">get</a>({ ...params }) -> Usage</code>

# Health

Types:

- <code><a href="./src/resources/health.ts">HealthCheckResponse</a></code>

Methods:

- <code title="get /health">client.health.<a href="./src/resources/health.ts">check</a>() -> HealthCheckResponse</code>
