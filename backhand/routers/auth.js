const express =require('express')
const router = express.Router()
const User = require('../models/Users');
const { body, validationResult } = require('express-validator');
const bcrypt = require("bcryptjs");
const JWT_SEC='huzaifaahmed@'
var jwt = require('jsonwebtoken');
const { findOne } = require('../models/Users');
const fetch= require('../middleWare/fetch')

//Sign up setting
router.post('/createuser', [
    body('name','name is not valid').isLength({ min: 4 }),
    body('email','email is not valid').isEmail(),
    body('password','email is not valid').isLength({ min: 5 }),
],async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {  
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      
      let user=await User.findOne({email:req.body.email});
      if(user){
        return res.status(400).json({error:"already have an email"})
      }
      const salt=await bcrypt.genSalt(10);
      const secpswrd= await bcrypt.hash(req.body.password,salt)

      user=await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secpswrd,
      })
      const data={
        user:{
          id:user.id
        }
      }
      const jwtData =jwt.sign(data,JWT_SEC)
      
      res.json({jwtData})
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Some error occured")
    }
  
  })
//login user setting

router.post('/login', [
  body('email','email is not valid').isEmail(),
  body('password','password can not be blink').exists(),
],async(req, res) => {
  const errors = validationResult(req);
    if (!errors.isEmpty()) {  
      return res.status(400).json({ errors: errors.array() });
    }
    const {email,password}=req.body;
    try {
      let user=await User.findOne({email})
      if(!user){
         return res.status(400).json({error:'use did not exist'})
      }

      const passwordCompre=await bcrypt.compare(password,user.password);
      if(!passwordCompre){
        return res.status(400).json({error:'use did not exist'})

      }
      const data={
        user:{
          id:user.id
        }
      }
      const jwtData =jwt.sign(data,JWT_SEC)
      res.json({jwtData})


    } catch (error) {
      console.log(error.message);
      res.status(500).send("internal server error")
    }
  })
  //get user login
  router.post('/getuser',fetch,async(req, res) => {
    try {
      userId=req.user.id
      const user=await User.findById(userId).select('-password')
      res.send(user)
    } catch (error) {
      console.log(error.message);
      res.status(500).send("internal server error")
    }
  })

  module.exports=router