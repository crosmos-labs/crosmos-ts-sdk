# File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

from typing import List, Optional
from datetime import datetime

from .._models import BaseModel

__all__ = ["Search", "Candidate"]


class Candidate(BaseModel):
    """A memory candidate in search results."""

    content: str

    created_at: datetime

    event_time: Optional[datetime] = None

    final_score: float

    fused_score: float

    importance_score: Optional[float] = None

    memory_id: int

    memory_type: str

    persistence_score: float

    source_signals: List[str]

    source_chunk: Optional[str] = None


class Search(BaseModel):
    """Search response payload."""

    candidates: List[Candidate]

    query: str
