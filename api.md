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

# Orgs

Types:

- <code><a href="./src/resources/orgs.ts">Org</a></code>
- <code><a href="./src/resources/orgs.ts">OrgListResponse</a></code>
- <code><a href="./src/resources/orgs.ts">SetActiveOrg</a></code>
- <code><a href="./src/resources/orgs.ts">Member</a></code>
- <code><a href="./src/resources/orgs.ts">MemberList</a></code>
- <code><a href="./src/resources/orgs.ts">Invite</a></code>
- <code><a href="./src/resources/orgs.ts">InviteList</a></code>
- <code><a href="./src/resources/orgs.ts">AcceptInvite</a></code>
- <code><a href="./src/resources/orgs.ts">InvitePreview</a></code>

Methods:

- <code title="get /api/v1/orgs">client.orgs.<a href="./src/resources/orgs.ts">list</a>({ ...params }) -> OrgListResponse</code>
- <code title="post /api/v1/auth/active-org">client.orgs.<a href="./src/resources/orgs.ts">setActive</a>({ ...params }) -> SetActiveOrg</code>
- <code title="get /api/v1/orgs/{org_uuid}/members">client.orgs.<a href="./src/resources/orgs.ts">listMembers</a>(orgUuid) -> MemberList</code>
- <code title="patch /api/v1/orgs/{org_uuid}/members/{user_uuid}">client.orgs.<a href="./src/resources/orgs.ts">updateMember</a>(userUuid, { ...params }) -> Member</code>
- <code title="delete /api/v1/orgs/{org_uuid}/members/{user_uuid}">client.orgs.<a href="./src/resources/orgs.ts">deleteMember</a>(userUuid, { ...params }) -> void</code>
- <code title="post /api/v1/orgs/{org_uuid}/invites">client.orgs.<a href="./src/resources/orgs.ts">createInvite</a>(orgUuid, { ...params }) -> Invite</code>
- <code title="get /api/v1/orgs/{org_uuid}/invites">client.orgs.<a href="./src/resources/orgs.ts">listInvites</a>(orgUuid) -> InviteList</code>
- <code title="delete /api/v1/orgs/{org_uuid}/invites/{invite_uuid}">client.orgs.<a href="./src/resources/orgs.ts">revokeInvite</a>(inviteUuid, { ...params }) -> void</code>
- <code title="post /api/v1/orgs/invites/accept">client.orgs.<a href="./src/resources/orgs.ts">acceptInvite</a>({ ...params }) -> AcceptInvite</code>
- <code title="get /api/v1/orgs/invites/preview">client.orgs.<a href="./src/resources/orgs.ts">previewInvite</a>({ ...params }) -> InvitePreview</code>

# Sources

Types:

- <code><a href="./src/resources/sources.ts">IngestAccepted</a></code>
- <code><a href="./src/resources/sources.ts">Source</a></code>
- <code><a href="./src/resources/sources.ts">SourceList</a></code>
- <code><a href="./src/resources/sources.ts">SourceVisibility</a></code>

Methods:

- <code title="get /api/v1/sources">client.sources.<a href="./src/resources/sources.ts">list</a>({ ...params }) -> SourceList</code>
- <code title="delete /api/v1/sources/{source_uuid}">client.sources.<a href="./src/resources/sources.ts">delete</a>(sourceUuid, { ...params }) -> void</code>
- <code title="get /api/v1/sources/{source_uuid}">client.sources.<a href="./src/resources/sources.ts">get</a>(sourceUuid, { ...params }) -> Source</code>
- <code title="post /api/v1/sources">client.sources.<a href="./src/resources/sources.ts">ingest</a>({ ...params }) -> IngestAccepted</code>
- <code title="patch /api/v1/sources/{source_uuid}/visibility">client.sources.<a href="./src/resources/sources.ts">updateVisibility</a>(sourceUuid, { ...params }) -> SourceVisibility</code>

# Visibility

Types:

- <code><a href="./src/resources/visibility.ts">Group</a></code>
- <code><a href="./src/resources/visibility.ts">GroupList</a></code>
- <code><a href="./src/resources/visibility.ts">GroupMember</a></code>
- <code><a href="./src/resources/visibility.ts">GroupMemberList</a></code>
- <code><a href="./src/resources/visibility.ts">Grant</a></code>
- <code><a href="./src/resources/visibility.ts">GrantList</a></code>
- <code><a href="./src/resources/visibility.ts">VisiblePrincipal</a></code>
- <code><a href="./src/resources/visibility.ts">GrantImpact</a></code>
- <code><a href="./src/resources/visibility.ts">VisibilityPreviewResponse</a></code>
- <code><a href="./src/resources/visibility.ts">VisibilitySettings</a></code>

Methods:

- <code title="post /api/v1/orgs/{org_uuid}/visibility/groups">client.visibility.<a href="./src/resources/visibility.ts">createGroup</a>(orgUuid, { ...params }) -> Group</code>
- <code title="get /api/v1/orgs/{org_uuid}/visibility/groups">client.visibility.<a href="./src/resources/visibility.ts">listGroups</a>(orgUuid) -> GroupList</code>
- <code title="patch /api/v1/orgs/{org_uuid}/visibility/groups/{group_uuid}">client.visibility.<a href="./src/resources/visibility.ts">updateGroup</a>(groupUuid, { ...params }) -> Group</code>
- <code title="delete /api/v1/orgs/{org_uuid}/visibility/groups/{group_uuid}">client.visibility.<a href="./src/resources/visibility.ts">deleteGroup</a>(groupUuid, { ...params }) -> void</code>
- <code title="get /api/v1/orgs/{org_uuid}/visibility/groups/{group_uuid}/members">client.visibility.<a href="./src/resources/visibility.ts">listGroupMembers</a>(groupUuid, { ...params }) -> GroupMemberList</code>
- <code title="post /api/v1/orgs/{org_uuid}/visibility/groups/{group_uuid}/members/{user_uuid}">client.visibility.<a href="./src/resources/visibility.ts">addGroupMember</a>(userUuid, { ...params }) -> void</code>
- <code title="delete /api/v1/orgs/{org_uuid}/visibility/groups/{group_uuid}/members/{user_uuid}">client.visibility.<a href="./src/resources/visibility.ts">removeGroupMember</a>(userUuid, { ...params }) -> void</code>
- <code title="post /api/v1/orgs/{org_uuid}/visibility/grants">client.visibility.<a href="./src/resources/visibility.ts">createGrant</a>(orgUuid, { ...params }) -> Grant</code>
- <code title="get /api/v1/orgs/{org_uuid}/visibility/grants">client.visibility.<a href="./src/resources/visibility.ts">listGrants</a>(orgUuid) -> GrantList</code>
- <code title="post /api/v1/orgs/{org_uuid}/visibility/grants/preview">client.visibility.<a href="./src/resources/visibility.ts">previewGrant</a>(orgUuid, { ...params }) -> GrantImpact</code>
- <code title="delete /api/v1/orgs/{org_uuid}/visibility/grants/{grant_uuid}">client.visibility.<a href="./src/resources/visibility.ts">deleteGrant</a>(grantUuid, { ...params }) -> void</code>
- <code title="get /api/v1/orgs/{org_uuid}/visibility/preview">client.visibility.<a href="./src/resources/visibility.ts">preview</a>(orgUuid, { ...params }) -> VisibilityPreviewResponse</code>
- <code title="patch /api/v1/orgs/{org_uuid}/visibility/settings">client.visibility.<a href="./src/resources/visibility.ts">updateSettings</a>(orgUuid, { ...params }) -> VisibilitySettings</code>

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
