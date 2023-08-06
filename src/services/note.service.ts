import {NoteRepositoryInterface} from "../repositories/note.repository";
import {NoteCreateRequestType, NoteCreateType, NoteType} from "../types/note";
import {extractDatesFromText} from "../helpers/dates";

export class NoteService {
    private NoteRepository: NoteRepositoryInterface

    constructor(airlineRepository: NoteRepositoryInterface) {
        this.NoteRepository = airlineRepository;
    }

    getAll = async (): Promise<NoteType[]> => {
        return await this.NoteRepository.getAll();
    }

    getById = async (id: string): Promise<NoteType> => {
        return await this.NoteRepository.getById(Number(id));
    }
    create = async (note: NoteCreateRequestType): Promise<NoteType> => {
        const dates = extractDatesFromText(note.content)
        return await this.NoteRepository.create({dates, archived: false, ...note})
    }
    update = async (id: string, note: NoteCreateType): Promise<NoteType> => {
        const dates = extractDatesFromText(note.content)
        return await this.NoteRepository.update(Number(id), note.content ? {...note, dates} : note)
    }
    delete = async (id: string): Promise<string> => {
        return await this.NoteRepository.delete(Number(id))
    }
    stats = async (): Promise<any> => {
        const notes = await this.NoteRepository.getAll()

        const categories: any = {}
        notes.map((note) => {
            let stats = {active: 0, archived: 0}
            if (note.archived) {
                stats = {
                    active: categories[note.category] ? categories[note.category].active : 0,
                    archived: categories[note.category] ? categories[note.category].archived += 1 : 1
                }
            } else {
                stats = {
                    active: categories[note.category] ? categories[note.category].active += 1 : 1,
                    archived: categories[note.category] ? categories[note.category].archived : 0
                }
            }
            categories[note.category] = stats
        })


        return categories
    }
}
