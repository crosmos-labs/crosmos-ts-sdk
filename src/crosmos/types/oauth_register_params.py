# File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

from __future__ import annotations

from typing import Optional
from typing_extensions import TypedDict

from .._types import SequenceNotStr

__all__ = ["OAuthRegisterParams"]


class OAuthRegisterParams(TypedDict, total=False):
    client_name: Optional[str]

    grant_types: SequenceNotStr[str]

    redirect_uris: SequenceNotStr[str]

    response_types: SequenceNotStr[str]

    token_endpoint_auth_method: str
