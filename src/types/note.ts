export type NoteType = {
    id: number,
    name: string,
    created: Date,
    category: string,
    content: string,
    dates: Array<string>,
    archived: boolean,
}

export type NoteCreateType = { name: string, content: string, category: string, archived: boolean, dates: string[]}
export type NoteCreateRequestType = { name: string, content: string, category: string}

