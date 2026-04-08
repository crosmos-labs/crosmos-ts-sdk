# File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

from typing import Dict, Optional
from datetime import datetime

from ...._models import BaseModel

__all__ = ["Space"]


class Space(BaseModel):
    id: int

    created_at: datetime

    description: Optional[str] = None

    meta: Optional[Dict[str, object]] = None

    name: str

    updated_at: datetime
