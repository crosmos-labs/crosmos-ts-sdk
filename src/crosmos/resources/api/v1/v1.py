# File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

from __future__ import annotations

from typing import Union, Optional
from datetime import date

import httpx

from .demo import (
    DemoResource,
    AsyncDemoResource,
    DemoResourceWithRawResponse,
    AsyncDemoResourceWithRawResponse,
    DemoResourceWithStreamingResponse,
    AsyncDemoResourceWithStreamingResponse,
)
from .admin import (
    AdminResource,
    AsyncAdminResource,
    AdminResourceWithRawResponse,
    AsyncAdminResourceWithRawResponse,
    AdminResourceWithStreamingResponse,
    AsyncAdminResourceWithStreamingResponse,
)
from .search import (
    SearchResource,
    AsyncSearchResource,
    SearchResourceWithRawResponse,
    AsyncSearchResourceWithRawResponse,
    SearchResourceWithStreamingResponse,
    AsyncSearchResourceWithStreamingResponse,
)
from .spaces import (
    SpacesResource,
    AsyncSpacesResource,
    SpacesResourceWithRawResponse,
    AsyncSpacesResourceWithRawResponse,
    SpacesResourceWithStreamingResponse,
    AsyncSpacesResourceWithStreamingResponse,
)
from .sources import (
    SourcesResource,
    AsyncSourcesResource,
    SourcesResourceWithRawResponse,
    AsyncSourcesResourceWithRawResponse,
    SourcesResourceWithStreamingResponse,
    AsyncSourcesResourceWithStreamingResponse,
)
from .memories import (
    MemoriesResource,
    AsyncMemoriesResource,
    MemoriesResourceWithRawResponse,
    AsyncMemoriesResourceWithRawResponse,
    MemoriesResourceWithStreamingResponse,
    AsyncMemoriesResourceWithStreamingResponse,
)
from ...._types import Body, Omit, Query, Headers, NotGiven, omit, not_given
from ...._utils import path_template, maybe_transform, async_maybe_transform
from .auth.auth import (
    AuthResource,
    AsyncAuthResource,
    AuthResourceWithRawResponse,
    AsyncAuthResourceWithRawResponse,
    AuthResourceWithStreamingResponse,
    AsyncAuthResourceWithStreamingResponse,
)
from ...._compat import cached_property
from ...._resource import SyncAPIResource, AsyncAPIResource
from ...._response import (
    to_raw_response_wrapper,
    to_streamed_response_wrapper,
    async_to_raw_response_wrapper,
    async_to_streamed_response_wrapper,
)
from ....types.api import v1_get_usage_params
from ...._base_client import make_request_options
from ....types.api.v1_get_usage_response import V1GetUsageResponse
from ....types.api.v1_get_job_status_response import V1GetJobStatusResponse

__all__ = ["V1Resource", "AsyncV1Resource"]


class V1Resource(SyncAPIResource):
    @cached_property
    def auth(self) -> AuthResource:
        return AuthResource(self._client)

    @cached_property
    def spaces(self) -> SpacesResource:
        return SpacesResource(self._client)

    @cached_property
    def search(self) -> SearchResource:
        return SearchResource(self._client)

    @cached_property
    def sources(self) -> SourcesResource:
        return SourcesResource(self._client)

    @cached_property
    def memories(self) -> MemoriesResource:
        return MemoriesResource(self._client)

    @cached_property
    def demo(self) -> DemoResource:
        return DemoResource(self._client)

    @cached_property
    def admin(self) -> AdminResource:
        return AdminResource(self._client)

    @cached_property
    def with_raw_response(self) -> V1ResourceWithRawResponse:
        """
        This property can be used as a prefix for any HTTP method call to return
        the raw response object instead of the parsed content.

        For more information, see https://www.github.com/crosmos-app/python-sdk#accessing-raw-response-data-eg-headers
        """
        return V1ResourceWithRawResponse(self)

    @cached_property
    def with_streaming_response(self) -> V1ResourceWithStreamingResponse:
        """
        An alternative to `.with_raw_response` that doesn't eagerly read the response body.

        For more information, see https://www.github.com/crosmos-app/python-sdk#with_streaming_response
        """
        return V1ResourceWithStreamingResponse(self)

    def get_job_status(
        self,
        job_id: str,
        *,
        # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
        # The extra values given here take precedence over values defined on the client or passed to this method.
        extra_headers: Headers | None = None,
        extra_query: Query | None = None,
        extra_body: Body | None = None,
        timeout: float | httpx.Timeout | None | NotGiven = not_given,
    ) -> V1GetJobStatusResponse:
        """
        Poll for ingestion job status.

        Args:
          extra_headers: Send extra headers

          extra_query: Add additional query parameters to the request

          extra_body: Add additional JSON properties to the request

          timeout: Override the client-level default timeout for this request, in seconds
        """
        if not job_id:
            raise ValueError(f"Expected a non-empty value for `job_id` but received {job_id!r}")
        return self._get(
            path_template("/api/v1/jobs/{job_id}", job_id=job_id),
            options=make_request_options(
                extra_headers=extra_headers, extra_query=extra_query, extra_body=extra_body, timeout=timeout
            ),
            cast_to=V1GetJobStatusResponse,
        )

    def get_usage(
        self,
        *,
        end_date: Union[str, date, None] | Omit = omit,
        space_id: Optional[int] | Omit = omit,
        start_date: Union[str, date, None] | Omit = omit,
        # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
        # The extra values given here take precedence over values defined on the client or passed to this method.
        extra_headers: Headers | None = None,
        extra_query: Query | None = None,
        extra_body: Body | None = None,
        timeout: float | httpx.Timeout | None | NotGiven = not_given,
    ) -> V1GetUsageResponse:
        """
        Return aggregated usage for the authenticated user.

        Args:
          end_date: End date (defaults to today)

          space_id: Filter by memory space

          start_date: Start date (defaults to 1st of current month)

          extra_headers: Send extra headers

          extra_query: Add additional query parameters to the request

          extra_body: Add additional JSON properties to the request

          timeout: Override the client-level default timeout for this request, in seconds
        """
        return self._get(
            "/api/v1/usage",
            options=make_request_options(
                extra_headers=extra_headers,
                extra_query=extra_query,
                extra_body=extra_body,
                timeout=timeout,
                query=maybe_transform(
                    {
                        "end_date": end_date,
                        "space_id": space_id,
                        "start_date": start_date,
                    },
                    v1_get_usage_params.V1GetUsageParams,
                ),
            ),
            cast_to=V1GetUsageResponse,
        )


class AsyncV1Resource(AsyncAPIResource):
    @cached_property
    def auth(self) -> AsyncAuthResource:
        return AsyncAuthResource(self._client)

    @cached_property
    def spaces(self) -> AsyncSpacesResource:
        return AsyncSpacesResource(self._client)

    @cached_property
    def search(self) -> AsyncSearchResource:
        return AsyncSearchResource(self._client)

    @cached_property
    def sources(self) -> AsyncSourcesResource:
        return AsyncSourcesResource(self._client)

    @cached_property
    def memories(self) -> AsyncMemoriesResource:
        return AsyncMemoriesResource(self._client)

    @cached_property
    def demo(self) -> AsyncDemoResource:
        return AsyncDemoResource(self._client)

    @cached_property
    def admin(self) -> AsyncAdminResource:
        return AsyncAdminResource(self._client)

    @cached_property
    def with_raw_response(self) -> AsyncV1ResourceWithRawResponse:
        """
        This property can be used as a prefix for any HTTP method call to return
        the raw response object instead of the parsed content.

        For more information, see https://www.github.com/crosmos-app/python-sdk#accessing-raw-response-data-eg-headers
        """
        return AsyncV1ResourceWithRawResponse(self)

    @cached_property
    def with_streaming_response(self) -> AsyncV1ResourceWithStreamingResponse:
        """
        An alternative to `.with_raw_response` that doesn't eagerly read the response body.

        For more information, see https://www.github.com/crosmos-app/python-sdk#with_streaming_response
        """
        return AsyncV1ResourceWithStreamingResponse(self)

    async def get_job_status(
        self,
        job_id: str,
        *,
        # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
        # The extra values given here take precedence over values defined on the client or passed to this method.
        extra_headers: Headers | None = None,
        extra_query: Query | None = None,
        extra_body: Body | None = None,
        timeout: float | httpx.Timeout | None | NotGiven = not_given,
    ) -> V1GetJobStatusResponse:
        """
        Poll for ingestion job status.

        Args:
          extra_headers: Send extra headers

          extra_query: Add additional query parameters to the request

          extra_body: Add additional JSON properties to the request

          timeout: Override the client-level default timeout for this request, in seconds
        """
        if not job_id:
            raise ValueError(f"Expected a non-empty value for `job_id` but received {job_id!r}")
        return await self._get(
            path_template("/api/v1/jobs/{job_id}", job_id=job_id),
            options=make_request_options(
                extra_headers=extra_headers, extra_query=extra_query, extra_body=extra_body, timeout=timeout
            ),
            cast_to=V1GetJobStatusResponse,
        )

    async def get_usage(
        self,
        *,
        end_date: Union[str, date, None] | Omit = omit,
        space_id: Optional[int] | Omit = omit,
        start_date: Union[str, date, None] | Omit = omit,
        # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
        # The extra values given here take precedence over values defined on the client or passed to this method.
        extra_headers: Headers | None = None,
        extra_query: Query | None = None,
        extra_body: Body | None = None,
        timeout: float | httpx.Timeout | None | NotGiven = not_given,
    ) -> V1GetUsageResponse:
        """
        Return aggregated usage for the authenticated user.

        Args:
          end_date: End date (defaults to today)

          space_id: Filter by memory space

          start_date: Start date (defaults to 1st of current month)

          extra_headers: Send extra headers

          extra_query: Add additional query parameters to the request

          extra_body: Add additional JSON properties to the request

          timeout: Override the client-level default timeout for this request, in seconds
        """
        return await self._get(
            "/api/v1/usage",
            options=make_request_options(
                extra_headers=extra_headers,
                extra_query=extra_query,
                extra_body=extra_body,
                timeout=timeout,
                query=await async_maybe_transform(
                    {
                        "end_date": end_date,
                        "space_id": space_id,
                        "start_date": start_date,
                    },
                    v1_get_usage_params.V1GetUsageParams,
                ),
            ),
            cast_to=V1GetUsageResponse,
        )


class V1ResourceWithRawResponse:
    def __init__(self, v1: V1Resource) -> None:
        self._v1 = v1

        self.get_job_status = to_raw_response_wrapper(
            v1.get_job_status,
        )
        self.get_usage = to_raw_response_wrapper(
            v1.get_usage,
        )

    @cached_property
    def auth(self) -> AuthResourceWithRawResponse:
        return AuthResourceWithRawResponse(self._v1.auth)

    @cached_property
    def spaces(self) -> SpacesResourceWithRawResponse:
        return SpacesResourceWithRawResponse(self._v1.spaces)

    @cached_property
    def search(self) -> SearchResourceWithRawResponse:
        return SearchResourceWithRawResponse(self._v1.search)

    @cached_property
    def sources(self) -> SourcesResourceWithRawResponse:
        return SourcesResourceWithRawResponse(self._v1.sources)

    @cached_property
    def memories(self) -> MemoriesResourceWithRawResponse:
        return MemoriesResourceWithRawResponse(self._v1.memories)

    @cached_property
    def demo(self) -> DemoResourceWithRawResponse:
        return DemoResourceWithRawResponse(self._v1.demo)

    @cached_property
    def admin(self) -> AdminResourceWithRawResponse:
        return AdminResourceWithRawResponse(self._v1.admin)


class AsyncV1ResourceWithRawResponse:
    def __init__(self, v1: AsyncV1Resource) -> None:
        self._v1 = v1

        self.get_job_status = async_to_raw_response_wrapper(
            v1.get_job_status,
        )
        self.get_usage = async_to_raw_response_wrapper(
            v1.get_usage,
        )

    @cached_property
    def auth(self) -> AsyncAuthResourceWithRawResponse:
        return AsyncAuthResourceWithRawResponse(self._v1.auth)

    @cached_property
    def spaces(self) -> AsyncSpacesResourceWithRawResponse:
        return AsyncSpacesResourceWithRawResponse(self._v1.spaces)

    @cached_property
    def search(self) -> AsyncSearchResourceWithRawResponse:
        return AsyncSearchResourceWithRawResponse(self._v1.search)

    @cached_property
    def sources(self) -> AsyncSourcesResourceWithRawResponse:
        return AsyncSourcesResourceWithRawResponse(self._v1.sources)

    @cached_property
    def memories(self) -> AsyncMemoriesResourceWithRawResponse:
        return AsyncMemoriesResourceWithRawResponse(self._v1.memories)

    @cached_property
    def demo(self) -> AsyncDemoResourceWithRawResponse:
        return AsyncDemoResourceWithRawResponse(self._v1.demo)

    @cached_property
    def admin(self) -> AsyncAdminResourceWithRawResponse:
        return AsyncAdminResourceWithRawResponse(self._v1.admin)


class V1ResourceWithStreamingResponse:
    def __init__(self, v1: V1Resource) -> None:
        self._v1 = v1

        self.get_job_status = to_streamed_response_wrapper(
            v1.get_job_status,
        )
        self.get_usage = to_streamed_response_wrapper(
            v1.get_usage,
        )

    @cached_property
    def auth(self) -> AuthResourceWithStreamingResponse:
        return AuthResourceWithStreamingResponse(self._v1.auth)

    @cached_property
    def spaces(self) -> SpacesResourceWithStreamingResponse:
        return SpacesResourceWithStreamingResponse(self._v1.spaces)

    @cached_property
    def search(self) -> SearchResourceWithStreamingResponse:
        return SearchResourceWithStreamingResponse(self._v1.search)

    @cached_property
    def sources(self) -> SourcesResourceWithStreamingResponse:
        return SourcesResourceWithStreamingResponse(self._v1.sources)

    @cached_property
    def memories(self) -> MemoriesResourceWithStreamingResponse:
        return MemoriesResourceWithStreamingResponse(self._v1.memories)

    @cached_property
    def demo(self) -> DemoResourceWithStreamingResponse:
        return DemoResourceWithStreamingResponse(self._v1.demo)

    @cached_property
    def admin(self) -> AdminResourceWithStreamingResponse:
        return AdminResourceWithStreamingResponse(self._v1.admin)


class AsyncV1ResourceWithStreamingResponse:
    def __init__(self, v1: AsyncV1Resource) -> None:
        self._v1 = v1

        self.get_job_status = async_to_streamed_response_wrapper(
            v1.get_job_status,
        )
        self.get_usage = async_to_streamed_response_wrapper(
            v1.get_usage,
        )

    @cached_property
    def auth(self) -> AsyncAuthResourceWithStreamingResponse:
        return AsyncAuthResourceWithStreamingResponse(self._v1.auth)

    @cached_property
    def spaces(self) -> AsyncSpacesResourceWithStreamingResponse:
        return AsyncSpacesResourceWithStreamingResponse(self._v1.spaces)

    @cached_property
    def search(self) -> AsyncSearchResourceWithStreamingResponse:
        return AsyncSearchResourceWithStreamingResponse(self._v1.search)

    @cached_property
    def sources(self) -> AsyncSourcesResourceWithStreamingResponse:
        return AsyncSourcesResourceWithStreamingResponse(self._v1.sources)

    @cached_property
    def memories(self) -> AsyncMemoriesResourceWithStreamingResponse:
        return AsyncMemoriesResourceWithStreamingResponse(self._v1.memories)

    @cached_property
    def demo(self) -> AsyncDemoResourceWithStreamingResponse:
        return AsyncDemoResourceWithStreamingResponse(self._v1.demo)

    @cached_property
    def admin(self) -> AsyncAdminResourceWithStreamingResponse:
        return AsyncAdminResourceWithStreamingResponse(self._v1.admin)
