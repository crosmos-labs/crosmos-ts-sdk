// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Visibility extends APIResource {
  /**
   * Create a visibility group within an organization.
   */
  createGroup(
    orgUuid: string,
    body: VisibilityCreateGroupParams,
    options?: RequestOptions,
  ): APIPromise<Group> {
    return this._client.post(path`/api/v1/orgs/${orgUuid}/visibility/groups`, { body, ...options });
  }

  /**
   * List visibility groups in an organization.
   */
  listGroups(orgUuid: string, options?: RequestOptions): APIPromise<GroupList> {
    return this._client.get(path`/api/v1/orgs/${orgUuid}/visibility/groups`, options);
  }

  /**
   * Rename a visibility group or change its slug.
   */
  updateGroup(
    groupUuid: string,
    params: VisibilityUpdateGroupParams,
    options?: RequestOptions,
  ): APIPromise<Group> {
    const { org_uuid, ...body } = params;
    return this._client.patch(path`/api/v1/orgs/${org_uuid}/visibility/groups/${groupUuid}`, {
      body,
      ...options,
    });
  }

  /**
   * Delete a visibility group.
   */
  deleteGroup(
    groupUuid: string,
    params: VisibilityDeleteGroupParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { org_uuid } = params;
    return this._client.delete(path`/api/v1/orgs/${org_uuid}/visibility/groups/${groupUuid}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * List the members of a visibility group.
   */
  listGroupMembers(
    groupUuid: string,
    params: VisibilityListGroupMembersParams,
    options?: RequestOptions,
  ): APIPromise<GroupMemberList> {
    const { org_uuid } = params;
    return this._client.get(path`/api/v1/orgs/${org_uuid}/visibility/groups/${groupUuid}/members`, options);
  }

  /**
   * Add a user to a visibility group.
   */
  addGroupMember(
    userUuid: string,
    params: VisibilityAddGroupMemberParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { org_uuid, group_uuid } = params;
    return this._client.post(
      path`/api/v1/orgs/${org_uuid}/visibility/groups/${group_uuid}/members/${userUuid}`,
      {
        ...options,
        headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      },
    );
  }

  /**
   * Remove a user from a visibility group.
   */
  removeGroupMember(
    userUuid: string,
    params: VisibilityRemoveGroupMemberParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { org_uuid, group_uuid } = params;
    return this._client.delete(
      path`/api/v1/orgs/${org_uuid}/visibility/groups/${group_uuid}/members/${userUuid}`,
      {
        ...options,
        headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      },
    );
  }

  /**
   * Create a grant: members of the viewer group can read memories owned by members
   * of the subject group.
   */
  createGrant(
    orgUuid: string,
    body: VisibilityCreateGrantParams,
    options?: RequestOptions,
  ): APIPromise<Grant> {
    return this._client.post(path`/api/v1/orgs/${orgUuid}/visibility/grants`, { body, ...options });
  }

  /**
   * List visibility grants in an organization.
   */
  listGrants(orgUuid: string, options?: RequestOptions): APIPromise<GrantList> {
    return this._client.get(path`/api/v1/orgs/${orgUuid}/visibility/grants`, options);
  }

  /**
   * Dry-run a proposed grant: returns the transitive set of users it would newly
   * expose to the viewer group, without committing it.
   */
  previewGrant(
    orgUuid: string,
    body: VisibilityCreateGrantParams,
    options?: RequestOptions,
  ): APIPromise<GrantImpact> {
    return this._client.post(path`/api/v1/orgs/${orgUuid}/visibility/grants/preview`, { body, ...options });
  }

  /**
   * Delete a visibility grant.
   */
  deleteGrant(
    grantUuid: string,
    params: VisibilityDeleteGrantParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { org_uuid } = params;
    return this._client.delete(path`/api/v1/orgs/${org_uuid}/visibility/grants/${grantUuid}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Preview which users a given user can see under the org's current visibility
   * configuration.
   */
  preview(
    orgUuid: string,
    query: VisibilityPreviewParams,
    options?: RequestOptions,
  ): APIPromise<VisibilityPreviewResponse> {
    return this._client.get(path`/api/v1/orgs/${orgUuid}/visibility/preview`, { query, ...options });
  }

  /**
   * Enable or disable the visibility graph for an organization.
   */
  updateSettings(
    orgUuid: string,
    body: VisibilityUpdateSettingsParams,
    options?: RequestOptions,
  ): APIPromise<VisibilitySettings> {
    return this._client.patch(path`/api/v1/orgs/${orgUuid}/visibility/settings`, { body, ...options });
  }
}

export interface Group {
  id: string;

  created_at: string;

  member_count: number;

  name: string;

  slug: string;

  updated_at: string;
}

export interface GroupList {
  groups: Array<Group>;
}

export interface GroupMember {
  email: string;

  name: string;

  user_id: string;
}

export interface GroupMemberList {
  members: Array<GroupMember>;
}

export interface Grant {
  id: string;

  created_at: string;

  subject_group_id: string;

  subject_group_slug: string;

  viewer_group_id: string;

  viewer_group_slug: string;
}

export interface GrantList {
  grants: Array<Grant>;
}

/**
 * A user reachable under the visibility configuration.
 */
export interface VisiblePrincipal {
  email: string;

  name: string;

  user_id: string;
}

export interface GrantImpact {
  /**
   * The transitive set of users this grant would newly expose to the viewer group.
   */
  newly_visible: Array<VisiblePrincipal>;

  subject_group_id: string;

  viewer_group_id: string;
}

export interface VisibilityPreviewResponse {
  user_id: string;

  visibility_enabled: boolean;

  visible_users: Array<VisiblePrincipal>;
}

export interface VisibilitySettings {
  visibility_enabled: boolean;
}

export interface VisibilityCreateGroupParams {
  name: string;

  slug?: string | null;
}

export interface VisibilityUpdateGroupParams {
  /**
   * Path param: the organization the group belongs to.
   */
  org_uuid: string;

  /**
   * Body param: new display name.
   */
  name?: string | null;

  /**
   * Body param: new slug.
   */
  slug?: string | null;
}

export interface VisibilityDeleteGroupParams {
  /**
   * Path param: the organization the group belongs to.
   */
  org_uuid: string;
}

export interface VisibilityListGroupMembersParams {
  /**
   * Path param: the organization the group belongs to.
   */
  org_uuid: string;
}

export interface VisibilityAddGroupMemberParams {
  /**
   * Path param: the organization the group belongs to.
   */
  org_uuid: string;

  /**
   * Path param: the group to add the user to.
   */
  group_uuid: string;
}

export interface VisibilityRemoveGroupMemberParams {
  /**
   * Path param: the organization the group belongs to.
   */
  org_uuid: string;

  /**
   * Path param: the group to remove the user from.
   */
  group_uuid: string;
}

export interface VisibilityCreateGrantParams {
  subject_group_id: string;

  viewer_group_id: string;
}

export interface VisibilityDeleteGrantParams {
  /**
   * Path param: the organization the grant belongs to.
   */
  org_uuid: string;
}

export interface VisibilityPreviewParams {
  /**
   * The user whose visibility to preview.
   */
  user_id: string;
}

export interface VisibilityUpdateSettingsParams {
  enabled: boolean;
}

export declare namespace Visibility {
  export {
    type Group as Group,
    type GroupList as GroupList,
    type GroupMember as GroupMember,
    type GroupMemberList as GroupMemberList,
    type Grant as Grant,
    type GrantList as GrantList,
    type VisiblePrincipal as VisiblePrincipal,
    type GrantImpact as GrantImpact,
    type VisibilityPreviewResponse as VisibilityPreviewResponse,
    type VisibilitySettings as VisibilitySettings,
    type VisibilityCreateGroupParams as VisibilityCreateGroupParams,
    type VisibilityUpdateGroupParams as VisibilityUpdateGroupParams,
    type VisibilityDeleteGroupParams as VisibilityDeleteGroupParams,
    type VisibilityListGroupMembersParams as VisibilityListGroupMembersParams,
    type VisibilityAddGroupMemberParams as VisibilityAddGroupMemberParams,
    type VisibilityRemoveGroupMemberParams as VisibilityRemoveGroupMemberParams,
    type VisibilityCreateGrantParams as VisibilityCreateGrantParams,
    type VisibilityDeleteGrantParams as VisibilityDeleteGrantParams,
    type VisibilityPreviewParams as VisibilityPreviewParams,
    type VisibilityUpdateSettingsParams as VisibilityUpdateSettingsParams,
  };
}
