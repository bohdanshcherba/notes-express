
import {Request, Response} from "express";
import {NoteService} from "../services/note.service";


export class NoteController {
    private NoteService: NoteService

    constructor(NoteService: NoteService) {
        this.NoteService = NoteService;
        this.getNotes = this.getNotes.bind(this);

    }

    async getNotes(req: Request, res: Response) {

        this.NoteService.getAllNotes().then((data: any[]) => {
                res.status(200).send(data).toString()
            })
            .catch((err: Error) => {
                res.status(500).send(err)
            })
    }


}
