# File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

from typing import List
from datetime import date

from ..._models import BaseModel

__all__ = ["V1GetUsageResponse", "Space"]


class Space(BaseModel):
    """Usage breakdown for a single memory space."""

    search_queries: int

    space_id: int

    tokens_ingested: int


class V1GetUsageResponse(BaseModel):
    """Aggregated usage response."""

    period_end: date

    period_start: date

    spaces: List[Space]

    total_search_queries: int

    total_tokens_ingested: int
