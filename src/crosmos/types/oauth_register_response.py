# File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

from typing import List, Optional

from .._models import BaseModel

__all__ = ["OAuthRegisterResponse"]


class OAuthRegisterResponse(BaseModel):
    client_id: str

    client_id_issued_at: int

    grant_types: List[str]

    redirect_uris: List[str]

    response_types: List[str]

    token_endpoint_auth_method: str

    client_name: Optional[str] = None

    client_secret: Optional[str] = None

    client_secret_expires_at: Optional[int] = None
