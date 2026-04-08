# File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

from __future__ import annotations

from typing import Optional

import httpx

from ....._types import Body, Omit, Query, Headers, NotGiven, omit, not_given
from ....._utils import path_template, maybe_transform, async_maybe_transform
from ....._compat import cached_property
from ....._resource import SyncAPIResource, AsyncAPIResource
from ....._response import (
    to_raw_response_wrapper,
    to_streamed_response_wrapper,
    async_to_raw_response_wrapper,
    async_to_streamed_response_wrapper,
)
from ....._base_client import make_request_options
from .....types.api.v1.auth import oauth_callback_params, oauth_authorize_params
from .....types.api.v1.auth.oauth_callback_response import OAuthCallbackResponse
from .....types.api.v1.auth.oauth_authorize_response import OAuthAuthorizeResponse
from .....types.api.v1.auth.oauth_get_providers_response import OAuthGetProvidersResponse

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

    def authorize(
        self,
        provider: str,
        *,
        redirect_uri: str,
        # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
        # The extra values given here take precedence over values defined on the client or passed to this method.
        extra_headers: Headers | None = None,
        extra_query: Query | None = None,
        extra_body: Body | None = None,
        timeout: float | httpx.Timeout | None | NotGiven = not_given,
    ) -> OAuthAuthorizeResponse:
        """
        Get the authorization URL for the given provider.

        The client should redirect the user to this URL. After the user consents, the
        provider will redirect back to `redirect_uri` with a `code` and `state`
        parameter.

        Args:
          extra_headers: Send extra headers

          extra_query: Add additional query parameters to the request

          extra_body: Add additional JSON properties to the request

          timeout: Override the client-level default timeout for this request, in seconds
        """
        if not provider:
            raise ValueError(f"Expected a non-empty value for `provider` but received {provider!r}")
        return self._get(
            path_template("/api/v1/auth/oauth/{provider}/authorize", provider=provider),
            options=make_request_options(
                extra_headers=extra_headers,
                extra_query=extra_query,
                extra_body=extra_body,
                timeout=timeout,
                query=maybe_transform({"redirect_uri": redirect_uri}, oauth_authorize_params.OAuthAuthorizeParams),
            ),
            cast_to=OAuthAuthorizeResponse,
        )

    def callback(
        self,
        provider: str,
        *,
        code: str,
        redirect_uri: str,
        state: str,
        invite_token: Optional[str] | Omit = omit,
        # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
        # The extra values given here take precedence over values defined on the client or passed to this method.
        extra_headers: Headers | None = None,
        extra_query: Query | None = None,
        extra_body: Body | None = None,
        timeout: float | httpx.Timeout | None | NotGiven = not_given,
    ) -> OAuthCallbackResponse:
        """
        Exchange an authorization code for JWT tokens.

        The client sends the `code` received from the provider redirect along with the
        `state` it received from the authorize step.

        Args:
          extra_headers: Send extra headers

          extra_query: Add additional query parameters to the request

          extra_body: Add additional JSON properties to the request

          timeout: Override the client-level default timeout for this request, in seconds
        """
        if not provider:
            raise ValueError(f"Expected a non-empty value for `provider` but received {provider!r}")
        return self._post(
            path_template("/api/v1/auth/oauth/{provider}/callback", provider=provider),
            body=maybe_transform(
                {
                    "code": code,
                    "redirect_uri": redirect_uri,
                    "state": state,
                    "invite_token": invite_token,
                },
                oauth_callback_params.OAuthCallbackParams,
            ),
            options=make_request_options(
                extra_headers=extra_headers, extra_query=extra_query, extra_body=extra_body, timeout=timeout
            ),
            cast_to=OAuthCallbackResponse,
        )

    def get_providers(
        self,
        *,
        # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
        # The extra values given here take precedence over values defined on the client or passed to this method.
        extra_headers: Headers | None = None,
        extra_query: Query | None = None,
        extra_body: Body | None = None,
        timeout: float | httpx.Timeout | None | NotGiven = not_given,
    ) -> OAuthGetProvidersResponse:
        """List all available OAuth providers."""
        return self._get(
            "/api/v1/auth/oauth/providers",
            options=make_request_options(
                extra_headers=extra_headers, extra_query=extra_query, extra_body=extra_body, timeout=timeout
            ),
            cast_to=OAuthGetProvidersResponse,
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

    async def authorize(
        self,
        provider: str,
        *,
        redirect_uri: str,
        # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
        # The extra values given here take precedence over values defined on the client or passed to this method.
        extra_headers: Headers | None = None,
        extra_query: Query | None = None,
        extra_body: Body | None = None,
        timeout: float | httpx.Timeout | None | NotGiven = not_given,
    ) -> OAuthAuthorizeResponse:
        """
        Get the authorization URL for the given provider.

        The client should redirect the user to this URL. After the user consents, the
        provider will redirect back to `redirect_uri` with a `code` and `state`
        parameter.

        Args:
          extra_headers: Send extra headers

          extra_query: Add additional query parameters to the request

          extra_body: Add additional JSON properties to the request

          timeout: Override the client-level default timeout for this request, in seconds
        """
        if not provider:
            raise ValueError(f"Expected a non-empty value for `provider` but received {provider!r}")
        return await self._get(
            path_template("/api/v1/auth/oauth/{provider}/authorize", provider=provider),
            options=make_request_options(
                extra_headers=extra_headers,
                extra_query=extra_query,
                extra_body=extra_body,
                timeout=timeout,
                query=await async_maybe_transform(
                    {"redirect_uri": redirect_uri}, oauth_authorize_params.OAuthAuthorizeParams
                ),
            ),
            cast_to=OAuthAuthorizeResponse,
        )

    async def callback(
        self,
        provider: str,
        *,
        code: str,
        redirect_uri: str,
        state: str,
        invite_token: Optional[str] | Omit = omit,
        # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
        # The extra values given here take precedence over values defined on the client or passed to this method.
        extra_headers: Headers | None = None,
        extra_query: Query | None = None,
        extra_body: Body | None = None,
        timeout: float | httpx.Timeout | None | NotGiven = not_given,
    ) -> OAuthCallbackResponse:
        """
        Exchange an authorization code for JWT tokens.

        The client sends the `code` received from the provider redirect along with the
        `state` it received from the authorize step.

        Args:
          extra_headers: Send extra headers

          extra_query: Add additional query parameters to the request

          extra_body: Add additional JSON properties to the request

          timeout: Override the client-level default timeout for this request, in seconds
        """
        if not provider:
            raise ValueError(f"Expected a non-empty value for `provider` but received {provider!r}")
        return await self._post(
            path_template("/api/v1/auth/oauth/{provider}/callback", provider=provider),
            body=await async_maybe_transform(
                {
                    "code": code,
                    "redirect_uri": redirect_uri,
                    "state": state,
                    "invite_token": invite_token,
                },
                oauth_callback_params.OAuthCallbackParams,
            ),
            options=make_request_options(
                extra_headers=extra_headers, extra_query=extra_query, extra_body=extra_body, timeout=timeout
            ),
            cast_to=OAuthCallbackResponse,
        )

    async def get_providers(
        self,
        *,
        # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
        # The extra values given here take precedence over values defined on the client or passed to this method.
        extra_headers: Headers | None = None,
        extra_query: Query | None = None,
        extra_body: Body | None = None,
        timeout: float | httpx.Timeout | None | NotGiven = not_given,
    ) -> OAuthGetProvidersResponse:
        """List all available OAuth providers."""
        return await self._get(
            "/api/v1/auth/oauth/providers",
            options=make_request_options(
                extra_headers=extra_headers, extra_query=extra_query, extra_body=extra_body, timeout=timeout
            ),
            cast_to=OAuthGetProvidersResponse,
        )


class OAuthResourceWithRawResponse:
    def __init__(self, oauth: OAuthResource) -> None:
        self._oauth = oauth

        self.authorize = to_raw_response_wrapper(
            oauth.authorize,
        )
        self.callback = to_raw_response_wrapper(
            oauth.callback,
        )
        self.get_providers = to_raw_response_wrapper(
            oauth.get_providers,
        )


class AsyncOAuthResourceWithRawResponse:
    def __init__(self, oauth: AsyncOAuthResource) -> None:
        self._oauth = oauth

        self.authorize = async_to_raw_response_wrapper(
            oauth.authorize,
        )
        self.callback = async_to_raw_response_wrapper(
            oauth.callback,
        )
        self.get_providers = async_to_raw_response_wrapper(
            oauth.get_providers,
        )


class OAuthResourceWithStreamingResponse:
    def __init__(self, oauth: OAuthResource) -> None:
        self._oauth = oauth

        self.authorize = to_streamed_response_wrapper(
            oauth.authorize,
        )
        self.callback = to_streamed_response_wrapper(
            oauth.callback,
        )
        self.get_providers = to_streamed_response_wrapper(
            oauth.get_providers,
        )


class AsyncOAuthResourceWithStreamingResponse:
    def __init__(self, oauth: AsyncOAuthResource) -> None:
        self._oauth = oauth

        self.authorize = async_to_streamed_response_wrapper(
            oauth.authorize,
        )
        self.callback = async_to_streamed_response_wrapper(
            oauth.callback,
        )
        self.get_providers = async_to_streamed_response_wrapper(
            oauth.get_providers,
        )
