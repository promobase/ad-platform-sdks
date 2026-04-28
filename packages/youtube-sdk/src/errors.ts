export class YouTubeApiError extends Error {
  readonly status: number;
  readonly body: unknown;

  constructor(message: string, status: number, body: unknown) {
    super(message);
    this.name = "YouTubeApiError";
    this.status = status;
    this.body = body;
  }
}

export class YouTubeUploadError extends Error {
  readonly status: number;
  readonly body: string;

  constructor(message: string, status: number, body: string) {
    super(message);
    this.name = "YouTubeUploadError";
    this.status = status;
    this.body = body;
  }
}
