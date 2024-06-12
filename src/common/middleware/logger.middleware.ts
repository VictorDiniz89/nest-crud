//import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from 'express';

//@Injectable()
export function logger(req: Request, res: Response, next: NextFunction){
    console.log(`Request...`)
    next();
}