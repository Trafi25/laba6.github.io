const {Router} = require('express')
const Todo = require('../models/Todo')
const ma = require('../models/Todo')
const router = Router()

router.get('/', async (req,res) => {
const todos = await Todo.find({})

    res.render('index',{
title: 'list',
isIndex: true,
todos
    })
})

router.get('/create',(req, res) =>{
    res.render('create', {
        title: 'Create ',
        isCreate: true
    })
})
router.get('/info',(req, res) =>{
    res.render('info', {
        title: 'info',
        isCreate: true
    })
})
 
router.post('/create', async (req, res) =>{
    const todo = new Todo({
        title1: req.body.title1,
        email: req.body.email,  
        parol: req.body.parol,
        age: req.body.age,
        number: req.body.number,
        city: req.body.city 
    })
    await todo.save()
    res.redirect('/')
}) 
router.get('/complete', async (req,res) => {
    const todo = await Todo.findById(req.body.id)    
        res.send('hello world');
       
 }) 

module.exports = router 