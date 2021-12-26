import { NextFunction, Request, Response } from 'express';
import unknownRoutesMiddleware from '@middlewares/unknownRoutes.middleware';

describe('unknownRoutes middleware', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let nextFunction: NextFunction = jest.fn();

  it('Middleware should call next function to create error by error middleware', () => {
    unknownRoutesMiddleware(mockRequest as Request, mockResponse as Response, nextFunction);
    expect(nextFunction).toBeCalled();
  });
});
