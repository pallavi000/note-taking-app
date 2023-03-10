import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import NewNote from './pages/NewNote'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home'
import NoteList from './pages/NoteList'
import { useLocalStorage } from './useLocalStorage'
import { NoteData, RawNote, Tag } from './interface/Interface'
import {v4 as uuidV4} from 'uuid'
import {NoteLayouts} from './pages/NoteLayouts'
import NoteDetail from './pages/NoteDetail'


function App() {

  const[notes,setNotes] = useLocalStorage<RawNote[]>("NOTES",[])
  const[tags,setTags] = useLocalStorage<Tag[]>("TAGS",[])

  console.log(notes,'jjjjjjjjjj')

  const noteWithTags=useMemo(()=>{
      return notes.map(note=>{
          return {...note,tags:tags.filter(tag=>note.tagIds.includes(tag.id))}
      })
  },[notes,tags])

  function onCreateNote({tags,...data}:NoteData){

      setNotes(prevNotes=>{
      return [
          ...prevNotes,
          {...data,id: uuidV4(),tagIds:tags.map(tag=>tag.id)}
      ]
})
  }


  function addTag(tag:Tag){
      setTags(prev=>[...prev,tag])
  }




  return (
   <Router>
    <Routes>
      <Route path="/create-note" element={<NewNote onCreateNote={onCreateNote} onAddTag={addTag}/>}/>
      <Route path="/" element={<NoteList availableTags={tags} notes={noteWithTags} />}></Route>
      <Route path="/:id" element={<NoteLayouts notes={noteWithTags}/>}>
        <Route index element={<NoteDetail/>}/>
        <Route index element={<h1>Edit</h1>}/>
      </Route>
    </Routes>
    </Router>
  )
}

export default App
