interface ZodIssue {
  code: string;
  expected: string;
  received: string;
  path: string[];
  message: string;
}

export interface ZodError {
  issues: ZodIssue[];
  name: string;
}

export class ZodErrorTratative {
  private error: ZodError;

  constructor(error: any) {
    this.error = error;
  }

  isSuccess(): boolean {
    return this.error.issues.length === 0;
  }

  getErrorMessage(): string {
    return this.error.issues[0]?.message || "Unknown error";
  }

  getErrorCode(): string {
    return this.error.issues[0]?.code || "";
  }

  getErrorPath(): string[] {
    return this.error.issues[0]?.path || [];
  }

  getAllIssues(): ZodIssue[] {
    return this.error.issues;
  }
}
