const { Schema, model } = require('mongoose')

const schema = new Schema({
  title1: {    
    type: String,
    required: true
  },
  email: {    
    type: String,
    required: true
  },
  parol: {    
    type: String,
    required: true
  },
  age: {    
    type: String,
    required: true
  },
  number: {    
    type: String,
    required: true
  },
  city: {    
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
})

module.exports = model('Todo', schema)