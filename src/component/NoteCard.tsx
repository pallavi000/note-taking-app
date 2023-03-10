import React from 'react'
import {Link} from 'react-router-dom'
import { Note, singleNoteProps } from '../interface/Interface'

function NoteCard({id,title,tags}:singleNoteProps) {
  return (
    <div  className='p-4 px-8 cursor-pointer shadow-md border hover:shadow-xl rounded-md  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 '>
    <Link to={`/${id}`}>
        <div className='font-bold text-xl mb-4'>{title}</div>
        <div className='grid grid-cols-3 gap-2 items-center items-center justify-center'>
        {tags.map(tag=>{
            return(
                <div className='bg-blue-600 text-white rounded-md px-1 py-1 shadow-sm text-sm mt-2 '>{tag.label}</div>
        )})}
        </div>
    </Link>
    </div>
  )
}

export default NoteCard