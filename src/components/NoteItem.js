import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export const NoteItem = (props) => {
    const {note}=props;
  return (
    <div className='col-md-3'>
    <div className="card my-3">
    <div className="card-body">
        <div className='d-flex'>
      <h5 className="card-title">{note.title}</h5>
      <DeleteIcon/>
      <EditIcon/>
      </div>
      <p className="card-text">{note.description}</p>
      <i className="fa-thin fa-trash-can-list"></i>
    </div>
  </div>
  </div>
  )
}
