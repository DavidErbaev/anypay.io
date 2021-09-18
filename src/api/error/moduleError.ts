class ModuleError extends Error {
	constructor(message: string) {
		super(message);

		this.name = "ModuleError";
		this.message = message;

		Error.captureStackTrace(this);
	}
}

export default ModuleError;