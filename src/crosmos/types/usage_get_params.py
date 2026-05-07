# File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

from __future__ import annotations

from typing import Union, Optional
from datetime import date
from typing_extensions import Annotated, TypedDict

from .._utils import PropertyInfo

__all__ = ["UsageGetParams"]


class UsageGetParams(TypedDict, total=False):
    end_date: Annotated[Union[str, date, None], PropertyInfo(format="iso8601")]
    """End date (defaults to today)"""

    space_id: Optional[int]
    """Filter by memory space"""

    start_date: Annotated[Union[str, date, None], PropertyInfo(format="iso8601")]
    """Start date (defaults to 1st of current month)"""
