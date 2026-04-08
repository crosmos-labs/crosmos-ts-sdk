# File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

from __future__ import annotations

import httpx

from .._types import Body, Query, Headers, NotGiven, not_given
from .._compat import cached_property
from .._resource import SyncAPIResource, AsyncAPIResource
from .._response import (
    to_raw_response_wrapper,
    to_streamed_response_wrapper,
    async_to_raw_response_wrapper,
    async_to_streamed_response_wrapper,
)
from .._base_client import make_request_options
from ..types.well_known_retrieve_oauth_metadata_response import WellKnownRetrieveOAuthMetadataResponse

__all__ = ["WellKnownResource", "AsyncWellKnownResource"]


class WellKnownResource(SyncAPIResource):
    @cached_property
    def with_raw_response(self) -> WellKnownResourceWithRawResponse:
        """
        This property can be used as a prefix for any HTTP method call to return
        the raw response object instead of the parsed content.

        For more information, see https://www.github.com/stainless-sdks/crosmos-python#accessing-raw-response-data-eg-headers
        """
        return WellKnownResourceWithRawResponse(self)

    @cached_property
    def with_streaming_response(self) -> WellKnownResourceWithStreamingResponse:
        """
        An alternative to `.with_raw_response` that doesn't eagerly read the response body.

        For more information, see https://www.github.com/stainless-sdks/crosmos-python#with_streaming_response
        """
        return WellKnownResourceWithStreamingResponse(self)

    def retrieve_oauth_metadata(
        self,
        *,
        # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
        # The extra values given here take precedence over values defined on the client or passed to this method.
        extra_headers: Headers | None = None,
        extra_query: Query | None = None,
        extra_body: Body | None = None,
        timeout: float | httpx.Timeout | None | NotGiven = not_given,
    ) -> WellKnownRetrieveOAuthMetadataResponse:
        """Return OAuth 2.1 authorization server metadata."""
        return self._get(
            "/.well-known/oauth-authorization-server",
            options=make_request_options(
                extra_headers=extra_headers, extra_query=extra_query, extra_body=extra_body, timeout=timeout
            ),
            cast_to=WellKnownRetrieveOAuthMetadataResponse,
        )


class AsyncWellKnownResource(AsyncAPIResource):
    @cached_property
    def with_raw_response(self) -> AsyncWellKnownResourceWithRawResponse:
        """
        This property can be used as a prefix for any HTTP method call to return
        the raw response object instead of the parsed content.

        For more information, see https://www.github.com/stainless-sdks/crosmos-python#accessing-raw-response-data-eg-headers
        """
        return AsyncWellKnownResourceWithRawResponse(self)

    @cached_property
    def with_streaming_response(self) -> AsyncWellKnownResourceWithStreamingResponse:
        """
        An alternative to `.with_raw_response` that doesn't eagerly read the response body.

        For more information, see https://www.github.com/stainless-sdks/crosmos-python#with_streaming_response
        """
        return AsyncWellKnownResourceWithStreamingResponse(self)

    async def retrieve_oauth_metadata(
        self,
        *,
        # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
        # The extra values given here take precedence over values defined on the client or passed to this method.
        extra_headers: Headers | None = None,
        extra_query: Query | None = None,
        extra_body: Body | None = None,
        timeout: float | httpx.Timeout | None | NotGiven = not_given,
    ) -> WellKnownRetrieveOAuthMetadataResponse:
        """Return OAuth 2.1 authorization server metadata."""
        return await self._get(
            "/.well-known/oauth-authorization-server",
            options=make_request_options(
                extra_headers=extra_headers, extra_query=extra_query, extra_body=extra_body, timeout=timeout
            ),
            cast_to=WellKnownRetrieveOAuthMetadataResponse,
        )


class WellKnownResourceWithRawResponse:
    def __init__(self, well_known: WellKnownResource) -> None:
        self._well_known = well_known

        self.retrieve_oauth_metadata = to_raw_response_wrapper(
            well_known.retrieve_oauth_metadata,
        )


class AsyncWellKnownResourceWithRawResponse:
    def __init__(self, well_known: AsyncWellKnownResource) -> None:
        self._well_known = well_known

        self.retrieve_oauth_metadata = async_to_raw_response_wrapper(
            well_known.retrieve_oauth_metadata,
        )


class WellKnownResourceWithStreamingResponse:
    def __init__(self, well_known: WellKnownResource) -> None:
        self._well_known = well_known

        self.retrieve_oauth_metadata = to_streamed_response_wrapper(
            well_known.retrieve_oauth_metadata,
        )


class AsyncWellKnownResourceWithStreamingResponse:
    def __init__(self, well_known: AsyncWellKnownResource) -> None:
        self._well_known = well_known

        self.retrieve_oauth_metadata = async_to_streamed_response_wrapper(
            well_known.retrieve_oauth_metadata,
        )
