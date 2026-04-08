# File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

from ...._models import BaseModel

__all__ = ["AdminSendInviteResponse"]


class AdminSendInviteResponse(BaseModel):
    email: str

    invite_id: int

    invite_link: str
