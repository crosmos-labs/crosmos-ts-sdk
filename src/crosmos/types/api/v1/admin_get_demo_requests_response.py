# File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

from typing import List
from datetime import datetime

from ...._models import BaseModel

__all__ = ["AdminGetDemoRequestsResponse", "Request"]


class Request(BaseModel):
    id: int

    created_at: datetime

    email: str

    name: str

    status: str


class AdminGetDemoRequestsResponse(BaseModel):
    requests: List[Request]
