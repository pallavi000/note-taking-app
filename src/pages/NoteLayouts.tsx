import React from 'react'
import { Note, NoteLayoutProps } from '../interface/Interface'
import {useParams,Navigate,Outlet,useOutletContext} from 'react-router-dom'

export function NoteLayouts({notes}:NoteLayoutProps) {


    const {id}=useParams()
    console.log(notes,'layouts')
    const note=notes.find(note=>note.id === id)

    if(note===null) return <Navigate to="/" replace/>

    return <Outlet context={note}/>

  
  
}

export function useNote(){
    return useOutletContext<Note>()
}