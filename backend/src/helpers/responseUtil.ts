import { Response } from "express";

/**
 * Error response
 *
 * @param  {string} message - error string
 * @param  {Integer} statusCode - status code
 * @param {any} res - expressJS response object
 * @returns {object} response object
 */
export const errorResponse = (
  res: Response,
  statusCode: number,
  message: string
) =>
  res.status(statusCode).json({
    status: "error",
    message,
  });

/**
 * Success response
 *
 * @param  {string} message - response message
 * @param  {Integer} statusCode - status code
 * @param {Array} response - data object
 * @returns {object} response object
 */
export const successResponse = (
  res: Response,
  statusCode: number,
  message: string,
  data: Record<string, any> | null = null
) =>
  res.status(statusCode).json({
    status: "success",
    message,
    data,
  });
