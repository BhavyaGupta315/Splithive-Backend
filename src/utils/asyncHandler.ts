import type { RequestHandler } from "express";
import type { AsyncMiddleware } from "../middleware.js";

const asyncHandler =
  (fn: AsyncMiddleware): RequestHandler =>
  (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch((err) => next(err));
  };

export { asyncHandler };
