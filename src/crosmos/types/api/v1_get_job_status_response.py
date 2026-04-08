# File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

from typing import Dict, List, Optional
from datetime import datetime

from ..._models import BaseModel

__all__ = ["V1GetJobStatusResponse"]


class V1GetJobStatusResponse(BaseModel):
    created_at: datetime

    job_id: str

    source_ids: List[int]

    status: str

    completed_at: Optional[datetime] = None

    error_message: Optional[str] = None

    result: Optional[Dict[str, object]] = None

    started_at: Optional[datetime] = None
