# File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

from __future__ import annotations

import os
from typing import Any, cast

import pytest

from crosmos import Crosmos, AsyncCrosmos
from tests.utils import assert_matches_type
from crosmos.types.api.v1 import (
    AdminSendInviteResponse,
    AdminGetDemoRequestsResponse,
)

base_url = os.environ.get("TEST_API_BASE_URL", "http://127.0.0.1:4010")


class TestAdmin:
    parametrize = pytest.mark.parametrize("client", [False, True], indirect=True, ids=["loose", "strict"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    def test_method_get_demo_requests(self, client: Crosmos) -> None:
        admin = client.api.v1.admin.get_demo_requests()
        assert_matches_type(AdminGetDemoRequestsResponse, admin, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    def test_method_get_demo_requests_with_all_params(self, client: Crosmos) -> None:
        admin = client.api.v1.admin.get_demo_requests(
            status_filter="status_filter",
        )
        assert_matches_type(AdminGetDemoRequestsResponse, admin, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    def test_raw_response_get_demo_requests(self, client: Crosmos) -> None:
        response = client.api.v1.admin.with_raw_response.get_demo_requests()

        assert response.is_closed is True
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        admin = response.parse()
        assert_matches_type(AdminGetDemoRequestsResponse, admin, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    def test_streaming_response_get_demo_requests(self, client: Crosmos) -> None:
        with client.api.v1.admin.with_streaming_response.get_demo_requests() as response:
            assert not response.is_closed
            assert response.http_request.headers.get("X-Stainless-Lang") == "python"

            admin = response.parse()
            assert_matches_type(AdminGetDemoRequestsResponse, admin, path=["response"])

        assert cast(Any, response.is_closed) is True

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    def test_method_send_invite(self, client: Crosmos) -> None:
        admin = client.api.v1.admin.send_invite(
            email="dev@stainless.com",
        )
        assert_matches_type(AdminSendInviteResponse, admin, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    def test_raw_response_send_invite(self, client: Crosmos) -> None:
        response = client.api.v1.admin.with_raw_response.send_invite(
            email="dev@stainless.com",
        )

        assert response.is_closed is True
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        admin = response.parse()
        assert_matches_type(AdminSendInviteResponse, admin, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    def test_streaming_response_send_invite(self, client: Crosmos) -> None:
        with client.api.v1.admin.with_streaming_response.send_invite(
            email="dev@stainless.com",
        ) as response:
            assert not response.is_closed
            assert response.http_request.headers.get("X-Stainless-Lang") == "python"

            admin = response.parse()
            assert_matches_type(AdminSendInviteResponse, admin, path=["response"])

        assert cast(Any, response.is_closed) is True


class TestAsyncAdmin:
    parametrize = pytest.mark.parametrize(
        "async_client", [False, True, {"http_client": "aiohttp"}], indirect=True, ids=["loose", "strict", "aiohttp"]
    )

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    async def test_method_get_demo_requests(self, async_client: AsyncCrosmos) -> None:
        admin = await async_client.api.v1.admin.get_demo_requests()
        assert_matches_type(AdminGetDemoRequestsResponse, admin, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    async def test_method_get_demo_requests_with_all_params(self, async_client: AsyncCrosmos) -> None:
        admin = await async_client.api.v1.admin.get_demo_requests(
            status_filter="status_filter",
        )
        assert_matches_type(AdminGetDemoRequestsResponse, admin, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    async def test_raw_response_get_demo_requests(self, async_client: AsyncCrosmos) -> None:
        response = await async_client.api.v1.admin.with_raw_response.get_demo_requests()

        assert response.is_closed is True
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        admin = await response.parse()
        assert_matches_type(AdminGetDemoRequestsResponse, admin, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    async def test_streaming_response_get_demo_requests(self, async_client: AsyncCrosmos) -> None:
        async with async_client.api.v1.admin.with_streaming_response.get_demo_requests() as response:
            assert not response.is_closed
            assert response.http_request.headers.get("X-Stainless-Lang") == "python"

            admin = await response.parse()
            assert_matches_type(AdminGetDemoRequestsResponse, admin, path=["response"])

        assert cast(Any, response.is_closed) is True

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    async def test_method_send_invite(self, async_client: AsyncCrosmos) -> None:
        admin = await async_client.api.v1.admin.send_invite(
            email="dev@stainless.com",
        )
        assert_matches_type(AdminSendInviteResponse, admin, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    async def test_raw_response_send_invite(self, async_client: AsyncCrosmos) -> None:
        response = await async_client.api.v1.admin.with_raw_response.send_invite(
            email="dev@stainless.com",
        )

        assert response.is_closed is True
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        admin = await response.parse()
        assert_matches_type(AdminSendInviteResponse, admin, path=["response"])

    @pytest.mark.skip(reason="Mock server tests are disabled")
    @parametrize
    async def test_streaming_response_send_invite(self, async_client: AsyncCrosmos) -> None:
        async with async_client.api.v1.admin.with_streaming_response.send_invite(
            email="dev@stainless.com",
        ) as response:
            assert not response.is_closed
            assert response.http_request.headers.get("X-Stainless-Lang") == "python"

            admin = await response.parse()
            assert_matches_type(AdminSendInviteResponse, admin, path=["response"])

        assert cast(Any, response.is_closed) is True
