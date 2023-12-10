import { messagesError } from "./error";

export class CustomError extends Error {
  constructor(code) {
    super(messagesError[code]);
    this.name = "Error";
  }
}
