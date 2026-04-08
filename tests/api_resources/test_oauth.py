# File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

from __future__ import annotations

import os
from typing import Any, cast

import pytest

from crosmos import Crosmos, AsyncCrosmos
from tests.utils import assert_matches_type
from crosmos.types import OAuthRegisterResponse

base_url = os.environ.get("TEST_API_BASE_URL", "http://127.0.0.1:4010")


class TestOAuth:
    parametrize = pytest.mark.parametrize("client", [False, True], indirect=True, ids=["loose", "strict"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    def test_method_register(self, client: Crosmos) -> None:
        oauth = client.oauth.register()
        assert_matches_type(OAuthRegisterResponse, oauth, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    def test_method_register_with_all_params(self, client: Crosmos) -> None:
        oauth = client.oauth.register(
            client_name="client_name",
            grant_types=["string"],
            redirect_uris=["string"],
            response_types=["string"],
            token_endpoint_auth_method="token_endpoint_auth_method",
        )
        assert_matches_type(OAuthRegisterResponse, oauth, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    def test_raw_response_register(self, client: Crosmos) -> None:
        response = client.oauth.with_raw_response.register()

        assert response.is_closed is True
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        oauth = response.parse()
        assert_matches_type(OAuthRegisterResponse, oauth, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    def test_streaming_response_register(self, client: Crosmos) -> None:
        with client.oauth.with_streaming_response.register() as response:
            assert not response.is_closed
            assert response.http_request.headers.get("X-Stainless-Lang") == "python"

            oauth = response.parse()
            assert_matches_type(OAuthRegisterResponse, oauth, path=["response"])

        assert cast(Any, response.is_closed) is True


class TestAsyncOAuth:
    parametrize = pytest.mark.parametrize(
        "async_client", [False, True, {"http_client": "aiohttp"}], indirect=True, ids=["loose", "strict", "aiohttp"]
    )

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    async def test_method_register(self, async_client: AsyncCrosmos) -> None:
        oauth = await async_client.oauth.register()
        assert_matches_type(OAuthRegisterResponse, oauth, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    async def test_method_register_with_all_params(self, async_client: AsyncCrosmos) -> None:
        oauth = await async_client.oauth.register(
            client_name="client_name",
            grant_types=["string"],
            redirect_uris=["string"],
            response_types=["string"],
            token_endpoint_auth_method="token_endpoint_auth_method",
        )
        assert_matches_type(OAuthRegisterResponse, oauth, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    async def test_raw_response_register(self, async_client: AsyncCrosmos) -> None:
        response = await async_client.oauth.with_raw_response.register()

        assert response.is_closed is True
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        oauth = await response.parse()
        assert_matches_type(OAuthRegisterResponse, oauth, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    async def test_streaming_response_register(self, async_client: AsyncCrosmos) -> None:
        async with async_client.oauth.with_streaming_response.register() as response:
            assert not response.is_closed
            assert response.http_request.headers.get("X-Stainless-Lang") == "python"

            oauth = await response.parse()
            assert_matches_type(OAuthRegisterResponse, oauth, path=["response"])

        assert cast(Any, response.is_closed) is True
