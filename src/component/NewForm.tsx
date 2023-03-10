import React, { FormEvent, useRef, useState } from 'react'
import { Form } from 'react-bootstrap'
import Button from 'react-bootstrap/esm/Button'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import Stack from 'react-bootstrap/esm/Stack'
import CreatableReactSelect from 'react-select/creatable'
import { NoteData, NoteFormProps, Tag } from '../interface/Interface'
import {v4 as uuidV4} from 'uuid'
import {useNavigate} from 'react-router-dom'




function NewForm({onSubmit,onAddTag,availableTags}:NoteFormProps) {
    const titleRef=useRef<HTMLInputElement>(null)
    const markdownRef=useRef<HTMLInputElement>(null)
    const[selectedTags,setSelectedTags] = useState<Tag[]>([])
    const navigate = useNavigate()


//      interface NoteFormProps{
//     onsubmit:(data:NoteData)=>void
// }

    const handleSubmit=(e:FormEvent)=>{
        e.preventDefault()
        onSubmit({
        title:titleRef?.current?.value,
        markdown:markdownRef?.current?.value,
        tags:selectedTags
})
navigate('..')
    }

  return (
    <div className='w-1/2 self-center'>
        <Form onSubmit={handleSubmit}>
            <Stack gap={4}>
                <Row>
                    <Col>
                    <Form.Group controlId='title'>
                        <Form.Label>Title</Form.Label>
                        <Form.Control required ref={titleRef}/>
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group controlId='tags'>
                        <Form.Label>Tags</Form.Label>
                        <CreatableReactSelect 

                        onCreateOption={label=>{
                            const newTag= {id:uuidV4(),label}
                            onAddTag(newTag)
                            setSelectedTags(prev=>[...prev,newTag])
                        }}
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
                <Form.Group controlId='markdown'>
                        <Form.Label>Body</Form.Label>
                        <Form.Control required as= "textarea" ref={markdownRef} rows={10}/>
                    </Form.Group>

                    <Stack direction='horizontal' gap={4} className="justify-content-end">
                        <Button type="submit" className='text-white font-medium bg-blue-400 hover:bg-blue-500 px-4' variant='primary'>Save</Button>
                        <Button type="button" variant='outline-secondary' onClick={()=>navigate('..')}>Cancel</Button>
                    </Stack>
            </Stack>
        </Form>
    </div>
  )
}

export default NewForm
