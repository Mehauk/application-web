import type { ExampleModel } from "../models/example.svelte";
import { http_service, HTTPService } from "../services/http_service";

export class ExamplesRepository {
  service: HTTPService;

  constructor(service: HTTPService = http_service) {
    this.service = service;
  }

  async getExamples(): Promise<Array<ExampleModel>> {
    return await http_service.fetch("/example/models");
  }

  async postExample(model: ExampleModel): Promise<ExampleModel> {
    return await http_service.fetch("/example/models", "POST", model);
  }
}

export const example_repository = new ExamplesRepository();
