export class BadRequestResponse extends Error {
  constructor(message: string) {
    super(message);
  }

  get statusCode(): number {
    return 400;
  }
}
