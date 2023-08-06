import {Request, Response} from "express";
import {NoteService} from "../services/note.service";
import {NoteType} from "../types/note";


export class NoteController {
    private NoteService: NoteService

    constructor(NoteService: NoteService) {
        this.NoteService = NoteService;
        this.getNotes = this.getNotes.bind(this);
        this.getById = this.getById.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
        this.stats = this.stats.bind(this);

    }

    async getNotes(req: Request, res: Response) {

        this.NoteService.getAll().then((data: NoteType[]) => {
            res.status(200).send(data).toString()
        })
            .catch((err) => {
                res.status(err.status).send(err.message)
            })
    }

    async getById(req: Request, res: Response) {
        this.NoteService.getById(req.params.id).then((data: NoteType) => {
            res.send(data)
        }).catch((err) => {
            res.status(err.status).send(err.message)
        })
    }

    async create(req: Request, res: Response) {
        this.NoteService.create(req.body).then((data: NoteType) => {
            res.send(data)
        }).catch((err) => {
            res.status(err.status).send(err.message)
        })
    }

    async update(req: Request, res: Response) {
        this.NoteService.update(req.params.id, req.body).then((data: NoteType) => {
            res.send(data)
        }).catch((err) => {

            res.status(500).send(err.message)
        })
    }

    async delete(req: Request, res: Response) {
        this.NoteService.delete(req.params.id).then((data: string) => {
            res.send(data)
        }).catch((err) => {
            res.status(err.status).send(err.message)
        })
    }

    async stats(req: Request, res: Response) {
        this.NoteService.stats().then((data: any) => {

            res.send(data)
        }).catch((err) => {
            res.status(err.status).send(err.message)
        })
    }
}
