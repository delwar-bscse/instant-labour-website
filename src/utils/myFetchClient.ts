/* eslint-disable @typescript-eslint/no-explicit-any */

export interface FetchResponse {
  success: boolean;
  message?: string;
  data?: any;
  pagination?: {
    total: number;
    page: number;
    limit: number;
    totalPage: number;
  };
  error?: string | null;
}

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

interface FetchOptions {
  method?: HttpMethod;
  body?: any;
  token?: string;
  headers?: Record<string, string>;
  baseUrl?: string;
}

export const myFetchClient = async (
  endpoint: string,
  {
    method = "GET",
    body,
    token,
    headers = {},
    baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "",
  }: FetchOptions = {}
): Promise<FetchResponse> => {
  const isFormData = body instanceof FormData;
  const hasBody = body !== undefined && method !== "GET";

  const reqHeaders: Record<string, string> = {
    Accept: "application/json",
    ...headers,
    ...(isFormData ? {} : { "Content-Type": "application/json" }),
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };

  try {
    const response = await fetch(`${baseUrl}${endpoint}`, {
      method,
      headers: reqHeaders,
      ...(hasBody && { body: isFormData ? body : JSON.stringify(body) }),
    });

    const data = await response.json();

    if (response.ok) {
      return {
        success: data?.success ?? true,
        message: data?.message,
        data: data?.data,
        pagination: data?.pagination,
        error: null,
      };
    }

    return {
      success: false,
      message: data?.message,
      data: null,
      error: data?.errorMessages || "Request failed",
    };
  } catch (error) {
    return {
      success: false,
      message: "Network error",
      data: null,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
};
