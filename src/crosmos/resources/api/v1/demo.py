# File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

from __future__ import annotations

import httpx

from ...._types import Body, Query, Headers, NotGiven, not_given
from ...._utils import maybe_transform, async_maybe_transform
from ...._compat import cached_property
from ...._resource import SyncAPIResource, AsyncAPIResource
from ...._response import (
    to_raw_response_wrapper,
    to_streamed_response_wrapper,
    async_to_raw_response_wrapper,
    async_to_streamed_response_wrapper,
)
from ...._base_client import make_request_options
from ....types.api.v1 import demo_book_params
from ....types.api.v1.demo_book_response import DemoBookResponse

__all__ = ["DemoResource", "AsyncDemoResource"]


class DemoResource(SyncAPIResource):
    @cached_property
    def with_raw_response(self) -> DemoResourceWithRawResponse:
        """
        This property can be used as a prefix for any HTTP method call to return
        the raw response object instead of the parsed content.

        For more information, see https://www.github.com/crosmos-app/python-sdk#accessing-raw-response-data-eg-headers
        """
        return DemoResourceWithRawResponse(self)

    @cached_property
    def with_streaming_response(self) -> DemoResourceWithStreamingResponse:
        """
        An alternative to `.with_raw_response` that doesn't eagerly read the response body.

        For more information, see https://www.github.com/crosmos-app/python-sdk#with_streaming_response
        """
        return DemoResourceWithStreamingResponse(self)

    def book(
        self,
        *,
        email: str,
        name: str,
        # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
        # The extra values given here take precedence over values defined on the client or passed to this method.
        extra_headers: Headers | None = None,
        extra_query: Query | None = None,
        extra_body: Body | None = None,
        timeout: float | httpx.Timeout | None | NotGiven = not_given,
    ) -> DemoBookResponse:
        """Submit a demo request.

        Sends a confirmation email.

        Args:
          extra_headers: Send extra headers

          extra_query: Add additional query parameters to the request

          extra_body: Add additional JSON properties to the request

          timeout: Override the client-level default timeout for this request, in seconds
        """
        return self._post(
            "/api/v1/demo/book",
            body=maybe_transform(
                {
                    "email": email,
                    "name": name,
                },
                demo_book_params.DemoBookParams,
            ),
            options=make_request_options(
                extra_headers=extra_headers, extra_query=extra_query, extra_body=extra_body, timeout=timeout
            ),
            cast_to=DemoBookResponse,
        )


class AsyncDemoResource(AsyncAPIResource):
    @cached_property
    def with_raw_response(self) -> AsyncDemoResourceWithRawResponse:
        """
        This property can be used as a prefix for any HTTP method call to return
        the raw response object instead of the parsed content.

        For more information, see https://www.github.com/crosmos-app/python-sdk#accessing-raw-response-data-eg-headers
        """
        return AsyncDemoResourceWithRawResponse(self)

    @cached_property
    def with_streaming_response(self) -> AsyncDemoResourceWithStreamingResponse:
        """
        An alternative to `.with_raw_response` that doesn't eagerly read the response body.

        For more information, see https://www.github.com/crosmos-app/python-sdk#with_streaming_response
        """
        return AsyncDemoResourceWithStreamingResponse(self)

    async def book(
        self,
        *,
        email: str,
        name: str,
        # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
        # The extra values given here take precedence over values defined on the client or passed to this method.
        extra_headers: Headers | None = None,
        extra_query: Query | None = None,
        extra_body: Body | None = None,
        timeout: float | httpx.Timeout | None | NotGiven = not_given,
    ) -> DemoBookResponse:
        """Submit a demo request.

        Sends a confirmation email.

        Args:
          extra_headers: Send extra headers

          extra_query: Add additional query parameters to the request

          extra_body: Add additional JSON properties to the request

          timeout: Override the client-level default timeout for this request, in seconds
        """
        return await self._post(
            "/api/v1/demo/book",
            body=await async_maybe_transform(
                {
                    "email": email,
                    "name": name,
                },
                demo_book_params.DemoBookParams,
            ),
            options=make_request_options(
                extra_headers=extra_headers, extra_query=extra_query, extra_body=extra_body, timeout=timeout
            ),
            cast_to=DemoBookResponse,
        )


class DemoResourceWithRawResponse:
    def __init__(self, demo: DemoResource) -> None:
        self._demo = demo

        self.book = to_raw_response_wrapper(
            demo.book,
        )


class AsyncDemoResourceWithRawResponse:
    def __init__(self, demo: AsyncDemoResource) -> None:
        self._demo = demo

        self.book = async_to_raw_response_wrapper(
            demo.book,
        )


class DemoResourceWithStreamingResponse:
    def __init__(self, demo: DemoResource) -> None:
        self._demo = demo

        self.book = to_streamed_response_wrapper(
            demo.book,
        )


class AsyncDemoResourceWithStreamingResponse:
    def __init__(self, demo: AsyncDemoResource) -> None:
        self._demo = demo

        self.book = async_to_streamed_response_wrapper(
            demo.book,
        )
