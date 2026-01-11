import { server_config } from "../../config/http_server.svelte";

type Method = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export class HTTPService {
  base_url: string

  constructor(base_url: string = server_config.url) {
    this.base_url = base_url;
  }

  async fetch<T>(endpoint: string, method: Method = "GET", body?: unknown) {
    const url = `${this.base_url}${endpoint}`;
    const options: RequestInit = {
      method: method,
      headers: {
        'content-type': 'application/json'
      },
    }

    if (method !== "GET" && body) {
      options.body = JSON.stringify(body);
    }

    return (await (await fetch(url, options)).json()) as T;
  }
}

export const http_service = new HTTPService();
