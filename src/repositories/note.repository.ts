

export interface NoteRepositoryInterface {
    getAll(): Promise<any[]>

}

export class NoteRepository implements NoteRepositoryInterface {
    private Note:any

    constructor(Note: any) {
        this.Note = Note
    }

    getAll = async (): Promise<any[]> => {
        return ['qwe']
    }

}


