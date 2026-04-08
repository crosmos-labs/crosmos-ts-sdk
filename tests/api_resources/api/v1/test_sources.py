# File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

from __future__ import annotations

import os
from typing import Any, cast

import pytest

from crosmos import Crosmos, AsyncCrosmos
from tests.utils import assert_matches_type
from crosmos.types.api.v1 import (
    Source,
    SourceListResponse,
    SourceIngestResponse,
)

base_url = os.environ.get("TEST_API_BASE_URL", "http://127.0.0.1:4010")


class TestSources:
    parametrize = pytest.mark.parametrize("client", [False, True], indirect=True, ids=["loose", "strict"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    def test_method_list(self, client: Crosmos) -> None:
        source = client.api.v1.sources.list(
            space_id=0,
        )
        assert_matches_type(SourceListResponse, source, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    def test_method_list_with_all_params(self, client: Crosmos) -> None:
        source = client.api.v1.sources.list(
            space_id=0,
            content_type="content_type",
            extraction_status="extraction_status",
            limit=1,
            offset=0,
            order="asc",
            sort_by="created_at",
        )
        assert_matches_type(SourceListResponse, source, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    def test_raw_response_list(self, client: Crosmos) -> None:
        response = client.api.v1.sources.with_raw_response.list(
            space_id=0,
        )

        assert response.is_closed is True
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        source = response.parse()
        assert_matches_type(SourceListResponse, source, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    def test_streaming_response_list(self, client: Crosmos) -> None:
        with client.api.v1.sources.with_streaming_response.list(
            space_id=0,
        ) as response:
            assert not response.is_closed
            assert response.http_request.headers.get("X-Stainless-Lang") == "python"

            source = response.parse()
            assert_matches_type(SourceListResponse, source, path=["response"])

        assert cast(Any, response.is_closed) is True

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    def test_method_delete(self, client: Crosmos) -> None:
        source = client.api.v1.sources.delete(
            0,
        )
        assert source is None

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    def test_raw_response_delete(self, client: Crosmos) -> None:
        response = client.api.v1.sources.with_raw_response.delete(
            0,
        )

        assert response.is_closed is True
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        source = response.parse()
        assert source is None

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    def test_streaming_response_delete(self, client: Crosmos) -> None:
        with client.api.v1.sources.with_streaming_response.delete(
            0,
        ) as response:
            assert not response.is_closed
            assert response.http_request.headers.get("X-Stainless-Lang") == "python"

            source = response.parse()
            assert source is None

        assert cast(Any, response.is_closed) is True

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    def test_method_get(self, client: Crosmos) -> None:
        source = client.api.v1.sources.get(
            0,
        )
        assert_matches_type(Source, source, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    def test_raw_response_get(self, client: Crosmos) -> None:
        response = client.api.v1.sources.with_raw_response.get(
            0,
        )

        assert response.is_closed is True
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        source = response.parse()
        assert_matches_type(Source, source, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    def test_streaming_response_get(self, client: Crosmos) -> None:
        with client.api.v1.sources.with_streaming_response.get(
            0,
        ) as response:
            assert not response.is_closed
            assert response.http_request.headers.get("X-Stainless-Lang") == "python"

            source = response.parse()
            assert_matches_type(Source, source, path=["response"])

        assert cast(Any, response.is_closed) is True

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    def test_method_ingest(self, client: Crosmos) -> None:
        source = client.api.v1.sources.ingest(
            space_id=0,
        )
        assert_matches_type(SourceIngestResponse, source, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    def test_method_ingest_with_all_params(self, client: Crosmos) -> None:
        source = client.api.v1.sources.ingest(
            space_id=0,
            messages={
                "messages": [
                    {
                        "content": "x",
                        "role": "x",
                    }
                ],
                "lookback": 0,
                "segment_size": 1,
                "session_date": "session_date",
                "session_id": "session_id",
            },
            sources=[
                {
                    "content": "x",
                    "content_type": "content_type",
                    "meta": {"foo": "bar"},
                    "role": "role",
                    "sequence": 0,
                }
            ],
        )
        assert_matches_type(SourceIngestResponse, source, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    def test_raw_response_ingest(self, client: Crosmos) -> None:
        response = client.api.v1.sources.with_raw_response.ingest(
            space_id=0,
        )

        assert response.is_closed is True
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        source = response.parse()
        assert_matches_type(SourceIngestResponse, source, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    def test_streaming_response_ingest(self, client: Crosmos) -> None:
        with client.api.v1.sources.with_streaming_response.ingest(
            space_id=0,
        ) as response:
            assert not response.is_closed
            assert response.http_request.headers.get("X-Stainless-Lang") == "python"

            source = response.parse()
            assert_matches_type(SourceIngestResponse, source, path=["response"])

        assert cast(Any, response.is_closed) is True


class TestAsyncSources:
    parametrize = pytest.mark.parametrize(
        "async_client", [False, True, {"http_client": "aiohttp"}], indirect=True, ids=["loose", "strict", "aiohttp"]
    )

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    async def test_method_list(self, async_client: AsyncCrosmos) -> None:
        source = await async_client.api.v1.sources.list(
            space_id=0,
        )
        assert_matches_type(SourceListResponse, source, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    async def test_method_list_with_all_params(self, async_client: AsyncCrosmos) -> None:
        source = await async_client.api.v1.sources.list(
            space_id=0,
            content_type="content_type",
            extraction_status="extraction_status",
            limit=1,
            offset=0,
            order="asc",
            sort_by="created_at",
        )
        assert_matches_type(SourceListResponse, source, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    async def test_raw_response_list(self, async_client: AsyncCrosmos) -> None:
        response = await async_client.api.v1.sources.with_raw_response.list(
            space_id=0,
        )

        assert response.is_closed is True
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        source = await response.parse()
        assert_matches_type(SourceListResponse, source, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    async def test_streaming_response_list(self, async_client: AsyncCrosmos) -> None:
        async with async_client.api.v1.sources.with_streaming_response.list(
            space_id=0,
        ) as response:
            assert not response.is_closed
            assert response.http_request.headers.get("X-Stainless-Lang") == "python"

            source = await response.parse()
            assert_matches_type(SourceListResponse, source, path=["response"])

        assert cast(Any, response.is_closed) is True

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    async def test_method_delete(self, async_client: AsyncCrosmos) -> None:
        source = await async_client.api.v1.sources.delete(
            0,
        )
        assert source is None

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    async def test_raw_response_delete(self, async_client: AsyncCrosmos) -> None:
        response = await async_client.api.v1.sources.with_raw_response.delete(
            0,
        )

        assert response.is_closed is True
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        source = await response.parse()
        assert source is None

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    async def test_streaming_response_delete(self, async_client: AsyncCrosmos) -> None:
        async with async_client.api.v1.sources.with_streaming_response.delete(
            0,
        ) as response:
            assert not response.is_closed
            assert response.http_request.headers.get("X-Stainless-Lang") == "python"

            source = await response.parse()
            assert source is None

        assert cast(Any, response.is_closed) is True

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    async def test_method_get(self, async_client: AsyncCrosmos) -> None:
        source = await async_client.api.v1.sources.get(
            0,
        )
        assert_matches_type(Source, source, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    async def test_raw_response_get(self, async_client: AsyncCrosmos) -> None:
        response = await async_client.api.v1.sources.with_raw_response.get(
            0,
        )

        assert response.is_closed is True
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        source = await response.parse()
        assert_matches_type(Source, source, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    async def test_streaming_response_get(self, async_client: AsyncCrosmos) -> None:
        async with async_client.api.v1.sources.with_streaming_response.get(
            0,
        ) as response:
            assert not response.is_closed
            assert response.http_request.headers.get("X-Stainless-Lang") == "python"

            source = await response.parse()
            assert_matches_type(Source, source, path=["response"])

        assert cast(Any, response.is_closed) is True

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    async def test_method_ingest(self, async_client: AsyncCrosmos) -> None:
        source = await async_client.api.v1.sources.ingest(
            space_id=0,
        )
        assert_matches_type(SourceIngestResponse, source, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    async def test_method_ingest_with_all_params(self, async_client: AsyncCrosmos) -> None:
        source = await async_client.api.v1.sources.ingest(
            space_id=0,
            messages={
                "messages": [
                    {
                        "content": "x",
                        "role": "x",
                    }
                ],
                "lookback": 0,
                "segment_size": 1,
                "session_date": "session_date",
                "session_id": "session_id",
            },
            sources=[
                {
                    "content": "x",
                    "content_type": "content_type",
                    "meta": {"foo": "bar"},
                    "role": "role",
                    "sequence": 0,
                }
            ],
        )
        assert_matches_type(SourceIngestResponse, source, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    async def test_raw_response_ingest(self, async_client: AsyncCrosmos) -> None:
        response = await async_client.api.v1.sources.with_raw_response.ingest(
            space_id=0,
        )

        assert response.is_closed is True
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        source = await response.parse()
        assert_matches_type(SourceIngestResponse, source, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    async def test_streaming_response_ingest(self, async_client: AsyncCrosmos) -> None:
        async with async_client.api.v1.sources.with_streaming_response.ingest(
            space_id=0,
        ) as response:
            assert not response.is_closed
            assert response.http_request.headers.get("X-Stainless-Lang") == "python"

            source = await response.parse()
            assert_matches_type(SourceIngestResponse, source, path=["response"])

        assert cast(Any, response.is_closed) is True
