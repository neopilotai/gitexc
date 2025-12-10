import rateLimit from 'express-rate-limit';
import { TooManyRequests } from '../_utils/errors';

export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  handler: (req, res) => {
    throw new TooManyRequests('Too many requests, please try again later');
  },
});
