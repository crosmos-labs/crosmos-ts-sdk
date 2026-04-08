# File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

from typing import Optional

from ....._models import BaseModel

__all__ = ["OAuthCallbackResponse"]


class OAuthCallbackResponse(BaseModel):
    access_token: str

    email: str

    is_new_user: bool

    name: str

    refresh_token: str

    user_id: int

    default_space_id: Optional[int] = None

    token_type: Optional[str] = None
