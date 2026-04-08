# File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

from __future__ import annotations

from typing import Optional

import httpx

from ..types import oauth_register_params
from .._types import Body, Omit, Query, Headers, NotGiven, SequenceNotStr, omit, not_given
from .._utils import maybe_transform, async_maybe_transform
from .._compat import cached_property
from .._resource import SyncAPIResource, AsyncAPIResource
from .._response import (
    to_raw_response_wrapper,
    to_streamed_response_wrapper,
    async_to_raw_response_wrapper,
    async_to_streamed_response_wrapper,
)
from .._base_client import make_request_options
from ..types.oauth_register_response import OAuthRegisterResponse

__all__ = ["OAuthResource", "AsyncOAuthResource"]


class OAuthResource(SyncAPIResource):
    @cached_property
    def with_raw_response(self) -> OAuthResourceWithRawResponse:
        """
        This property can be used as a prefix for any HTTP method call to return
        the raw response object instead of the parsed content.

        For more information, see https://www.github.com/stainless-sdks/crosmos-python#accessing-raw-response-data-eg-headers
        """
        return OAuthResourceWithRawResponse(self)

    @cached_property
    def with_streaming_response(self) -> OAuthResourceWithStreamingResponse:
        """
        An alternative to `.with_raw_response` that doesn't eagerly read the response body.

        For more information, see https://www.github.com/stainless-sdks/crosmos-python#with_streaming_response
        """
        return OAuthResourceWithStreamingResponse(self)

    def register(
        self,
        *,
        client_name: Optional[str] | Omit = omit,
        grant_types: SequenceNotStr[str] | Omit = omit,
        redirect_uris: SequenceNotStr[str] | Omit = omit,
        response_types: SequenceNotStr[str] | Omit = omit,
        token_endpoint_auth_method: str | Omit = omit,
        # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
        # The extra values given here take precedence over values defined on the client or passed to this method.
        extra_headers: Headers | None = None,
        extra_query: Query | None = None,
        extra_body: Body | None = None,
        timeout: float | httpx.Timeout | None | NotGiven = not_given,
    ) -> OAuthRegisterResponse:
        """
        Register a new OAuth client dynamically.

        MCP proxy clients are always public (they cannot forward client_secret during
        token exchange), so we force token_endpoint_auth_method="none" regardless of
        what the caller requests.

        Args:
          extra_headers: Send extra headers

          extra_query: Add additional query parameters to the request

          extra_body: Add additional JSON properties to the request

          timeout: Override the client-level default timeout for this request, in seconds
        """
        return self._post(
            "/oauth/register",
            body=maybe_transform(
                {
                    "client_name": client_name,
                    "grant_types": grant_types,
                    "redirect_uris": redirect_uris,
                    "response_types": response_types,
                    "token_endpoint_auth_method": token_endpoint_auth_method,
                },
                oauth_register_params.OAuthRegisterParams,
            ),
            options=make_request_options(
                extra_headers=extra_headers, extra_query=extra_query, extra_body=extra_body, timeout=timeout
            ),
            cast_to=OAuthRegisterResponse,
        )


class AsyncOAuthResource(AsyncAPIResource):
    @cached_property
    def with_raw_response(self) -> AsyncOAuthResourceWithRawResponse:
        """
        This property can be used as a prefix for any HTTP method call to return
        the raw response object instead of the parsed content.

        For more information, see https://www.github.com/stainless-sdks/crosmos-python#accessing-raw-response-data-eg-headers
        """
        return AsyncOAuthResourceWithRawResponse(self)

    @cached_property
    def with_streaming_response(self) -> AsyncOAuthResourceWithStreamingResponse:
        """
        An alternative to `.with_raw_response` that doesn't eagerly read the response body.

        For more information, see https://www.github.com/stainless-sdks/crosmos-python#with_streaming_response
        """
        return AsyncOAuthResourceWithStreamingResponse(self)

    async def register(
        self,
        *,
        client_name: Optional[str] | Omit = omit,
        grant_types: SequenceNotStr[str] | Omit = omit,
        redirect_uris: SequenceNotStr[str] | Omit = omit,
        response_types: SequenceNotStr[str] | Omit = omit,
        token_endpoint_auth_method: str | Omit = omit,
        # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
        # The extra values given here take precedence over values defined on the client or passed to this method.
        extra_headers: Headers | None = None,
        extra_query: Query | None = None,
        extra_body: Body | None = None,
        timeout: float | httpx.Timeout | None | NotGiven = not_given,
    ) -> OAuthRegisterResponse:
        """
        Register a new OAuth client dynamically.

        MCP proxy clients are always public (they cannot forward client_secret during
        token exchange), so we force token_endpoint_auth_method="none" regardless of
        what the caller requests.

        Args:
          extra_headers: Send extra headers

          extra_query: Add additional query parameters to the request

          extra_body: Add additional JSON properties to the request

          timeout: Override the client-level default timeout for this request, in seconds
        """
        return await self._post(
            "/oauth/register",
            body=await async_maybe_transform(
                {
                    "client_name": client_name,
                    "grant_types": grant_types,
                    "redirect_uris": redirect_uris,
                    "response_types": response_types,
                    "token_endpoint_auth_method": token_endpoint_auth_method,
                },
                oauth_register_params.OAuthRegisterParams,
            ),
            options=make_request_options(
                extra_headers=extra_headers, extra_query=extra_query, extra_body=extra_body, timeout=timeout
            ),
            cast_to=OAuthRegisterResponse,
        )


class OAuthResourceWithRawResponse:
    def __init__(self, oauth: OAuthResource) -> None:
        self._oauth = oauth

        self.register = to_raw_response_wrapper(
            oauth.register,
        )


class AsyncOAuthResourceWithRawResponse:
    def __init__(self, oauth: AsyncOAuthResource) -> None:
        self._oauth = oauth

        self.register = async_to_raw_response_wrapper(
            oauth.register,
        )


class OAuthResourceWithStreamingResponse:
    def __init__(self, oauth: OAuthResource) -> None:
        self._oauth = oauth

        self.register = to_streamed_response_wrapper(
            oauth.register,
        )


class AsyncOAuthResourceWithStreamingResponse:
    def __init__(self, oauth: AsyncOAuthResource) -> None:
        self._oauth = oauth

        self.register = async_to_streamed_response_wrapper(
            oauth.register,
        )
