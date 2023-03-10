
export type Note={
    id:string,
   
} & NoteData


export interface NoteData{
    title:string,
    markdown?:string,
    tags:Tag[]
}

export interface RawNoteData{
    title:string,
    markdown?:string,
    tagIds:string[]
}

export interface Tag{
    id:string,
    label:string
}

export interface NoteFormProps {
    onSubmit:(data:NoteData)=>void
    onAddTag:(tag:Tag)=>void
    availableTags?:Tag[]
}

export type RawNote={
    id:string,
} & RawNoteData


export interface NoteListProps{
availableTags:Tag[],
notes:Note[]
}

export interface singleNoteProps{
    id:string,
    title:string,
    tags:Tag[]
}

export interface NoteLayoutProps{
    notes:Note[]
}
