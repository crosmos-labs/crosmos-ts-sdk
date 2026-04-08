# File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

from ....._models import BaseModel

__all__ = ["OAuthAuthorizeResponse"]


class OAuthAuthorizeResponse(BaseModel):
    authorization_url: str

    state: str
