# File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

from ...._models import BaseModel

__all__ = ["AuthGetMeResponse"]


class AuthGetMeResponse(BaseModel):
    email: str

    name: str

    user_id: int
