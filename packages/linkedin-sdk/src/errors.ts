export class LinkedInApiError extends Error {
  constructor(
    message: string,
    public readonly status: number,
    public readonly body: unknown,
    public readonly serviceErrorCode?: number,
  ) {
    super(message);
    this.name = "LinkedInApiError";
  }
}

export class LinkedInUploadError extends Error {
  constructor(
    message: string,
    public readonly status: number,
    public readonly body: string,
  ) {
    super(message);
    this.name = "LinkedInUploadError";
  }
}
