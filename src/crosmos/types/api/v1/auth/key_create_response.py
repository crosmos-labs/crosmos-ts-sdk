# File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

from typing import Optional
from datetime import datetime

from ....._models import BaseModel

__all__ = ["KeyCreateResponse"]


class KeyCreateResponse(BaseModel):
    expires_at: Optional[datetime] = None

    key_id: int

    key_prefix: str

    name: str

    raw_key: str
