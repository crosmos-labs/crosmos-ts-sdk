# File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

from __future__ import annotations

from typing import Dict, Iterable, Optional
from typing_extensions import Required, TypedDict

__all__ = ["SourceIngestParams", "Messages", "MessagesMessage", "Source"]


class SourceIngestParams(TypedDict, total=False):
    space_id: Required[int]
    """Memory space to ingest into"""

    messages: Optional[Messages]

    sources: Optional[Iterable[Source]]


class MessagesMessage(TypedDict, total=False):
    content: Required[str]

    role: Required[str]


class Messages(TypedDict, total=False):
    messages: Required[Iterable[MessagesMessage]]

    lookback: int

    segment_size: int

    session_date: Optional[str]

    session_id: Optional[str]


class Source(TypedDict, total=False):
    content: Required[str]

    content_type: str

    meta: Optional[Dict[str, object]]

    role: Optional[str]

    sequence: int
