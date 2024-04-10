import type { HttpRequestConfig, HttpResponse } from "@shared/utils/http/types";
import { HttpError } from "@shared/utils/http/types";
import type { AxiosError } from "axios";
import axios from "axios";

export const baseConfig = {
  headers: {
    "Content-Type": "application/json",
  },
};

const request = async <T>(
  url: string,
  options: HttpRequestConfig,
): Promise<HttpResponse<T>> => {
  try {
    return await axios({
      ...baseConfig,
      url,
      ...options,
    });
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response) {
      throw new HttpError(
        {
          request: {
            method: axiosError.config?.method?.toUpperCase() || "GET",
            headers: axiosError.config?.headers || {},
            url,
            body: axiosError.config?.data || "",
          },
          response: {
            status: axiosError.response.status,
            statusText: axiosError.response.statusText,
            headers: axiosError.response.headers,
            data: axiosError.response.data,
          },
        },
        axiosError
      );
    }
    if (axiosError.request) {
      throw new HttpError(
        {
          request: {
            method: axiosError.config?.method?.toUpperCase() || "GET",
            headers: axiosError.config?.headers || {},
            url,
            body: axiosError.config?.data || "",
          },
        },
        axiosError
      );
    }
    throw new Error(
      "An error occurred when attempting to perform an HTTP request",
      { cause: axiosError }
    );
  }
};

const buildRequestFunctionForMethod =
  (method: string) =>
  async <ResponseBody>(
    url: string,
    options: HttpRequestConfig = {}
  ): Promise<HttpResponse<ResponseBody>> => {
    const defaultOptions: HttpRequestConfig = {
      method,
    };

    return await request(url, { ...defaultOptions, ...options });
  };

const httpClient = {
  request,
  get: buildRequestFunctionForMethod("GET"),
  post: buildRequestFunctionForMethod("POST"),
  put: buildRequestFunctionForMethod("PUT"),
  patch: buildRequestFunctionForMethod("PATCH"),
  delete: buildRequestFunctionForMethod("DELETE"),
};

export default httpClient;