import { NowRequest, NowResponse } from '@now/node';
import { applySecurityHeaders } from './_middleware/security';
import { errorHandler } from './_middleware/errorHandler';
import { validatePing } from './_middleware/validator';
import { apiLimiter } from './_middleware/rateLimit';

export default async (req: NowRequest, res: NowResponse) => {
  try {
    // Apply security headers
    applySecurityHeaders(req, res);

    // Apply rate limiting
    await new Promise<void>((resolve, reject) => {
      apiLimiter(req, res, (err) => {
        if (err) return reject(err);
        resolve();
      });
    });

    // Validate request
    await validatePing(req, res, (err) => {
      if (err) throw err;
    });

    const { name = 'World' } = req.query;

    // Simulate an error for demonstration
    // if (name === 'error') {
    //   throw new Error('Simulated error for testing');
    // }

    res.status(200).json({
      status: 'success',
      data: {
        message: `Hello ${name}`,
        timestamp: new Date().toISOString(),
      },
    });
  } catch (err) {
    return errorHandler(err, req, res);
  }
};
