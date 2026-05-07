# File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

from __future__ import annotations

from typing import Optional
from typing_extensions import Literal, Required, TypedDict

__all__ = ["MemoryListParams"]


class MemoryListParams(TypedDict, total=False):
    space_id: Required[int]
    """Memory space to list memories from"""

    limit: int

    memory_type: Optional[Literal["viewpoint", "semantic", "episode"]]

    offset: int

    order: Literal["asc", "desc"]

    sort_by: Literal["created_at", "importance_score", "event_time", "last_accessed_at", "access_frequency"]
