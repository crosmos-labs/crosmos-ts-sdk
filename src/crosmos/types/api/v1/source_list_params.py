# File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

from __future__ import annotations

from typing import Optional
from typing_extensions import Literal, Required, TypedDict

__all__ = ["SourceListParams"]


class SourceListParams(TypedDict, total=False):
    space_id: Required[int]
    """Memory space to list sources from"""

    content_type: Optional[str]

    extraction_status: Optional[str]

    limit: int

    offset: int

    order: Literal["asc", "desc"]

    sort_by: Literal["created_at", "updated_at", "sequence"]
