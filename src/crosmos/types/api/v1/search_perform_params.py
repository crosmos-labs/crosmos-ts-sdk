# File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

from __future__ import annotations

from typing_extensions import Required, TypedDict

__all__ = ["SearchPerformParams"]


class SearchPerformParams(TypedDict, total=False):
    query: Required[str]
    """The search query text"""

    space_id: Required[int]
    """The memory space to search within"""
