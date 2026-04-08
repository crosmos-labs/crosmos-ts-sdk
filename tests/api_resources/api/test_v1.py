# File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

from __future__ import annotations

import os
from typing import Any, cast

import pytest

from crosmos import Crosmos, AsyncCrosmos
from tests.utils import assert_matches_type
from crosmos._utils import parse_date
from crosmos.types.api import V1GetUsageResponse, V1GetJobStatusResponse

base_url = os.environ.get("TEST_API_BASE_URL", "http://127.0.0.1:4010")


class TestV1:
    parametrize = pytest.mark.parametrize("client", [False, True], indirect=True, ids=["loose", "strict"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    def test_method_get_job_status(self, client: Crosmos) -> None:
        v1 = client.api.v1.get_job_status(
            "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
        )
        assert_matches_type(V1GetJobStatusResponse, v1, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    def test_raw_response_get_job_status(self, client: Crosmos) -> None:
        response = client.api.v1.with_raw_response.get_job_status(
            "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
        )

        assert response.is_closed is True
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        v1 = response.parse()
        assert_matches_type(V1GetJobStatusResponse, v1, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    def test_streaming_response_get_job_status(self, client: Crosmos) -> None:
        with client.api.v1.with_streaming_response.get_job_status(
            "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
        ) as response:
            assert not response.is_closed
            assert response.http_request.headers.get("X-Stainless-Lang") == "python"

            v1 = response.parse()
            assert_matches_type(V1GetJobStatusResponse, v1, path=["response"])

        assert cast(Any, response.is_closed) is True

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    def test_path_params_get_job_status(self, client: Crosmos) -> None:
        with pytest.raises(ValueError, match=r"Expected a non-empty value for `job_id` but received ''"):
            client.api.v1.with_raw_response.get_job_status(
                "",
            )

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    def test_method_get_usage(self, client: Crosmos) -> None:
        v1 = client.api.v1.get_usage()
        assert_matches_type(V1GetUsageResponse, v1, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    def test_method_get_usage_with_all_params(self, client: Crosmos) -> None:
        v1 = client.api.v1.get_usage(
            end_date=parse_date("2019-12-27"),
            space_id=0,
            start_date=parse_date("2019-12-27"),
        )
        assert_matches_type(V1GetUsageResponse, v1, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    def test_raw_response_get_usage(self, client: Crosmos) -> None:
        response = client.api.v1.with_raw_response.get_usage()

        assert response.is_closed is True
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        v1 = response.parse()
        assert_matches_type(V1GetUsageResponse, v1, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    def test_streaming_response_get_usage(self, client: Crosmos) -> None:
        with client.api.v1.with_streaming_response.get_usage() as response:
            assert not response.is_closed
            assert response.http_request.headers.get("X-Stainless-Lang") == "python"

            v1 = response.parse()
            assert_matches_type(V1GetUsageResponse, v1, path=["response"])

        assert cast(Any, response.is_closed) is True


class TestAsyncV1:
    parametrize = pytest.mark.parametrize(
        "async_client", [False, True, {"http_client": "aiohttp"}], indirect=True, ids=["loose", "strict", "aiohttp"]
    )

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    async def test_method_get_job_status(self, async_client: AsyncCrosmos) -> None:
        v1 = await async_client.api.v1.get_job_status(
            "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
        )
        assert_matches_type(V1GetJobStatusResponse, v1, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    async def test_raw_response_get_job_status(self, async_client: AsyncCrosmos) -> None:
        response = await async_client.api.v1.with_raw_response.get_job_status(
            "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
        )

        assert response.is_closed is True
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        v1 = await response.parse()
        assert_matches_type(V1GetJobStatusResponse, v1, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    async def test_streaming_response_get_job_status(self, async_client: AsyncCrosmos) -> None:
        async with async_client.api.v1.with_streaming_response.get_job_status(
            "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",
        ) as response:
            assert not response.is_closed
            assert response.http_request.headers.get("X-Stainless-Lang") == "python"

            v1 = await response.parse()
            assert_matches_type(V1GetJobStatusResponse, v1, path=["response"])

        assert cast(Any, response.is_closed) is True

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    async def test_path_params_get_job_status(self, async_client: AsyncCrosmos) -> None:
        with pytest.raises(ValueError, match=r"Expected a non-empty value for `job_id` but received ''"):
            await async_client.api.v1.with_raw_response.get_job_status(
                "",
            )

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    async def test_method_get_usage(self, async_client: AsyncCrosmos) -> None:
        v1 = await async_client.api.v1.get_usage()
        assert_matches_type(V1GetUsageResponse, v1, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    async def test_method_get_usage_with_all_params(self, async_client: AsyncCrosmos) -> None:
        v1 = await async_client.api.v1.get_usage(
            end_date=parse_date("2019-12-27"),
            space_id=0,
            start_date=parse_date("2019-12-27"),
        )
        assert_matches_type(V1GetUsageResponse, v1, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    async def test_raw_response_get_usage(self, async_client: AsyncCrosmos) -> None:
        response = await async_client.api.v1.with_raw_response.get_usage()

        assert response.is_closed is True
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        v1 = await response.parse()
        assert_matches_type(V1GetUsageResponse, v1, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    async def test_streaming_response_get_usage(self, async_client: AsyncCrosmos) -> None:
        async with async_client.api.v1.with_streaming_response.get_usage() as response:
            assert not response.is_closed
            assert response.http_request.headers.get("X-Stainless-Lang") == "python"

            v1 = await response.parse()
            assert_matches_type(V1GetUsageResponse, v1, path=["response"])

        assert cast(Any, response.is_closed) is True
