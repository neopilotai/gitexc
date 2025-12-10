import { NowRequest, NowResponse } from '@now/node';
import { AppError } from '../_utils/errors';

export function errorHandler(
  err: Error,
  req: NowRequest,
  res: NowResponse
) {
  console.error(`[${new Date().toISOString()}] ${err.stack || err}`);

  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
    });
  }

  // Handle other types of errors
  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
}
