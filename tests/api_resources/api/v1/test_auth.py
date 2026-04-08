# File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

from __future__ import annotations

import os
from typing import Any, cast

import pytest

from crosmos import Crosmos, AsyncCrosmos
from tests.utils import assert_matches_type
from crosmos.types.api.v1 import AuthGetMeResponse, AuthRefreshResponse

base_url = os.environ.get("TEST_API_BASE_URL", "http://127.0.0.1:4010")


class TestAuth:
    parametrize = pytest.mark.parametrize("client", [False, True], indirect=True, ids=["loose", "strict"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    def test_method_get_me(self, client: Crosmos) -> None:
        auth = client.api.v1.auth.get_me()
        assert_matches_type(AuthGetMeResponse, auth, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    def test_raw_response_get_me(self, client: Crosmos) -> None:
        response = client.api.v1.auth.with_raw_response.get_me()

        assert response.is_closed is True
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        auth = response.parse()
        assert_matches_type(AuthGetMeResponse, auth, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    def test_streaming_response_get_me(self, client: Crosmos) -> None:
        with client.api.v1.auth.with_streaming_response.get_me() as response:
            assert not response.is_closed
            assert response.http_request.headers.get("X-Stainless-Lang") == "python"

            auth = response.parse()
            assert_matches_type(AuthGetMeResponse, auth, path=["response"])

        assert cast(Any, response.is_closed) is True

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    def test_method_refresh(self, client: Crosmos) -> None:
        auth = client.api.v1.auth.refresh(
            refresh_token="refresh_token",
        )
        assert_matches_type(AuthRefreshResponse, auth, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    def test_raw_response_refresh(self, client: Crosmos) -> None:
        response = client.api.v1.auth.with_raw_response.refresh(
            refresh_token="refresh_token",
        )

        assert response.is_closed is True
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        auth = response.parse()
        assert_matches_type(AuthRefreshResponse, auth, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    def test_streaming_response_refresh(self, client: Crosmos) -> None:
        with client.api.v1.auth.with_streaming_response.refresh(
            refresh_token="refresh_token",
        ) as response:
            assert not response.is_closed
            assert response.http_request.headers.get("X-Stainless-Lang") == "python"

            auth = response.parse()
            assert_matches_type(AuthRefreshResponse, auth, path=["response"])

        assert cast(Any, response.is_closed) is True


class TestAsyncAuth:
    parametrize = pytest.mark.parametrize(
        "async_client", [False, True, {"http_client": "aiohttp"}], indirect=True, ids=["loose", "strict", "aiohttp"]
    )

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    async def test_method_get_me(self, async_client: AsyncCrosmos) -> None:
        auth = await async_client.api.v1.auth.get_me()
        assert_matches_type(AuthGetMeResponse, auth, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    async def test_raw_response_get_me(self, async_client: AsyncCrosmos) -> None:
        response = await async_client.api.v1.auth.with_raw_response.get_me()

        assert response.is_closed is True
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        auth = await response.parse()
        assert_matches_type(AuthGetMeResponse, auth, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    async def test_streaming_response_get_me(self, async_client: AsyncCrosmos) -> None:
        async with async_client.api.v1.auth.with_streaming_response.get_me() as response:
            assert not response.is_closed
            assert response.http_request.headers.get("X-Stainless-Lang") == "python"

            auth = await response.parse()
            assert_matches_type(AuthGetMeResponse, auth, path=["response"])

        assert cast(Any, response.is_closed) is True

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    async def test_method_refresh(self, async_client: AsyncCrosmos) -> None:
        auth = await async_client.api.v1.auth.refresh(
            refresh_token="refresh_token",
        )
        assert_matches_type(AuthRefreshResponse, auth, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    async def test_raw_response_refresh(self, async_client: AsyncCrosmos) -> None:
        response = await async_client.api.v1.auth.with_raw_response.refresh(
            refresh_token="refresh_token",
        )

        assert response.is_closed is True
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        auth = await response.parse()
        assert_matches_type(AuthRefreshResponse, auth, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    async def test_streaming_response_refresh(self, async_client: AsyncCrosmos) -> None:
        async with async_client.api.v1.auth.with_streaming_response.refresh(
            refresh_token="refresh_token",
        ) as response:
            assert not response.is_closed
            assert response.http_request.headers.get("X-Stainless-Lang") == "python"

            auth = await response.parse()
            assert_matches_type(AuthRefreshResponse, auth, path=["response"])

        assert cast(Any, response.is_closed) is True
