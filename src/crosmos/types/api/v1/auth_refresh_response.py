# File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

from typing import Optional

from ...._models import BaseModel

__all__ = ["AuthRefreshResponse"]


class AuthRefreshResponse(BaseModel):
    """Returned by token refresh."""

    access_token: str

    email: str

    name: str

    refresh_token: str

    user_id: int

    token_type: Optional[str] = None
