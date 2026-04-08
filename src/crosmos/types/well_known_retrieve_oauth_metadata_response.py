# File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

from typing import List, Optional

from .._models import BaseModel

__all__ = ["WellKnownRetrieveOAuthMetadataResponse"]


class WellKnownRetrieveOAuthMetadataResponse(BaseModel):
    authorization_endpoint: str

    issuer: str

    token_endpoint: str

    code_challenge_methods_supported: Optional[List[str]] = None

    grant_types_supported: Optional[List[str]] = None

    registration_endpoint: Optional[str] = None

    response_types_supported: Optional[List[str]] = None

    revocation_endpoint: Optional[str] = None

    token_endpoint_auth_methods_supported: Optional[List[str]] = None
