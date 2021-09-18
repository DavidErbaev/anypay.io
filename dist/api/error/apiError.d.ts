declare class APIError extends Error {
    code: number;
    constructor(message: string, code: number);
}
export default APIError;
