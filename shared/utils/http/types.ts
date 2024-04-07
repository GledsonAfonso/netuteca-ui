import { AxiosRequestConfig, AxiosResponse } from "axios";

type HttpRequest<RequestBody> = {
  method: string;
  url: string;
  headers: Record<string, string>;
  body?: RequestBody;
};

export type HttpResponse<ResponseBody> = Pick<
  AxiosResponse,
  | "status"
  | "statusText"
  | "headers"
> & {
  data: ResponseBody;
};

export type HttpErrorDetails<RequestBody, ResponseBody> = {
  request: HttpRequest<RequestBody>;
  response?: HttpResponse<ResponseBody>;
};

export type HttpRequestConfig = Pick<
  AxiosRequestConfig,
  | "method"
  | "headers"
  | "params"
  | "data"
  | "responseType"
  | "url"
>;

export class HttpError<
  RequestBody = unknown,
  ResponseBody = unknown,
> extends Error {
  name = "HttpError";
  constructor(
    public readonly details: HttpErrorDetails<RequestBody, ResponseBody>,
    cause?: Error
  ) {
    super("An error occurred when attempting to perform an HTTP request", {
      cause,
    });
  }
}
