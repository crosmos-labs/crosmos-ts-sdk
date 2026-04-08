# File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

from __future__ import annotations

import os
from typing import Any, cast

import pytest

from crosmos import Crosmos, AsyncCrosmos
from tests.utils import assert_matches_type
from crosmos.types.api.v1 import Search

base_url = os.environ.get("TEST_API_BASE_URL", "http://127.0.0.1:4010")


class TestSearch:
    parametrize = pytest.mark.parametrize("client", [False, True], indirect=True, ids=["loose", "strict"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    def test_method_get(self, client: Crosmos) -> None:
        search = client.api.v1.search.get(
            q="x",
            space_id=0,
        )
        assert_matches_type(Search, search, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    def test_raw_response_get(self, client: Crosmos) -> None:
        response = client.api.v1.search.with_raw_response.get(
            q="x",
            space_id=0,
        )

        assert response.is_closed is True
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        search = response.parse()
        assert_matches_type(Search, search, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    def test_streaming_response_get(self, client: Crosmos) -> None:
        with client.api.v1.search.with_streaming_response.get(
            q="x",
            space_id=0,
        ) as response:
            assert not response.is_closed
            assert response.http_request.headers.get("X-Stainless-Lang") == "python"

            search = response.parse()
            assert_matches_type(Search, search, path=["response"])

        assert cast(Any, response.is_closed) is True

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    def test_method_perform(self, client: Crosmos) -> None:
        search = client.api.v1.search.perform(
            query="x",
            space_id=0,
        )
        assert_matches_type(Search, search, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    def test_raw_response_perform(self, client: Crosmos) -> None:
        response = client.api.v1.search.with_raw_response.perform(
            query="x",
            space_id=0,
        )

        assert response.is_closed is True
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        search = response.parse()
        assert_matches_type(Search, search, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    def test_streaming_response_perform(self, client: Crosmos) -> None:
        with client.api.v1.search.with_streaming_response.perform(
            query="x",
            space_id=0,
        ) as response:
            assert not response.is_closed
            assert response.http_request.headers.get("X-Stainless-Lang") == "python"

            search = response.parse()
            assert_matches_type(Search, search, path=["response"])

        assert cast(Any, response.is_closed) is True


class TestAsyncSearch:
    parametrize = pytest.mark.parametrize(
        "async_client", [False, True, {"http_client": "aiohttp"}], indirect=True, ids=["loose", "strict", "aiohttp"]
    )

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    async def test_method_get(self, async_client: AsyncCrosmos) -> None:
        search = await async_client.api.v1.search.get(
            q="x",
            space_id=0,
        )
        assert_matches_type(Search, search, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    async def test_raw_response_get(self, async_client: AsyncCrosmos) -> None:
        response = await async_client.api.v1.search.with_raw_response.get(
            q="x",
            space_id=0,
        )

        assert response.is_closed is True
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        search = await response.parse()
        assert_matches_type(Search, search, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    async def test_streaming_response_get(self, async_client: AsyncCrosmos) -> None:
        async with async_client.api.v1.search.with_streaming_response.get(
            q="x",
            space_id=0,
        ) as response:
            assert not response.is_closed
            assert response.http_request.headers.get("X-Stainless-Lang") == "python"

            search = await response.parse()
            assert_matches_type(Search, search, path=["response"])

        assert cast(Any, response.is_closed) is True

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    async def test_method_perform(self, async_client: AsyncCrosmos) -> None:
        search = await async_client.api.v1.search.perform(
            query="x",
            space_id=0,
        )
        assert_matches_type(Search, search, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    async def test_raw_response_perform(self, async_client: AsyncCrosmos) -> None:
        response = await async_client.api.v1.search.with_raw_response.perform(
            query="x",
            space_id=0,
        )

        assert response.is_closed is True
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        search = await response.parse()
        assert_matches_type(Search, search, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    async def test_streaming_response_perform(self, async_client: AsyncCrosmos) -> None:
        async with async_client.api.v1.search.with_streaming_response.perform(
            query="x",
            space_id=0,
        ) as response:
            assert not response.is_closed
            assert response.http_request.headers.get("X-Stainless-Lang") == "python"

            search = await response.parse()
            assert_matches_type(Search, search, path=["response"])

        assert cast(Any, response.is_closed) is True
