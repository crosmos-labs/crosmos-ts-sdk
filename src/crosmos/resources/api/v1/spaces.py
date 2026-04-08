# File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

from __future__ import annotations

from typing import Dict, Optional

import httpx

from ...._types import Body, Omit, Query, Headers, NoneType, NotGiven, omit, not_given
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
from ....types.api.v1 import space_create_params
from ....types.api.v1.space import Space
from ....types.api.v1.space_list_response import SpaceListResponse

__all__ = ["SpacesResource", "AsyncSpacesResource"]


class SpacesResource(SyncAPIResource):
    @cached_property
    def with_raw_response(self) -> SpacesResourceWithRawResponse:
        """
        This property can be used as a prefix for any HTTP method call to return
        the raw response object instead of the parsed content.

        For more information, see https://www.github.com/crosmos-app/python-sdk#accessing-raw-response-data-eg-headers
        """
        return SpacesResourceWithRawResponse(self)

    @cached_property
    def with_streaming_response(self) -> SpacesResourceWithStreamingResponse:
        """
        An alternative to `.with_raw_response` that doesn't eagerly read the response body.

        For more information, see https://www.github.com/crosmos-app/python-sdk#with_streaming_response
        """
        return SpacesResourceWithStreamingResponse(self)

    def create(
        self,
        *,
        name: str,
        description: Optional[str] | Omit = omit,
        meta: Optional[Dict[str, object]] | Omit = omit,
        # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
        # The extra values given here take precedence over values defined on the client or passed to this method.
        extra_headers: Headers | None = None,
        extra_query: Query | None = None,
        extra_body: Body | None = None,
        timeout: float | httpx.Timeout | None | NotGiven = not_given,
    ) -> Space:
        """
        Create a new memory space for the authenticated user.

        Args:
          extra_headers: Send extra headers

          extra_query: Add additional query parameters to the request

          extra_body: Add additional JSON properties to the request

          timeout: Override the client-level default timeout for this request, in seconds
        """
        return self._post(
            "/api/v1/spaces",
            body=maybe_transform(
                {
                    "name": name,
                    "description": description,
                    "meta": meta,
                },
                space_create_params.SpaceCreateParams,
            ),
            options=make_request_options(
                extra_headers=extra_headers, extra_query=extra_query, extra_body=extra_body, timeout=timeout
            ),
            cast_to=Space,
        )

    def list(
        self,
        *,
        # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
        # The extra values given here take precedence over values defined on the client or passed to this method.
        extra_headers: Headers | None = None,
        extra_query: Query | None = None,
        extra_body: Body | None = None,
        timeout: float | httpx.Timeout | None | NotGiven = not_given,
    ) -> SpaceListResponse:
        """List all memory spaces owned by the authenticated user."""
        return self._get(
            "/api/v1/spaces",
            options=make_request_options(
                extra_headers=extra_headers, extra_query=extra_query, extra_body=extra_body, timeout=timeout
            ),
            cast_to=SpaceListResponse,
        )

    def delete(
        self,
        space_id: int,
        *,
        # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
        # The extra values given here take precedence over values defined on the client or passed to this method.
        extra_headers: Headers | None = None,
        extra_query: Query | None = None,
        extra_body: Body | None = None,
        timeout: float | httpx.Timeout | None | NotGiven = not_given,
    ) -> None:
        """
        Delete a memory space and all its contents (cascading).

        Args:
          extra_headers: Send extra headers

          extra_query: Add additional query parameters to the request

          extra_body: Add additional JSON properties to the request

          timeout: Override the client-level default timeout for this request, in seconds
        """
        extra_headers = {"Accept": "*/*", **(extra_headers or {})}
        return self._delete(
            path_template("/api/v1/spaces/{space_id}", space_id=space_id),
            options=make_request_options(
                extra_headers=extra_headers, extra_query=extra_query, extra_body=extra_body, timeout=timeout
            ),
            cast_to=NoneType,
        )

    def get(
        self,
        space_id: int,
        *,
        # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
        # The extra values given here take precedence over values defined on the client or passed to this method.
        extra_headers: Headers | None = None,
        extra_query: Query | None = None,
        extra_body: Body | None = None,
        timeout: float | httpx.Timeout | None | NotGiven = not_given,
    ) -> Space:
        """
        Get a memory space by ID.

        Args:
          extra_headers: Send extra headers

          extra_query: Add additional query parameters to the request

          extra_body: Add additional JSON properties to the request

          timeout: Override the client-level default timeout for this request, in seconds
        """
        return self._get(
            path_template("/api/v1/spaces/{space_id}", space_id=space_id),
            options=make_request_options(
                extra_headers=extra_headers, extra_query=extra_query, extra_body=extra_body, timeout=timeout
            ),
            cast_to=Space,
        )


class AsyncSpacesResource(AsyncAPIResource):
    @cached_property
    def with_raw_response(self) -> AsyncSpacesResourceWithRawResponse:
        """
        This property can be used as a prefix for any HTTP method call to return
        the raw response object instead of the parsed content.

        For more information, see https://www.github.com/crosmos-app/python-sdk#accessing-raw-response-data-eg-headers
        """
        return AsyncSpacesResourceWithRawResponse(self)

    @cached_property
    def with_streaming_response(self) -> AsyncSpacesResourceWithStreamingResponse:
        """
        An alternative to `.with_raw_response` that doesn't eagerly read the response body.

        For more information, see https://www.github.com/crosmos-app/python-sdk#with_streaming_response
        """
        return AsyncSpacesResourceWithStreamingResponse(self)

    async def create(
        self,
        *,
        name: str,
        description: Optional[str] | Omit = omit,
        meta: Optional[Dict[str, object]] | Omit = omit,
        # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
        # The extra values given here take precedence over values defined on the client or passed to this method.
        extra_headers: Headers | None = None,
        extra_query: Query | None = None,
        extra_body: Body | None = None,
        timeout: float | httpx.Timeout | None | NotGiven = not_given,
    ) -> Space:
        """
        Create a new memory space for the authenticated user.

        Args:
          extra_headers: Send extra headers

          extra_query: Add additional query parameters to the request

          extra_body: Add additional JSON properties to the request

          timeout: Override the client-level default timeout for this request, in seconds
        """
        return await self._post(
            "/api/v1/spaces",
            body=await async_maybe_transform(
                {
                    "name": name,
                    "description": description,
                    "meta": meta,
                },
                space_create_params.SpaceCreateParams,
            ),
            options=make_request_options(
                extra_headers=extra_headers, extra_query=extra_query, extra_body=extra_body, timeout=timeout
            ),
            cast_to=Space,
        )

    async def list(
        self,
        *,
        # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
        # The extra values given here take precedence over values defined on the client or passed to this method.
        extra_headers: Headers | None = None,
        extra_query: Query | None = None,
        extra_body: Body | None = None,
        timeout: float | httpx.Timeout | None | NotGiven = not_given,
    ) -> SpaceListResponse:
        """List all memory spaces owned by the authenticated user."""
        return await self._get(
            "/api/v1/spaces",
            options=make_request_options(
                extra_headers=extra_headers, extra_query=extra_query, extra_body=extra_body, timeout=timeout
            ),
            cast_to=SpaceListResponse,
        )

    async def delete(
        self,
        space_id: int,
        *,
        # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
        # The extra values given here take precedence over values defined on the client or passed to this method.
        extra_headers: Headers | None = None,
        extra_query: Query | None = None,
        extra_body: Body | None = None,
        timeout: float | httpx.Timeout | None | NotGiven = not_given,
    ) -> None:
        """
        Delete a memory space and all its contents (cascading).

        Args:
          extra_headers: Send extra headers

          extra_query: Add additional query parameters to the request

          extra_body: Add additional JSON properties to the request

          timeout: Override the client-level default timeout for this request, in seconds
        """
        extra_headers = {"Accept": "*/*", **(extra_headers or {})}
        return await self._delete(
            path_template("/api/v1/spaces/{space_id}", space_id=space_id),
            options=make_request_options(
                extra_headers=extra_headers, extra_query=extra_query, extra_body=extra_body, timeout=timeout
            ),
            cast_to=NoneType,
        )

    async def get(
        self,
        space_id: int,
        *,
        # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
        # The extra values given here take precedence over values defined on the client or passed to this method.
        extra_headers: Headers | None = None,
        extra_query: Query | None = None,
        extra_body: Body | None = None,
        timeout: float | httpx.Timeout | None | NotGiven = not_given,
    ) -> Space:
        """
        Get a memory space by ID.

        Args:
          extra_headers: Send extra headers

          extra_query: Add additional query parameters to the request

          extra_body: Add additional JSON properties to the request

          timeout: Override the client-level default timeout for this request, in seconds
        """
        return await self._get(
            path_template("/api/v1/spaces/{space_id}", space_id=space_id),
            options=make_request_options(
                extra_headers=extra_headers, extra_query=extra_query, extra_body=extra_body, timeout=timeout
            ),
            cast_to=Space,
        )


class SpacesResourceWithRawResponse:
    def __init__(self, spaces: SpacesResource) -> None:
        self._spaces = spaces

        self.create = to_raw_response_wrapper(
            spaces.create,
        )
        self.list = to_raw_response_wrapper(
            spaces.list,
        )
        self.delete = to_raw_response_wrapper(
            spaces.delete,
        )
        self.get = to_raw_response_wrapper(
            spaces.get,
        )


class AsyncSpacesResourceWithRawResponse:
    def __init__(self, spaces: AsyncSpacesResource) -> None:
        self._spaces = spaces

        self.create = async_to_raw_response_wrapper(
            spaces.create,
        )
        self.list = async_to_raw_response_wrapper(
            spaces.list,
        )
        self.delete = async_to_raw_response_wrapper(
            spaces.delete,
        )
        self.get = async_to_raw_response_wrapper(
            spaces.get,
        )


class SpacesResourceWithStreamingResponse:
    def __init__(self, spaces: SpacesResource) -> None:
        self._spaces = spaces

        self.create = to_streamed_response_wrapper(
            spaces.create,
        )
        self.list = to_streamed_response_wrapper(
            spaces.list,
        )
        self.delete = to_streamed_response_wrapper(
            spaces.delete,
        )
        self.get = to_streamed_response_wrapper(
            spaces.get,
        )


class AsyncSpacesResourceWithStreamingResponse:
    def __init__(self, spaces: AsyncSpacesResource) -> None:
        self._spaces = spaces

        self.create = async_to_streamed_response_wrapper(
            spaces.create,
        )
        self.list = async_to_streamed_response_wrapper(
            spaces.list,
        )
        self.delete = async_to_streamed_response_wrapper(
            spaces.delete,
        )
        self.get = async_to_streamed_response_wrapper(
            spaces.get,
        )
