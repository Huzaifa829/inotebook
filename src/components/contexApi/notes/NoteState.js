import React,{ useState } from "react";
import NoteContext from "./NoteContext";


const NoteState=(props)=>{

    const AllNotes=[
   
      
        {
          "_id": "641d423707d2af7a09e11a58bfc",
          "user": "64q1b0734eb99890f2dEWR062748",
          "title": "hello world",
          "description": "tw kase hn ap log khna kha kr jana",
          "tag": "aslamulaikum",
          "date": "2023-03-24T06:25:52.057Z",
          "__v": 0
        },
        {
          "_id": "641d42707d2a47a09e11a58bfc",
          "user": "641b0734ebEQW99q890f2qd062748",
          "title": "hello world",
          "description": "tw kase hn ap log khna kha kr jana",
          "tag": "aslamulaikum",
          "date": "2023-03-24T06:25:52.057Z",
          "__v": 0
        },
        {
          "_id": "641d42707d2a5f7a0911ea58bfc",
          "user": "641b0734ebEQW99890f2d06q2748",
          "title": "hello world",
          "description": "tw kase hn ap log khna kha kr jana",
          "tag": "aslamulaikum",
          "date": "2023-03-24T06:25:52.057Z",
          "__v": 0
        },
        {
          "_id": "641d42757d112afs7a09ea58bqfe",
          "user": "641QWEb0734eb99890f2d062748",
          "title": "hello world",
          "description": "tw kase hn ap log khna kha kr jana",
          "tag": "aslamulaikum",
          "date": "2023-03-24T06:25:57.263Z",
          "__v": 0
        },
      ]

      const [note,setnote]=useState(AllNotes)
      //ADD 
      const addNote=(title,description,tag)=>{
        const new_note= {
          "_id": "641d4275711d2afs7a09eASDa58bfe",
          "user": "641b0734eb99890f2d06274ASDq8",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2023-03-24T06:25:57.263Z",
          "__v": 0
        }
        // console.log(note);
        note.push(new_note)
        setnote(note);
      }
      //deleted NOTE

    return (
        <NoteContext.Provider value={{note,addNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;