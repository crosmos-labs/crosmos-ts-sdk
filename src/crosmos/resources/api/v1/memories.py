# File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

from __future__ import annotations

from typing import Optional
from typing_extensions import Literal

import httpx

from ...._types import Body, Omit, Query, Headers, NotGiven, omit, not_given
from ...._utils import path_template, maybe_transform, async_maybe_transform
from ...._compat import cached_property
from ...._resource import SyncAPIResource, AsyncAPIResource
from ...._response import (
    to_raw_response_wrapper,
    to_streamed_response_wrapper,
    async_to_raw_response_wrapper,
    async_to_streamed_response_wrapper,
)
from ...._base_client import make_request_options
from ....types.api.v1 import memory_list_params
from ....types.api.v1.memory import Memory
from ....types.api.v1.memory_list_response import MemoryListResponse

__all__ = ["MemoriesResource", "AsyncMemoriesResource"]


class MemoriesResource(SyncAPIResource):
    @cached_property
    def with_raw_response(self) -> MemoriesResourceWithRawResponse:
        """
        This property can be used as a prefix for any HTTP method call to return
        the raw response object instead of the parsed content.

        For more information, see https://www.github.com/stainless-sdks/crosmos-python#accessing-raw-response-data-eg-headers
        """
        return MemoriesResourceWithRawResponse(self)

    @cached_property
    def with_streaming_response(self) -> MemoriesResourceWithStreamingResponse:
        """
        An alternative to `.with_raw_response` that doesn't eagerly read the response body.

        For more information, see https://www.github.com/stainless-sdks/crosmos-python#with_streaming_response
        """
        return MemoriesResourceWithStreamingResponse(self)

    def list(
        self,
        *,
        space_id: int,
        limit: int | Omit = omit,
        memory_type: Optional[Literal["viewpoint", "semantic", "episode"]] | Omit = omit,
        offset: int | Omit = omit,
        order: Literal["asc", "desc"] | Omit = omit,
        sort_by: Literal["created_at", "importance_score", "event_time", "last_accessed_at", "access_frequency"]
        | Omit = omit,
        # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
        # The extra values given here take precedence over values defined on the client or passed to this method.
        extra_headers: Headers | None = None,
        extra_query: Query | None = None,
        extra_body: Body | None = None,
        timeout: float | httpx.Timeout | None | NotGiven = not_given,
    ) -> MemoryListResponse:
        """
        List memories in a memory space.

        Args:
          space_id: Memory space to list memories from

          extra_headers: Send extra headers

          extra_query: Add additional query parameters to the request

          extra_body: Add additional JSON properties to the request

          timeout: Override the client-level default timeout for this request, in seconds
        """
        return self._get(
            "/api/v1/memories",
            options=make_request_options(
                extra_headers=extra_headers,
                extra_query=extra_query,
                extra_body=extra_body,
                timeout=timeout,
                query=maybe_transform(
                    {
                        "space_id": space_id,
                        "limit": limit,
                        "memory_type": memory_type,
                        "offset": offset,
                        "order": order,
                        "sort_by": sort_by,
                    },
                    memory_list_params.MemoryListParams,
                ),
            ),
            cast_to=MemoryListResponse,
        )

    def get(
        self,
        memory_id: int,
        *,
        # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
        # The extra values given here take precedence over values defined on the client or passed to this method.
        extra_headers: Headers | None = None,
        extra_query: Query | None = None,
        extra_body: Body | None = None,
        timeout: float | httpx.Timeout | None | NotGiven = not_given,
    ) -> Memory:
        """
        Get a memory by ID.

        Args:
          extra_headers: Send extra headers

          extra_query: Add additional query parameters to the request

          extra_body: Add additional JSON properties to the request

          timeout: Override the client-level default timeout for this request, in seconds
        """
        return self._get(
            path_template("/api/v1/memories/{memory_id}", memory_id=memory_id),
            options=make_request_options(
                extra_headers=extra_headers, extra_query=extra_query, extra_body=extra_body, timeout=timeout
            ),
            cast_to=Memory,
        )


class AsyncMemoriesResource(AsyncAPIResource):
    @cached_property
    def with_raw_response(self) -> AsyncMemoriesResourceWithRawResponse:
        """
        This property can be used as a prefix for any HTTP method call to return
        the raw response object instead of the parsed content.

        For more information, see https://www.github.com/stainless-sdks/crosmos-python#accessing-raw-response-data-eg-headers
        """
        return AsyncMemoriesResourceWithRawResponse(self)

    @cached_property
    def with_streaming_response(self) -> AsyncMemoriesResourceWithStreamingResponse:
        """
        An alternative to `.with_raw_response` that doesn't eagerly read the response body.

        For more information, see https://www.github.com/stainless-sdks/crosmos-python#with_streaming_response
        """
        return AsyncMemoriesResourceWithStreamingResponse(self)

    async def list(
        self,
        *,
        space_id: int,
        limit: int | Omit = omit,
        memory_type: Optional[Literal["viewpoint", "semantic", "episode"]] | Omit = omit,
        offset: int | Omit = omit,
        order: Literal["asc", "desc"] | Omit = omit,
        sort_by: Literal["created_at", "importance_score", "event_time", "last_accessed_at", "access_frequency"]
        | Omit = omit,
        # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
        # The extra values given here take precedence over values defined on the client or passed to this method.
        extra_headers: Headers | None = None,
        extra_query: Query | None = None,
        extra_body: Body | None = None,
        timeout: float | httpx.Timeout | None | NotGiven = not_given,
    ) -> MemoryListResponse:
        """
        List memories in a memory space.

        Args:
          space_id: Memory space to list memories from

          extra_headers: Send extra headers

          extra_query: Add additional query parameters to the request

          extra_body: Add additional JSON properties to the request

          timeout: Override the client-level default timeout for this request, in seconds
        """
        return await self._get(
            "/api/v1/memories",
            options=make_request_options(
                extra_headers=extra_headers,
                extra_query=extra_query,
                extra_body=extra_body,
                timeout=timeout,
                query=await async_maybe_transform(
                    {
                        "space_id": space_id,
                        "limit": limit,
                        "memory_type": memory_type,
                        "offset": offset,
                        "order": order,
                        "sort_by": sort_by,
                    },
                    memory_list_params.MemoryListParams,
                ),
            ),
            cast_to=MemoryListResponse,
        )

    async def get(
        self,
        memory_id: int,
        *,
        # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
        # The extra values given here take precedence over values defined on the client or passed to this method.
        extra_headers: Headers | None = None,
        extra_query: Query | None = None,
        extra_body: Body | None = None,
        timeout: float | httpx.Timeout | None | NotGiven = not_given,
    ) -> Memory:
        """
        Get a memory by ID.

        Args:
          extra_headers: Send extra headers

          extra_query: Add additional query parameters to the request

          extra_body: Add additional JSON properties to the request

          timeout: Override the client-level default timeout for this request, in seconds
        """
        return await self._get(
            path_template("/api/v1/memories/{memory_id}", memory_id=memory_id),
            options=make_request_options(
                extra_headers=extra_headers, extra_query=extra_query, extra_body=extra_body, timeout=timeout
            ),
            cast_to=Memory,
        )


class MemoriesResourceWithRawResponse:
    def __init__(self, memories: MemoriesResource) -> None:
        self._memories = memories

        self.list = to_raw_response_wrapper(
            memories.list,
        )
        self.get = to_raw_response_wrapper(
            memories.get,
        )


class AsyncMemoriesResourceWithRawResponse:
    def __init__(self, memories: AsyncMemoriesResource) -> None:
        self._memories = memories

        self.list = async_to_raw_response_wrapper(
            memories.list,
        )
        self.get = async_to_raw_response_wrapper(
            memories.get,
        )


class MemoriesResourceWithStreamingResponse:
    def __init__(self, memories: MemoriesResource) -> None:
        self._memories = memories

        self.list = to_streamed_response_wrapper(
            memories.list,
        )
        self.get = to_streamed_response_wrapper(
            memories.get,
        )


class AsyncMemoriesResourceWithStreamingResponse:
    def __init__(self, memories: AsyncMemoriesResource) -> None:
        self._memories = memories

        self.list = async_to_streamed_response_wrapper(
            memories.list,
        )
        self.get = async_to_streamed_response_wrapper(
            memories.get,
        )
