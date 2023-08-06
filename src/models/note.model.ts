import {NoteCreateType, NoteType} from "../types/note";

export class Note {

    private notes: Array<NoteType>

    constructor() {
        this.notes = [
            {
                id: 1,
                name: 'Note 1',
                created: new Date('2023-07-27'),
                category: 'Work',
                content: 'This is the content of Note 1.',
                dates: [],
                archived: false,
            },
            {
                id: 2,
                name: 'Note 2',
                created: new Date('2023-07-26'),
                category: 'Personal',
                content: 'This is the content of Note 2. 26/08/2023',
                archived: false,
                dates: ['26/08/2023']
            },
            {
                id: 3,
                name: 'Note 3',
                created: new Date('2023-07-25'),
                category: 'Study',
                content: 'This is the content of Note 3.',
                archived: false,

                dates: []
            },
            {
                id: 4,
                name: 'Note 4',
                created: new Date('2023-07-24'),
                category: 'Work',
                content: 'This is the content of Note 4.',
                archived: false,

                dates: []
            },
            {
                id: 5,
                name: 'Note 5',
                created: new Date('2023-07-23'),
                category: 'Personal',
                content: 'This is the content of Note 5.',
                archived: false,

                dates: []
            },
            {
                id: 6,
                name: 'Note 6',
                created: new Date('2023-07-22'),
                category: 'Study',
                content: 'This is the content of Note 6.',
                archived: false,

                dates: []
            },
            {
                id: 7,
                name: 'Note 7',
                created: new Date('2023-07-21'),
                category: 'Work',
                content: 'This is the content of Note 7.',
                archived: false,

                dates: []
            },
        ]
    }

    public getAll = (): Promise<NoteType[]> => {
        return new Promise((resolve, reject) => {
            if (this.notes.length === 0) {
                reject({
                    message: 'no Notes available',
                    status: 202
                })
            }
            resolve(this.notes)
        })
    }

    public getNote = (id: number): Promise<NoteType> => {
        return new Promise((resolve, reject) => {
            const note = this.notes.find(r => r.id == id)
            if (!note) {
                reject({
                    message: 'Note is not found',
                    status: 404
                })
            } else {
                resolve(note)
            }

        })
    }

    public insertNote = (newNote: NoteCreateType): Promise<NoteType> => {
        return new Promise((resolve, reject) => {
            const note: NoteType = {id: Math.random(), created: new Date(), ...newNote}
            this.notes.push(note)
            resolve(note)
        })
    }

    public updateNote = (id: number, newPost: NoteCreateType): Promise<NoteType> => {
        return new Promise((resolve, reject) => {
            let index = this.notes.findIndex(obj => obj.id === id)
            if (index !== -1) {
                this.notes[index] = {...this.notes[index], ...newPost}
                resolve(this.notes[index])
            } else {
                reject({
                    message: 'Note is not found',
                    status: 404
                })
            }
        })
    }

    public deletePost = (id: number): Promise<string> => {
        return new Promise((resolve, reject) => {
            let index = this.notes.findIndex(obj => obj.id === id)
            if (index !== -1) {
                this.notes = this.notes.filter(i => i.id !== id)
                resolve('1')
            } else {
                reject({
                    message: 'Note is not found',
                    status: 404
                })
            }
        })
    }

}

export const noteM = new Note()
