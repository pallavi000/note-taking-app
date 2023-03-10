import React, { useEffect, useMemo, useState } from 'react'
import {Link} from 'react-router-dom'
import { Form } from 'react-bootstrap'
import Button from 'react-bootstrap/esm/Button'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import { NoteListProps, Tag } from '../interface/Interface'
import ReactSelect from 'react-select'
import NoteCard from '../component/NoteCard'

function NoteList({availableTags,notes}:NoteListProps) {
    const[selectedTags,setSelectedTags] = useState<Tag[]>([])
    const[title,setTitle] = useState('')

    console.log(notes)


    const filteredNotes = useMemo(()=>{
        return notes.filter(note=>{
            return (title==="" ||note.title.toLowerCase().includes(title.toLowerCase()))
            &&
           (selectedTags.length===0 || selectedTags.every(tag=>note.tags.some(noteTag=>noteTag.id===tag.id))) 
        })
    },[title, selectedTags, notes,])


  
    

  return (
  <>
  <div className='flex justify-between items-center'>
    <div className='font-bold text-2xl'>Notes</div>
    <div className='flex items-center gap-2'>
        <Link to="/create-note" className='bg-blue-500 font-medium text-white rounded-lg py-2 px-4 hover:bg-blue-400 cursor-pointer' >Create</Link>
        <Link to="£" className='bg-white font-medium text-gray-700 rounded-lg py-2 px-4 border border-gray-700 hover:bg-gray-600 cursor-pointer' >Edit</Link>
       
    </div>
  </div>

  <Form  className="mt-4">
  <Row>
                    <Col>
                    <Form.Group controlId='title'>
                        <Form.Label className='font-medium text-xl'>Title</Form.Label>
                        <Form.Control  type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group controlId='tags'>
                        <Form.Label className="font-medium text-xl">Tags</Form.Label>
                        <ReactSelect

                        
                        options={availableTags?.map(tag=>{
                            return {label:tag.label,value:tag.id}
                        })}
                         value={selectedTags.map(tag=>{
                            return {label:tag.label,value:tag.id}
                        })} 

                        onChange={tags=>{setSelectedTags(tags.map(tag=>{
                            return {label:tag.label,id:tag.value}
                        }))}} 
                        
                        isMulti/>
                    </Form.Group>
                    </Col>
                </Row>
  </Form>

  <div className='grid grid-cols-4 items-center gap-8'>
{filteredNotes &&filteredNotes.map(note=>{
    return(
        <div className='mt-8'>

        <NoteCard id={note.id} title={note.title} tags={note.tags}/>
        </div>
    )
})}
  </div>
  </>
  )
}

export default NoteList