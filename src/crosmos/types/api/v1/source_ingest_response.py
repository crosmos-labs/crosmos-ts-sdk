# File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

from typing import List, Optional

from ...._models import BaseModel

__all__ = ["SourceIngestResponse"]


class SourceIngestResponse(BaseModel):
    job_id: str

    source_ids: List[int]

    status: Optional[str] = None
