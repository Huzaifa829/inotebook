import React, { useContext,useEffect,useState } from "react";
import { AddNote } from "./AddNote";
import NoteContext from "./contexApi/notes/NoteContext";
import { NoteItem } from "./NoteItem";

const Notes = () => {
  const {note} = useContext(NoteContext)
  // console.log('asdkhkasjdaksdjkasjdkjas',contect?.note)
    // const [note]=useState(contect);
    useEffect(()=>{

    },[note])
  return (
    <>
    <AddNote/>
    <div className="row my-3">
    <h1>You Notes</h1>
    {note.map((note)=>{
        return <NoteItem key={note._id} note={note}/>
    })}
    </div>
    </>
  )
}
export default Notes;