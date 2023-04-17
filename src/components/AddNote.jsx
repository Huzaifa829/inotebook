import React, { useContext,useState } from "react";

import NoteContext from "./contexApi/notes/NoteContext";


export const AddNote = () => {
    const contect=useContext(NoteContext)
   
    const {addNote}=contect
    const [note,setNote]=useState({title:"",description:"",tag:"default"})
    const onchange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value})
        console.log(note)
    }
    const handleClick=(e)=>{
        e.preventDefault()
        addNote(note.title,note.description,note.tag)
        console.log(contect)
    }
    return (
        <div className="container my-3">
    <h1>This is ADD NOTE</h1>
    <form>
        <div className="mb-3">
            <label htmlFor="title" className="form-label">Email address</label>
            <input type="text" className="form-control" name="title" id="title" aria-describedby="emailHelp"  onChange={onchange} />
        </div>
        <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input type="text" className="form-control" name="description" id="description" onChange={onchange} />
        </div>
        <div className="mb-3 form-check">
            <input type="text" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
    </form>
</div>
  )
}
