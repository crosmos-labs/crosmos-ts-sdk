# File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

from typing import List, Optional
from datetime import datetime

from ....._models import BaseModel

__all__ = ["KeyListResponse", "Key"]


class Key(BaseModel):
    created_at: datetime

    expires_at: Optional[datetime] = None

    is_active: bool

    key_id: int

    key_prefix: str

    last_used_at: Optional[datetime] = None

    name: str


class KeyListResponse(BaseModel):
    keys: List[Key]
