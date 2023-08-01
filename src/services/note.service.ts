
import {NoteRepositoryInterface} from "../repositories/note.repository";



export class NoteService {
    private NoteRepository: NoteRepositoryInterface

    constructor(airlineRepository: NoteRepositoryInterface) {
        this.NoteRepository = airlineRepository;
    }
    async getAllNotes(): Promise<any[]> {
        return await this.NoteRepository.getAll();
    }


}
