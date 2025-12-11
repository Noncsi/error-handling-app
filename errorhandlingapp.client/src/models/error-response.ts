import { HttpStatusCode } from "@angular/common/http"

export interface ErrorResponse {
  statusCode: HttpStatusCode;
  name: string;
  message: string;
}
