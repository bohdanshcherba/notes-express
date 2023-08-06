import {Router} from "express";
import {NoteController} from "../controllers/note.controller";
import {NoteService} from "../services/note.service";
import {noteRepository} from "../repositories/note.repository";
import {validate, validateParams, validateWithParams} from "../middleware/validate";
import {createNoteSchema, updateNoteSchema} from "../types/schemes";


const router = Router()

const note = new NoteController(new NoteService(noteRepository))
router.get('/notes', note.getNotes)
router.get('/notes/stats', note.stats)
router.get('/notes/:id', validateParams(), note.getById)

router.post('/notes', validate(createNoteSchema), note.create)
router.patch('/notes/:id', validateWithParams(updateNoteSchema), note.update)
router.delete('/notes/:id', validateParams(), note.delete)

export {router}
