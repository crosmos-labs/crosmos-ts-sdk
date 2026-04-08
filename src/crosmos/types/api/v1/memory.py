# File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

from typing import Dict, Optional
from datetime import datetime

from ...._models import BaseModel

__all__ = ["Memory"]


class Memory(BaseModel):
    id: int

    access_frequency: int

    content: str

    created_at: datetime

    event_time: Optional[datetime] = None

    forgotten_at: Optional[datetime] = None

    importance_score: Optional[float] = None

    last_accessed_at: datetime

    memory_type: str

    meta: Optional[Dict[str, object]] = None

    space_id: int
