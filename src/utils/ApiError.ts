
class ApiError extends Error{
    public statusCode: number;
    public success: boolean;
    public errors: unknown[];
    constructor(
        statusCode : number, 
        message = "Something went wrong",
        errors:unknown[] = [],
        cause? : unknown
    ){
        super(message, cause ? {cause} : undefined);

        this.name = "ApiError"
        this.statusCode = statusCode;
        this.success = false;
        this.errors = errors

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
        // This is done so that 
        // err instanceof ApiError should return true (else it won't), this is a js error, not typescript
        Object.setPrototypeOf(this, new.target.prototype);
    }   
}

export {ApiError}