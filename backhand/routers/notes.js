const express = require('express')
const router = express.Router()
const fetch = require('../middleWare/fetch')
const Note = require('../models/Notes')
const { body, validationResult } = require('express-validator');



//get all notes
router.get('/fetchallnotes', fetch, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id })
        res.json(notes)

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Some error occured")
    }
})
//get add a new note
router.post('/addnote', fetch, [
    body('title', 'name is not valid').isLength({ min: 4 }),
    body('description', 'email is not valid').isLength({ min: 5 }),
], async (req, res) => {
    try {
        const { title, description, tag } = req.body
        // console.log(title)
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const note = new Note({
            title, description, tag, user: req.user.id
        })
        const saveNote = await note.save()
        res.json(saveNote)

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Some error occured")
    }
})

///update note setting
router.put('/updatenote/:id', fetch, async (req, res) => {
    const { title, description, tag } = req.body
    const newNote = {};
    if (title) { newNote.title = title };
    if (description) { newNote.description = description };
    if (tag) { newNote.tag = tag };

    let note= await Note.findById(req.params.id);
    if(!note){return res.status(404).send("not Found")}

    if(note.user.toString()!==req.user.id){
        return res.status(404).send('not allowed')
    }

    note=await Note.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true})
    res.json({note})

})

// deleteing


router.delete('/deletenote/:id', fetch, async (req, res) => {
   

    let note= await Note.findById(req.params.id);
    if(!note){return res.status(404).send("not Found")}

    if(note.user.toString()!==req.user.id){
        return res.status(404).send('not allowed')
    }

    note=await Note.findByIdAndDelete(req.params.id)
    res.json({"Success":"notes has been deleted",note:note})

})

module.exports = router