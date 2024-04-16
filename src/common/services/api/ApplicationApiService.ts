import { ApiService } from "./ApiService";

export class ApplicationApiService extends ApiService {
  constructor() {
    super("/api");
  }
}
