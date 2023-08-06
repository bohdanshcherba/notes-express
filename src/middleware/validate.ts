import {NextFunction, Request, Response} from "express";
import {Schema} from "yup";
import {paramsNoteSchema} from "../types/schemes";

export const validate = (schema: Schema) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        await schema.validate(req.body, {stripUnknown: false, strict:true});
        return next();
    } catch (err: any) {
        return res.status(400).json({type: err.name, message: err.message});
    }
};

export const validateWithParams = (schema: Schema) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        await schema.validate(req.body, {stripUnknown: false, strict:true});
        await paramsNoteSchema.validate(req.params, {stripUnknown: false});
        return next();
    } catch (err: any) {
        return res.status(400).json({type: err.name, message: err.message});
    }
};
export const validateParams = () => async (req: Request, res: Response, next: NextFunction) => {
    try {
        await paramsNoteSchema.validate(req.params, {stripUnknown: false});
        return next();
    } catch (err: any) {
        return res.status(400).json({type: err.name, message: err.message});
    }
};
