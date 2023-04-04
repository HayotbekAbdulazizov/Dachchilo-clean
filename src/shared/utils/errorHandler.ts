import { Request, Response, NextFunction } from 'express';

export function errorHandlerController(_target: any, _key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (req: Request, res: Response, next: NextFunction) {
        try {
            const result = await originalMethod.call(this, req, res, next);
            return result;
        } catch (err: any) {
            console.log(err.message)
            return res.status(403).json("Something went wrong")
            // next(err);
        }
    };

    return descriptor;
}





export function globalErrorHandler(
    _target: any,
    _propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value;
    descriptor.value = async function (
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        console.log(`Calling function ${originalMethod.name}`);
        try {
            const result = await originalMethod.call(this, req, res, next);
            return result;
        } catch (err: any) {
            throw new Error(err.message)
        }
    };
    return descriptor;
}