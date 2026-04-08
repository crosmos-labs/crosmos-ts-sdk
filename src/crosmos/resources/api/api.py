# File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

from __future__ import annotations

from ... import _resource
from .v1.v1 import (
    V1Resource,
    AsyncV1Resource,
    V1ResourceWithRawResponse,
    AsyncV1ResourceWithRawResponse,
    V1ResourceWithStreamingResponse,
    AsyncV1ResourceWithStreamingResponse,
)
from ..._compat import cached_property

__all__ = ["APIResource", "AsyncAPIResource"]


class APIResource(_resource.SyncAPIResource):
    @cached_property
    def v1(self) -> V1Resource:
        return V1Resource(self._client)

    @cached_property
    def with_raw_response(self) -> APIResourceWithRawResponse:
        """
        This property can be used as a prefix for any HTTP method call to return
        the raw response object instead of the parsed content.

        For more information, see https://www.github.com/stainless-sdks/crosmos-python#accessing-raw-response-data-eg-headers
        """
        return APIResourceWithRawResponse(self)

    @cached_property
    def with_streaming_response(self) -> APIResourceWithStreamingResponse:
        """
        An alternative to `.with_raw_response` that doesn't eagerly read the response body.

        For more information, see https://www.github.com/stainless-sdks/crosmos-python#with_streaming_response
        """
        return APIResourceWithStreamingResponse(self)


class AsyncAPIResource(_resource.AsyncAPIResource):
    @cached_property
    def v1(self) -> AsyncV1Resource:
        return AsyncV1Resource(self._client)

    @cached_property
    def with_raw_response(self) -> AsyncAPIResourceWithRawResponse:
        """
        This property can be used as a prefix for any HTTP method call to return
        the raw response object instead of the parsed content.

        For more information, see https://www.github.com/stainless-sdks/crosmos-python#accessing-raw-response-data-eg-headers
        """
        return AsyncAPIResourceWithRawResponse(self)

    @cached_property
    def with_streaming_response(self) -> AsyncAPIResourceWithStreamingResponse:
        """
        An alternative to `.with_raw_response` that doesn't eagerly read the response body.

        For more information, see https://www.github.com/stainless-sdks/crosmos-python#with_streaming_response
        """
        return AsyncAPIResourceWithStreamingResponse(self)


class APIResourceWithRawResponse:
    def __init__(self, api: APIResource) -> None:
        self._api = api

    @cached_property
    def v1(self) -> V1ResourceWithRawResponse:
        return V1ResourceWithRawResponse(self._api.v1)


class AsyncAPIResourceWithRawResponse:
    def __init__(self, api: AsyncAPIResource) -> None:
        self._api = api

    @cached_property
    def v1(self) -> AsyncV1ResourceWithRawResponse:
        return AsyncV1ResourceWithRawResponse(self._api.v1)


class APIResourceWithStreamingResponse:
    def __init__(self, api: APIResource) -> None:
        self._api = api

    @cached_property
    def v1(self) -> V1ResourceWithStreamingResponse:
        return V1ResourceWithStreamingResponse(self._api.v1)


class AsyncAPIResourceWithStreamingResponse:
    def __init__(self, api: AsyncAPIResource) -> None:
        self._api = api

    @cached_property
    def v1(self) -> AsyncV1ResourceWithStreamingResponse:
        return AsyncV1ResourceWithStreamingResponse(self._api.v1)
