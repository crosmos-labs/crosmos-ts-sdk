# File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

from typing import Dict, Optional
from datetime import datetime

from .._models import BaseModel

__all__ = ["Source"]


class Source(BaseModel):
    id: int

    content: str

    content_type: str

    created_at: datetime

    extraction_status: str

    meta: Optional[Dict[str, object]] = None

    sequence: int

    space_id: int

    token_count: int

    updated_at: datetime

    uuid: str
