// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Orgs extends APIResource {
  /**
   * List the organizations the caller is a member of.
   */
  list(query: OrgListParams | null | undefined = {}, options?: RequestOptions): APIPromise<OrgListResponse> {
    return this._client.get('/api/v1/orgs', { query, ...options });
  }

  /**
   * Switch the session's active organization. Returns a re-minted access token;
   * the org-agnostic refresh token is unchanged, so clients swap only the access
   * token.
   */
  setActive(body: OrgSetActiveParams, options?: RequestOptions): APIPromise<SetActiveOrg> {
    return this._client.post('/api/v1/auth/active-org', { body, ...options });
  }

  /**
   * List members of an organization.
   */
  listMembers(orgUuid: string, options?: RequestOptions): APIPromise<MemberList> {
    return this._client.get(path`/api/v1/orgs/${orgUuid}/members`, options);
  }

  /**
   * Update a member's role within an organization.
   */
  updateMember(
    userUuid: string,
    params: OrgUpdateMemberParams,
    options?: RequestOptions,
  ): APIPromise<Member> {
    const { org_uuid, ...body } = params;
    return this._client.patch(path`/api/v1/orgs/${org_uuid}/members/${userUuid}`, { body, ...options });
  }

  /**
   * Remove a member from an organization.
   */
  deleteMember(userUuid: string, params: OrgDeleteMemberParams, options?: RequestOptions): APIPromise<void> {
    const { org_uuid } = params;
    return this._client.delete(path`/api/v1/orgs/${org_uuid}/members/${userUuid}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Invite a user to an organization by email.
   */
  createInvite(orgUuid: string, body: OrgCreateInviteParams, options?: RequestOptions): APIPromise<Invite> {
    return this._client.post(path`/api/v1/orgs/${orgUuid}/invites`, { body, ...options });
  }

  /**
   * List pending invites for an organization.
   */
  listInvites(orgUuid: string, options?: RequestOptions): APIPromise<InviteList> {
    return this._client.get(path`/api/v1/orgs/${orgUuid}/invites`, options);
  }

  /**
   * Revoke a pending invite.
   */
  revokeInvite(
    inviteUuid: string,
    params: OrgRevokeInviteParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { org_uuid } = params;
    return this._client.delete(path`/api/v1/orgs/${org_uuid}/invites/${inviteUuid}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Accept an organization invite by token. The caller joins the org with the
   * invited role.
   */
  acceptInvite(body: OrgAcceptInviteParams, options?: RequestOptions): APIPromise<AcceptInvite> {
    return this._client.post('/api/v1/orgs/invites/accept', { body, ...options });
  }

  /**
   * Preview an invite (org name, inviter, role) without accepting it.
   */
  previewInvite(query: OrgPreviewInviteParams, options?: RequestOptions): APIPromise<InvitePreview> {
    return this._client.get('/api/v1/orgs/invites/preview', { query, ...options });
  }
}

export interface Org {
  id: string;

  billing_email: string | null;

  created_at: string;

  name: string;

  plan: string;

  slug: string;

  updated_at: string;
}

export namespace Org {
  export interface Detail extends Org {
    member_count: number;

    your_role: 'owner' | 'admin' | 'member';
  }
}

export interface OrgListResponse {
  orgs: Array<Org.Detail>;

  next_cursor?: string | null;
}

export interface SetActiveOrg {
  access_token: string;

  active_org_id: string;
}

export interface Member {
  email: string;

  joined_at: string;

  name: string;

  role: 'owner' | 'admin' | 'member';

  user_id: string;
}

export interface MemberList {
  members: Array<Member>;

  next_cursor?: string | null;
}

export interface Invite {
  id: string;

  email: string;

  expires_at: string;

  invited_by: string;

  role: 'admin' | 'member';

  status: 'pending' | 'expired' | 'accepted';
}

export interface InviteList {
  invites: Array<Invite>;
}

export interface AcceptInvite {
  org: Org;

  role: 'admin' | 'member';
}

export interface InvitePreview {
  email: string;

  expires_at: string;

  inviter_name: string | null;

  org_name: string;

  role: 'admin' | 'member';
}

export interface OrgListParams {
  limit?: number;
}

export interface OrgSetActiveParams {
  org_id: string;
}

export interface OrgUpdateMemberParams {
  /**
   * Path param: the organization the member belongs to.
   */
  org_uuid: string;

  /**
   * Body param: the new role to assign.
   */
  role: 'admin' | 'member';
}

export interface OrgDeleteMemberParams {
  /**
   * Path param: the organization the member belongs to.
   */
  org_uuid: string;
}

export interface OrgCreateInviteParams {
  email: string;

  role?: 'admin' | 'member';
}

export interface OrgRevokeInviteParams {
  /**
   * Path param: the organization the invite belongs to.
   */
  org_uuid: string;
}

export interface OrgAcceptInviteParams {
  token: string;
}

export interface OrgPreviewInviteParams {
  token: string;
}

export declare namespace Orgs {
  export {
    type Org as Org,
    type OrgListResponse as OrgListResponse,
    type SetActiveOrg as SetActiveOrg,
    type Member as Member,
    type MemberList as MemberList,
    type Invite as Invite,
    type InviteList as InviteList,
    type AcceptInvite as AcceptInvite,
    type InvitePreview as InvitePreview,
    type OrgListParams as OrgListParams,
    type OrgSetActiveParams as OrgSetActiveParams,
    type OrgUpdateMemberParams as OrgUpdateMemberParams,
    type OrgDeleteMemberParams as OrgDeleteMemberParams,
    type OrgCreateInviteParams as OrgCreateInviteParams,
    type OrgRevokeInviteParams as OrgRevokeInviteParams,
    type OrgAcceptInviteParams as OrgAcceptInviteParams,
    type OrgPreviewInviteParams as OrgPreviewInviteParams,
  };
}
