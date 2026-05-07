# File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

from __future__ import annotations

import os
from typing import TYPE_CHECKING, Any, Mapping
from typing_extensions import Self, override

import httpx

from . import _exceptions
from ._qs import Querystring
from ._types import (
    Omit,
    Timeout,
    NotGiven,
    Transport,
    ProxiesTypes,
    RequestOptions,
    not_given,
)
from ._utils import (
    is_given,
    is_mapping_t,
    get_async_library,
)
from ._compat import cached_property
from ._models import SecurityOptions
from ._version import __version__
from ._streaming import Stream as Stream, AsyncStream as AsyncStream
from ._exceptions import CrosmosError, APIStatusError
from ._base_client import (
    DEFAULT_MAX_RETRIES,
    SyncAPIClient,
    AsyncAPIClient,
)

if TYPE_CHECKING:
    from .resources import jobs, usage, health, search, spaces, sources, memories
    from .resources.jobs import JobsResource, AsyncJobsResource
    from .resources.usage import UsageResource, AsyncUsageResource
    from .resources.health import HealthResource, AsyncHealthResource
    from .resources.search import SearchResource, AsyncSearchResource
    from .resources.spaces import SpacesResource, AsyncSpacesResource
    from .resources.sources import SourcesResource, AsyncSourcesResource
    from .resources.memories import MemoriesResource, AsyncMemoriesResource

__all__ = ["Timeout", "Transport", "ProxiesTypes", "RequestOptions", "Crosmos", "AsyncCrosmos", "Client", "AsyncClient"]


class Crosmos(SyncAPIClient):
    # client options
    api_key: str

    def __init__(
        self,
        *,
        api_key: str | None = None,
        base_url: str | httpx.URL | None = None,
        timeout: float | Timeout | None | NotGiven = not_given,
        max_retries: int = DEFAULT_MAX_RETRIES,
        default_headers: Mapping[str, str] | None = None,
        default_query: Mapping[str, object] | None = None,
        # Configure a custom httpx client.
        # We provide a `DefaultHttpxClient` class that you can pass to retain the default values we use for `limits`, `timeout` & `follow_redirects`.
        # See the [httpx documentation](https://www.python-httpx.org/api/#client) for more details.
        http_client: httpx.Client | None = None,
        # Enable or disable schema validation for data returned by the API.
        # When enabled an error APIResponseValidationError is raised
        # if the API responds with invalid data for the expected schema.
        #
        # This parameter may be removed or changed in the future.
        # If you rely on this feature, please open a GitHub issue
        # outlining your use-case to help us decide if it should be
        # part of our public interface in the future.
        _strict_response_validation: bool = False,
    ) -> None:
        """Construct a new synchronous Crosmos client instance.

        This automatically infers the `api_key` argument from the `CROSMOS_API_KEY` environment variable if it is not provided.
        """
        if api_key is None:
            api_key = os.environ.get("CROSMOS_API_KEY")
        if api_key is None:
            raise CrosmosError(
                "The api_key client option must be set either by passing api_key to the client or by setting the CROSMOS_API_KEY environment variable"
            )
        self.api_key = api_key

        if base_url is None:
            base_url = os.environ.get("CROSMOS_BASE_URL")
        if base_url is None:
            base_url = f"https://api.crosmos.dev"

        custom_headers_env = os.environ.get("CROSMOS_CUSTOM_HEADERS")
        if custom_headers_env is not None:
            parsed: dict[str, str] = {}
            for line in custom_headers_env.split("\n"):
                colon = line.find(":")
                if colon >= 0:
                    parsed[line[:colon].strip()] = line[colon + 1 :].strip()
            default_headers = {**parsed, **(default_headers if is_mapping_t(default_headers) else {})}

        super().__init__(
            version=__version__,
            base_url=base_url,
            max_retries=max_retries,
            timeout=timeout,
            http_client=http_client,
            custom_headers=default_headers,
            custom_query=default_query,
            _strict_response_validation=_strict_response_validation,
        )

    @cached_property
    def spaces(self) -> SpacesResource:
        from .resources.spaces import SpacesResource

        return SpacesResource(self)

    @cached_property
    def search(self) -> SearchResource:
        from .resources.search import SearchResource

        return SearchResource(self)

    @cached_property
    def sources(self) -> SourcesResource:
        from .resources.sources import SourcesResource

        return SourcesResource(self)

    @cached_property
    def memories(self) -> MemoriesResource:
        from .resources.memories import MemoriesResource

        return MemoriesResource(self)

    @cached_property
    def usage(self) -> UsageResource:
        from .resources.usage import UsageResource

        return UsageResource(self)

    @cached_property
    def jobs(self) -> JobsResource:
        from .resources.jobs import JobsResource

        return JobsResource(self)

    @cached_property
    def health(self) -> HealthResource:
        from .resources.health import HealthResource

        return HealthResource(self)

    @cached_property
    def with_raw_response(self) -> CrosmosWithRawResponse:
        return CrosmosWithRawResponse(self)

    @cached_property
    def with_streaming_response(self) -> CrosmosWithStreamedResponse:
        return CrosmosWithStreamedResponse(self)

    @property
    @override
    def qs(self) -> Querystring:
        return Querystring(array_format="comma")

    @override
    def _auth_headers(self, security: SecurityOptions) -> dict[str, str]:
        return {
            **(self._http_bearer if security.get("http_bearer", False) else {}),
        }

    @property
    def _http_bearer(self) -> dict[str, str]:
        api_key = self.api_key
        return {"Authorization": f"Bearer {api_key}"}

    @property
    @override
    def default_headers(self) -> dict[str, str | Omit]:
        return {
            **super().default_headers,
            "X-Stainless-Async": "false",
            **self._custom_headers,
        }

    def copy(
        self,
        *,
        api_key: str | None = None,
        base_url: str | httpx.URL | None = None,
        timeout: float | Timeout | None | NotGiven = not_given,
        http_client: httpx.Client | None = None,
        max_retries: int | NotGiven = not_given,
        default_headers: Mapping[str, str] | None = None,
        set_default_headers: Mapping[str, str] | None = None,
        default_query: Mapping[str, object] | None = None,
        set_default_query: Mapping[str, object] | None = None,
        _extra_kwargs: Mapping[str, Any] = {},
    ) -> Self:
        """
        Create a new client instance re-using the same options given to the current client with optional overriding.
        """
        if default_headers is not None and set_default_headers is not None:
            raise ValueError("The `default_headers` and `set_default_headers` arguments are mutually exclusive")

        if default_query is not None and set_default_query is not None:
            raise ValueError("The `default_query` and `set_default_query` arguments are mutually exclusive")

        headers = self._custom_headers
        if default_headers is not None:
            headers = {**headers, **default_headers}
        elif set_default_headers is not None:
            headers = set_default_headers

        params = self._custom_query
        if default_query is not None:
            params = {**params, **default_query}
        elif set_default_query is not None:
            params = set_default_query

        http_client = http_client or self._client
        return self.__class__(
            api_key=api_key or self.api_key,
            base_url=base_url or self.base_url,
            timeout=self.timeout if isinstance(timeout, NotGiven) else timeout,
            http_client=http_client,
            max_retries=max_retries if is_given(max_retries) else self.max_retries,
            default_headers=headers,
            default_query=params,
            **_extra_kwargs,
        )

    # Alias for `copy` for nicer inline usage, e.g.
    # client.with_options(timeout=10).foo.create(...)
    with_options = copy

    @override
    def _make_status_error(
        self,
        err_msg: str,
        *,
        body: object,
        response: httpx.Response,
    ) -> APIStatusError:
        if response.status_code == 400:
            return _exceptions.BadRequestError(err_msg, response=response, body=body)

        if response.status_code == 401:
            return _exceptions.AuthenticationError(err_msg, response=response, body=body)

        if response.status_code == 403:
            return _exceptions.PermissionDeniedError(err_msg, response=response, body=body)

        if response.status_code == 404:
            return _exceptions.NotFoundError(err_msg, response=response, body=body)

        if response.status_code == 409:
            return _exceptions.ConflictError(err_msg, response=response, body=body)

        if response.status_code == 422:
            return _exceptions.UnprocessableEntityError(err_msg, response=response, body=body)

        if response.status_code == 429:
            return _exceptions.RateLimitError(err_msg, response=response, body=body)

        if response.status_code >= 500:
            return _exceptions.InternalServerError(err_msg, response=response, body=body)
        return APIStatusError(err_msg, response=response, body=body)


class AsyncCrosmos(AsyncAPIClient):
    # client options
    api_key: str

    def __init__(
        self,
        *,
        api_key: str | None = None,
        base_url: str | httpx.URL | None = None,
        timeout: float | Timeout | None | NotGiven = not_given,
        max_retries: int = DEFAULT_MAX_RETRIES,
        default_headers: Mapping[str, str] | None = None,
        default_query: Mapping[str, object] | None = None,
        # Configure a custom httpx client.
        # We provide a `DefaultAsyncHttpxClient` class that you can pass to retain the default values we use for `limits`, `timeout` & `follow_redirects`.
        # See the [httpx documentation](https://www.python-httpx.org/api/#asyncclient) for more details.
        http_client: httpx.AsyncClient | None = None,
        # Enable or disable schema validation for data returned by the API.
        # When enabled an error APIResponseValidationError is raised
        # if the API responds with invalid data for the expected schema.
        #
        # This parameter may be removed or changed in the future.
        # If you rely on this feature, please open a GitHub issue
        # outlining your use-case to help us decide if it should be
        # part of our public interface in the future.
        _strict_response_validation: bool = False,
    ) -> None:
        """Construct a new async AsyncCrosmos client instance.

        This automatically infers the `api_key` argument from the `CROSMOS_API_KEY` environment variable if it is not provided.
        """
        if api_key is None:
            api_key = os.environ.get("CROSMOS_API_KEY")
        if api_key is None:
            raise CrosmosError(
                "The api_key client option must be set either by passing api_key to the client or by setting the CROSMOS_API_KEY environment variable"
            )
        self.api_key = api_key

        if base_url is None:
            base_url = os.environ.get("CROSMOS_BASE_URL")
        if base_url is None:
            base_url = f"https://api.crosmos.dev"

        custom_headers_env = os.environ.get("CROSMOS_CUSTOM_HEADERS")
        if custom_headers_env is not None:
            parsed: dict[str, str] = {}
            for line in custom_headers_env.split("\n"):
                colon = line.find(":")
                if colon >= 0:
                    parsed[line[:colon].strip()] = line[colon + 1 :].strip()
            default_headers = {**parsed, **(default_headers if is_mapping_t(default_headers) else {})}

        super().__init__(
            version=__version__,
            base_url=base_url,
            max_retries=max_retries,
            timeout=timeout,
            http_client=http_client,
            custom_headers=default_headers,
            custom_query=default_query,
            _strict_response_validation=_strict_response_validation,
        )

    @cached_property
    def spaces(self) -> AsyncSpacesResource:
        from .resources.spaces import AsyncSpacesResource

        return AsyncSpacesResource(self)

    @cached_property
    def search(self) -> AsyncSearchResource:
        from .resources.search import AsyncSearchResource

        return AsyncSearchResource(self)

    @cached_property
    def sources(self) -> AsyncSourcesResource:
        from .resources.sources import AsyncSourcesResource

        return AsyncSourcesResource(self)

    @cached_property
    def memories(self) -> AsyncMemoriesResource:
        from .resources.memories import AsyncMemoriesResource

        return AsyncMemoriesResource(self)

    @cached_property
    def usage(self) -> AsyncUsageResource:
        from .resources.usage import AsyncUsageResource

        return AsyncUsageResource(self)

    @cached_property
    def jobs(self) -> AsyncJobsResource:
        from .resources.jobs import AsyncJobsResource

        return AsyncJobsResource(self)

    @cached_property
    def health(self) -> AsyncHealthResource:
        from .resources.health import AsyncHealthResource

        return AsyncHealthResource(self)

    @cached_property
    def with_raw_response(self) -> AsyncCrosmosWithRawResponse:
        return AsyncCrosmosWithRawResponse(self)

    @cached_property
    def with_streaming_response(self) -> AsyncCrosmosWithStreamedResponse:
        return AsyncCrosmosWithStreamedResponse(self)

    @property
    @override
    def qs(self) -> Querystring:
        return Querystring(array_format="comma")

    @override
    def _auth_headers(self, security: SecurityOptions) -> dict[str, str]:
        return {
            **(self._http_bearer if security.get("http_bearer", False) else {}),
        }

    @property
    def _http_bearer(self) -> dict[str, str]:
        api_key = self.api_key
        return {"Authorization": f"Bearer {api_key}"}

    @property
    @override
    def default_headers(self) -> dict[str, str | Omit]:
        return {
            **super().default_headers,
            "X-Stainless-Async": f"async:{get_async_library()}",
            **self._custom_headers,
        }

    def copy(
        self,
        *,
        api_key: str | None = None,
        base_url: str | httpx.URL | None = None,
        timeout: float | Timeout | None | NotGiven = not_given,
        http_client: httpx.AsyncClient | None = None,
        max_retries: int | NotGiven = not_given,
        default_headers: Mapping[str, str] | None = None,
        set_default_headers: Mapping[str, str] | None = None,
        default_query: Mapping[str, object] | None = None,
        set_default_query: Mapping[str, object] | None = None,
        _extra_kwargs: Mapping[str, Any] = {},
    ) -> Self:
        """
        Create a new client instance re-using the same options given to the current client with optional overriding.
        """
        if default_headers is not None and set_default_headers is not None:
            raise ValueError("The `default_headers` and `set_default_headers` arguments are mutually exclusive")

        if default_query is not None and set_default_query is not None:
            raise ValueError("The `default_query` and `set_default_query` arguments are mutually exclusive")

        headers = self._custom_headers
        if default_headers is not None:
            headers = {**headers, **default_headers}
        elif set_default_headers is not None:
            headers = set_default_headers

        params = self._custom_query
        if default_query is not None:
            params = {**params, **default_query}
        elif set_default_query is not None:
            params = set_default_query

        http_client = http_client or self._client
        return self.__class__(
            api_key=api_key or self.api_key,
            base_url=base_url or self.base_url,
            timeout=self.timeout if isinstance(timeout, NotGiven) else timeout,
            http_client=http_client,
            max_retries=max_retries if is_given(max_retries) else self.max_retries,
            default_headers=headers,
            default_query=params,
            **_extra_kwargs,
        )

    # Alias for `copy` for nicer inline usage, e.g.
    # client.with_options(timeout=10).foo.create(...)
    with_options = copy

    @override
    def _make_status_error(
        self,
        err_msg: str,
        *,
        body: object,
        response: httpx.Response,
    ) -> APIStatusError:
        if response.status_code == 400:
            return _exceptions.BadRequestError(err_msg, response=response, body=body)

        if response.status_code == 401:
            return _exceptions.AuthenticationError(err_msg, response=response, body=body)

        if response.status_code == 403:
            return _exceptions.PermissionDeniedError(err_msg, response=response, body=body)

        if response.status_code == 404:
            return _exceptions.NotFoundError(err_msg, response=response, body=body)

        if response.status_code == 409:
            return _exceptions.ConflictError(err_msg, response=response, body=body)

        if response.status_code == 422:
            return _exceptions.UnprocessableEntityError(err_msg, response=response, body=body)

        if response.status_code == 429:
            return _exceptions.RateLimitError(err_msg, response=response, body=body)

        if response.status_code >= 500:
            return _exceptions.InternalServerError(err_msg, response=response, body=body)
        return APIStatusError(err_msg, response=response, body=body)


class CrosmosWithRawResponse:
    _client: Crosmos

    def __init__(self, client: Crosmos) -> None:
        self._client = client

    @cached_property
    def spaces(self) -> spaces.SpacesResourceWithRawResponse:
        from .resources.spaces import SpacesResourceWithRawResponse

        return SpacesResourceWithRawResponse(self._client.spaces)

    @cached_property
    def search(self) -> search.SearchResourceWithRawResponse:
        from .resources.search import SearchResourceWithRawResponse

        return SearchResourceWithRawResponse(self._client.search)

    @cached_property
    def sources(self) -> sources.SourcesResourceWithRawResponse:
        from .resources.sources import SourcesResourceWithRawResponse

        return SourcesResourceWithRawResponse(self._client.sources)

    @cached_property
    def memories(self) -> memories.MemoriesResourceWithRawResponse:
        from .resources.memories import MemoriesResourceWithRawResponse

        return MemoriesResourceWithRawResponse(self._client.memories)

    @cached_property
    def usage(self) -> usage.UsageResourceWithRawResponse:
        from .resources.usage import UsageResourceWithRawResponse

        return UsageResourceWithRawResponse(self._client.usage)

    @cached_property
    def jobs(self) -> jobs.JobsResourceWithRawResponse:
        from .resources.jobs import JobsResourceWithRawResponse

        return JobsResourceWithRawResponse(self._client.jobs)

    @cached_property
    def health(self) -> health.HealthResourceWithRawResponse:
        from .resources.health import HealthResourceWithRawResponse

        return HealthResourceWithRawResponse(self._client.health)


class AsyncCrosmosWithRawResponse:
    _client: AsyncCrosmos

    def __init__(self, client: AsyncCrosmos) -> None:
        self._client = client

    @cached_property
    def spaces(self) -> spaces.AsyncSpacesResourceWithRawResponse:
        from .resources.spaces import AsyncSpacesResourceWithRawResponse

        return AsyncSpacesResourceWithRawResponse(self._client.spaces)

    @cached_property
    def search(self) -> search.AsyncSearchResourceWithRawResponse:
        from .resources.search import AsyncSearchResourceWithRawResponse

        return AsyncSearchResourceWithRawResponse(self._client.search)

    @cached_property
    def sources(self) -> sources.AsyncSourcesResourceWithRawResponse:
        from .resources.sources import AsyncSourcesResourceWithRawResponse

        return AsyncSourcesResourceWithRawResponse(self._client.sources)

    @cached_property
    def memories(self) -> memories.AsyncMemoriesResourceWithRawResponse:
        from .resources.memories import AsyncMemoriesResourceWithRawResponse

        return AsyncMemoriesResourceWithRawResponse(self._client.memories)

    @cached_property
    def usage(self) -> usage.AsyncUsageResourceWithRawResponse:
        from .resources.usage import AsyncUsageResourceWithRawResponse

        return AsyncUsageResourceWithRawResponse(self._client.usage)

    @cached_property
    def jobs(self) -> jobs.AsyncJobsResourceWithRawResponse:
        from .resources.jobs import AsyncJobsResourceWithRawResponse

        return AsyncJobsResourceWithRawResponse(self._client.jobs)

    @cached_property
    def health(self) -> health.AsyncHealthResourceWithRawResponse:
        from .resources.health import AsyncHealthResourceWithRawResponse

        return AsyncHealthResourceWithRawResponse(self._client.health)


class CrosmosWithStreamedResponse:
    _client: Crosmos

    def __init__(self, client: Crosmos) -> None:
        self._client = client

    @cached_property
    def spaces(self) -> spaces.SpacesResourceWithStreamingResponse:
        from .resources.spaces import SpacesResourceWithStreamingResponse

        return SpacesResourceWithStreamingResponse(self._client.spaces)

    @cached_property
    def search(self) -> search.SearchResourceWithStreamingResponse:
        from .resources.search import SearchResourceWithStreamingResponse

        return SearchResourceWithStreamingResponse(self._client.search)

    @cached_property
    def sources(self) -> sources.SourcesResourceWithStreamingResponse:
        from .resources.sources import SourcesResourceWithStreamingResponse

        return SourcesResourceWithStreamingResponse(self._client.sources)

    @cached_property
    def memories(self) -> memories.MemoriesResourceWithStreamingResponse:
        from .resources.memories import MemoriesResourceWithStreamingResponse

        return MemoriesResourceWithStreamingResponse(self._client.memories)

    @cached_property
    def usage(self) -> usage.UsageResourceWithStreamingResponse:
        from .resources.usage import UsageResourceWithStreamingResponse

        return UsageResourceWithStreamingResponse(self._client.usage)

    @cached_property
    def jobs(self) -> jobs.JobsResourceWithStreamingResponse:
        from .resources.jobs import JobsResourceWithStreamingResponse

        return JobsResourceWithStreamingResponse(self._client.jobs)

    @cached_property
    def health(self) -> health.HealthResourceWithStreamingResponse:
        from .resources.health import HealthResourceWithStreamingResponse

        return HealthResourceWithStreamingResponse(self._client.health)


class AsyncCrosmosWithStreamedResponse:
    _client: AsyncCrosmos

    def __init__(self, client: AsyncCrosmos) -> None:
        self._client = client

    @cached_property
    def spaces(self) -> spaces.AsyncSpacesResourceWithStreamingResponse:
        from .resources.spaces import AsyncSpacesResourceWithStreamingResponse

        return AsyncSpacesResourceWithStreamingResponse(self._client.spaces)

    @cached_property
    def search(self) -> search.AsyncSearchResourceWithStreamingResponse:
        from .resources.search import AsyncSearchResourceWithStreamingResponse

        return AsyncSearchResourceWithStreamingResponse(self._client.search)

    @cached_property
    def sources(self) -> sources.AsyncSourcesResourceWithStreamingResponse:
        from .resources.sources import AsyncSourcesResourceWithStreamingResponse

        return AsyncSourcesResourceWithStreamingResponse(self._client.sources)

    @cached_property
    def memories(self) -> memories.AsyncMemoriesResourceWithStreamingResponse:
        from .resources.memories import AsyncMemoriesResourceWithStreamingResponse

        return AsyncMemoriesResourceWithStreamingResponse(self._client.memories)

    @cached_property
    def usage(self) -> usage.AsyncUsageResourceWithStreamingResponse:
        from .resources.usage import AsyncUsageResourceWithStreamingResponse

        return AsyncUsageResourceWithStreamingResponse(self._client.usage)

    @cached_property
    def jobs(self) -> jobs.AsyncJobsResourceWithStreamingResponse:
        from .resources.jobs import AsyncJobsResourceWithStreamingResponse

        return AsyncJobsResourceWithStreamingResponse(self._client.jobs)

    @cached_property
    def health(self) -> health.AsyncHealthResourceWithStreamingResponse:
        from .resources.health import AsyncHealthResourceWithStreamingResponse

        return AsyncHealthResourceWithStreamingResponse(self._client.health)


Client = Crosmos

AsyncClient = AsyncCrosmos
