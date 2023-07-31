const { Schema, model } = require('mongoose')

const taskShema = new Schema({
    id: String,
    doneTask: Boolean,
    name: String,
    descript: String,
    date: Date,
    hour: Date,
    email: String,
    responsible: String
},
{    
    timestamps:true
})

module.exports = model('task', taskShema)
