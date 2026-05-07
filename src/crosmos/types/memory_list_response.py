# File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

from typing import List

from .memory import Memory
from .._models import BaseModel

__all__ = ["MemoryListResponse"]


class MemoryListResponse(BaseModel):
    count: int

    memories: List[Memory]
