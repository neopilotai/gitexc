import { ValidationChain, validationResult } from 'express-validator';
import { RequestHandler } from 'express';
import { ValidationError } from '../_utils/errors';

export const validate = (validations: ValidationChain[]): RequestHandler => {
  return async (req, res, next) => {
    await Promise.all(validations.map(validation => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    throw new ValidationError(
      errors.array().map(err => `${err.param}: ${err.msg}`).join(', ')
    );
  };
};

// Example usage in a route
export const validatePing = validate([
  body('name').optional().isString().withMessage('Name must be a string'),
  // Add more validation rules as needed
]);
