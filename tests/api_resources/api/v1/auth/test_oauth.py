# File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

from __future__ import annotations

import os
from typing import Any, cast

import pytest

from crosmos import Crosmos, AsyncCrosmos
from tests.utils import assert_matches_type
from crosmos.types.api.v1.auth import (
    OAuthCallbackResponse,
    OAuthAuthorizeResponse,
    OAuthGetProvidersResponse,
)

base_url = os.environ.get("TEST_API_BASE_URL", "http://127.0.0.1:4010")


class TestOAuth:
    parametrize = pytest.mark.parametrize("client", [False, True], indirect=True, ids=["loose", "strict"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    def test_method_authorize(self, client: Crosmos) -> None:
        oauth = client.api.v1.auth.oauth.authorize(
            provider="provider",
            redirect_uri="redirect_uri",
        )
        assert_matches_type(OAuthAuthorizeResponse, oauth, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    def test_raw_response_authorize(self, client: Crosmos) -> None:
        response = client.api.v1.auth.oauth.with_raw_response.authorize(
            provider="provider",
            redirect_uri="redirect_uri",
        )

        assert response.is_closed is True
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        oauth = response.parse()
        assert_matches_type(OAuthAuthorizeResponse, oauth, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    def test_streaming_response_authorize(self, client: Crosmos) -> None:
        with client.api.v1.auth.oauth.with_streaming_response.authorize(
            provider="provider",
            redirect_uri="redirect_uri",
        ) as response:
            assert not response.is_closed
            assert response.http_request.headers.get("X-Stainless-Lang") == "python"

            oauth = response.parse()
            assert_matches_type(OAuthAuthorizeResponse, oauth, path=["response"])

        assert cast(Any, response.is_closed) is True

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    def test_path_params_authorize(self, client: Crosmos) -> None:
        with pytest.raises(ValueError, match=r"Expected a non-empty value for `provider` but received ''"):
            client.api.v1.auth.oauth.with_raw_response.authorize(
                provider="",
                redirect_uri="redirect_uri",
            )

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    def test_method_callback(self, client: Crosmos) -> None:
        oauth = client.api.v1.auth.oauth.callback(
            provider="provider",
            code="code",
            redirect_uri="redirect_uri",
            state="state",
        )
        assert_matches_type(OAuthCallbackResponse, oauth, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    def test_method_callback_with_all_params(self, client: Crosmos) -> None:
        oauth = client.api.v1.auth.oauth.callback(
            provider="provider",
            code="code",
            redirect_uri="redirect_uri",
            state="state",
            invite_token="invite_token",
        )
        assert_matches_type(OAuthCallbackResponse, oauth, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    def test_raw_response_callback(self, client: Crosmos) -> None:
        response = client.api.v1.auth.oauth.with_raw_response.callback(
            provider="provider",
            code="code",
            redirect_uri="redirect_uri",
            state="state",
        )

        assert response.is_closed is True
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        oauth = response.parse()
        assert_matches_type(OAuthCallbackResponse, oauth, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    def test_streaming_response_callback(self, client: Crosmos) -> None:
        with client.api.v1.auth.oauth.with_streaming_response.callback(
            provider="provider",
            code="code",
            redirect_uri="redirect_uri",
            state="state",
        ) as response:
            assert not response.is_closed
            assert response.http_request.headers.get("X-Stainless-Lang") == "python"

            oauth = response.parse()
            assert_matches_type(OAuthCallbackResponse, oauth, path=["response"])

        assert cast(Any, response.is_closed) is True

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    def test_path_params_callback(self, client: Crosmos) -> None:
        with pytest.raises(ValueError, match=r"Expected a non-empty value for `provider` but received ''"):
            client.api.v1.auth.oauth.with_raw_response.callback(
                provider="",
                code="code",
                redirect_uri="redirect_uri",
                state="state",
            )

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    def test_method_get_providers(self, client: Crosmos) -> None:
        oauth = client.api.v1.auth.oauth.get_providers()
        assert_matches_type(OAuthGetProvidersResponse, oauth, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    def test_raw_response_get_providers(self, client: Crosmos) -> None:
        response = client.api.v1.auth.oauth.with_raw_response.get_providers()

        assert response.is_closed is True
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        oauth = response.parse()
        assert_matches_type(OAuthGetProvidersResponse, oauth, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    def test_streaming_response_get_providers(self, client: Crosmos) -> None:
        with client.api.v1.auth.oauth.with_streaming_response.get_providers() as response:
            assert not response.is_closed
            assert response.http_request.headers.get("X-Stainless-Lang") == "python"

            oauth = response.parse()
            assert_matches_type(OAuthGetProvidersResponse, oauth, path=["response"])

        assert cast(Any, response.is_closed) is True


class TestAsyncOAuth:
    parametrize = pytest.mark.parametrize(
        "async_client", [False, True, {"http_client": "aiohttp"}], indirect=True, ids=["loose", "strict", "aiohttp"]
    )

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    async def test_method_authorize(self, async_client: AsyncCrosmos) -> None:
        oauth = await async_client.api.v1.auth.oauth.authorize(
            provider="provider",
            redirect_uri="redirect_uri",
        )
        assert_matches_type(OAuthAuthorizeResponse, oauth, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    async def test_raw_response_authorize(self, async_client: AsyncCrosmos) -> None:
        response = await async_client.api.v1.auth.oauth.with_raw_response.authorize(
            provider="provider",
            redirect_uri="redirect_uri",
        )

        assert response.is_closed is True
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        oauth = await response.parse()
        assert_matches_type(OAuthAuthorizeResponse, oauth, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    async def test_streaming_response_authorize(self, async_client: AsyncCrosmos) -> None:
        async with async_client.api.v1.auth.oauth.with_streaming_response.authorize(
            provider="provider",
            redirect_uri="redirect_uri",
        ) as response:
            assert not response.is_closed
            assert response.http_request.headers.get("X-Stainless-Lang") == "python"

            oauth = await response.parse()
            assert_matches_type(OAuthAuthorizeResponse, oauth, path=["response"])

        assert cast(Any, response.is_closed) is True

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    async def test_path_params_authorize(self, async_client: AsyncCrosmos) -> None:
        with pytest.raises(ValueError, match=r"Expected a non-empty value for `provider` but received ''"):
            await async_client.api.v1.auth.oauth.with_raw_response.authorize(
                provider="",
                redirect_uri="redirect_uri",
            )

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    async def test_method_callback(self, async_client: AsyncCrosmos) -> None:
        oauth = await async_client.api.v1.auth.oauth.callback(
            provider="provider",
            code="code",
            redirect_uri="redirect_uri",
            state="state",
        )
        assert_matches_type(OAuthCallbackResponse, oauth, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    async def test_method_callback_with_all_params(self, async_client: AsyncCrosmos) -> None:
        oauth = await async_client.api.v1.auth.oauth.callback(
            provider="provider",
            code="code",
            redirect_uri="redirect_uri",
            state="state",
            invite_token="invite_token",
        )
        assert_matches_type(OAuthCallbackResponse, oauth, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    async def test_raw_response_callback(self, async_client: AsyncCrosmos) -> None:
        response = await async_client.api.v1.auth.oauth.with_raw_response.callback(
            provider="provider",
            code="code",
            redirect_uri="redirect_uri",
            state="state",
        )

        assert response.is_closed is True
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        oauth = await response.parse()
        assert_matches_type(OAuthCallbackResponse, oauth, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    async def test_streaming_response_callback(self, async_client: AsyncCrosmos) -> None:
        async with async_client.api.v1.auth.oauth.with_streaming_response.callback(
            provider="provider",
            code="code",
            redirect_uri="redirect_uri",
            state="state",
        ) as response:
            assert not response.is_closed
            assert response.http_request.headers.get("X-Stainless-Lang") == "python"

            oauth = await response.parse()
            assert_matches_type(OAuthCallbackResponse, oauth, path=["response"])

        assert cast(Any, response.is_closed) is True

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    async def test_path_params_callback(self, async_client: AsyncCrosmos) -> None:
        with pytest.raises(ValueError, match=r"Expected a non-empty value for `provider` but received ''"):
            await async_client.api.v1.auth.oauth.with_raw_response.callback(
                provider="",
                code="code",
                redirect_uri="redirect_uri",
                state="state",
            )

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    async def test_method_get_providers(self, async_client: AsyncCrosmos) -> None:
        oauth = await async_client.api.v1.auth.oauth.get_providers()
        assert_matches_type(OAuthGetProvidersResponse, oauth, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    async def test_raw_response_get_providers(self, async_client: AsyncCrosmos) -> None:
        response = await async_client.api.v1.auth.oauth.with_raw_response.get_providers()

        assert response.is_closed is True
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        oauth = await response.parse()
        assert_matches_type(OAuthGetProvidersResponse, oauth, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    async def test_streaming_response_get_providers(self, async_client: AsyncCrosmos) -> None:
        async with async_client.api.v1.auth.oauth.with_streaming_response.get_providers() as response:
            assert not response.is_closed
            assert response.http_request.headers.get("X-Stainless-Lang") == "python"

            oauth = await response.parse()
            assert_matches_type(OAuthGetProvidersResponse, oauth, path=["response"])

        assert cast(Any, response.is_closed) is True
