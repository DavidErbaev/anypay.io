class APIError extends Error {
	public code;
	constructor(message: string, code: number) {
		super(message);

		this.name = "APIError";
		this.message = message;
		this.code = code;

		Error.captureStackTrace(this);
	}
}

export default APIError;