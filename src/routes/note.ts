import {Router} from "express";
import {NoteController} from "../controllers/note.controller";
import {NoteService} from "../services/note.service";


const router = Router()

const note = new NoteController(NoteService)
router.get('/notes', note.getNotes)
router.get('/notes/:id', note.getNotes)
router.get('/notes/stats',note.getNotes)

router.post('/notes',note.getNotes)
router.patch('/notes/:id',note.getNotes)
router.delete('/notes/:id',note.getNotes)

export {router}
