import React, { useMemo } from 'react'
import NewForm from '../component/NewForm'
import { NoteData, RawNote, Tag } from '../interface/Interface'
 import {v4 as uuidV4} from 'uuid'
import { useLocalStorage } from '../useLocalStorage'

function NewNote({onCreateNote, onAddTag,availableTags}:any) {
  
  return (
    
        <div className='  h-screen self-center'>
            <div className='font-bold text-lg left-0'>New Form</div>
            <NewForm onSubmit={onCreateNote} onAddTag={onAddTag} availableTags={availableTags}/>
            </div>
    
  )
}

export default NewNote