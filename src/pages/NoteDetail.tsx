import React from 'react'
import { useNote } from './NoteLayouts'
import{Link} from 'react-router-dom'

function NoteDetail() {
    const note = useNote()
  return (
    <div>
        <div className='flex justify-between items-center'>
            <div className='flex flex-col gap-2'>
            <div className='font-bold text-2xl'>{note.title}</div>
          
            <div className='flex items-center gap-2'>
            {note.tags?.map(tag=>{
            return(
                <div className='bg-blue-600 text-white rounded-md px-2 py-1 shadow-sm text-md mt-2 '>{tag.label}</div>
        )})}
            </div>

            </div>

            <div>
            <div className='flex items-center gap-2'>
            <Link to={`/${note.id}/edit`} className='bg-blue-600 text-white rounded-md px-3 py-2 shadow-sm text-lx mt-2 cursor-pointer hover:bg-blue-500'>Edit</Link>
            <div className='bg-red-600 text-white rounded-md px-3 py-2 shadow-sm text-lx mt-2  hover:bg-red-500 cursor-pointer '>Delete</div>
            <Link to="/" className='bg-gray-600 text-white rounded-md px-3 py-2 shadow-sm text-lx mt-2  hover:bg-gray-500 cursor-pointer '>Back</Link>
   
</div>
            </div>
        </div>

        <div className='text-sm text-gray-700 font-medium mt-8 self-start'>
            {note.markdown}
        </div>
    </div>
  )
}

export default NoteDetail