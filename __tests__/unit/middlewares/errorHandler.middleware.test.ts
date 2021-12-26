import { NextFunction, Request, Response } from 'express';
import errorHandlerMiddleware from '@middlewares/errorHandler.middleware';

describe('errorHandler Middleware', () => {
  const mockRes = () => {
    const res: Partial<Response> = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
  };

  let mockError: Partial<Error>;
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response> = mockRes();
  let nextFunction: NextFunction = jest.fn();

  it('Response should have truthy statusCode and json function called', () => {
    errorHandlerMiddleware(mockError as Error, mockRequest as Request, mockResponse as Response, nextFunction);
    expect(typeof mockResponse.statusCode).toBe('number');
    expect(mockResponse.json).toBeCalled();
  });
});
