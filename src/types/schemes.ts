import {boolean, number, object, string} from "yup";

export const createNoteSchema = object({

    name: string().min(3).required(),
    content: string().min(3).required(),
    category: string().min(3).required(),

}).noUnknown(true);
export const updateNoteSchema = object({

        name: string().min(3),
        content: string().min(3),
        category: string().min(3),
        archived: boolean()

}).noUnknown(true);

export const paramsNoteSchema = object({
    id: number().required()
});
