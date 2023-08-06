import {noteM} from "../models/note.model";
import {NoteCreateType, NoteType} from "../types/note";

export interface NoteRepositoryInterface {
    getAll(): Promise<NoteType[]>

    getById(id: number): Promise<NoteType>;

    create(note: NoteCreateType): Promise<NoteType>;

    update(id: number, note: NoteCreateType): Promise<NoteType>;

    delete(id: number): Promise<string>;

}

class NoteRepository implements NoteRepositoryInterface {
    private Note: typeof noteM

    constructor(noteModel: typeof noteM) {
        this.Note = noteModel
    }

    getAll = async (): Promise<NoteType[]> => {
        return this.Note.getAll()
    }
    getById = async (id: number): Promise<NoteType> => {
        return await this.Note.getNote(id);
    }

    create = async (note: NoteCreateType): Promise<NoteType> => {
        return await this.Note.insertNote(note)
    }
    update = async (id: number, note: NoteCreateType): Promise<NoteType> => {
        return await this.Note.updateNote(id, note)
    }

    delete = async (id: number): Promise<string> => {
        return await this.Note.deletePost(id)
    }

}

export const noteRepository = new NoteRepository(noteM)
