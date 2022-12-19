const mongoose = require('mongoose')


const Task = mongoose.model('Task',{
    description: {
        type:String,
        required: true,
        trim:true
    },
    completed:{
        type:Boolean,
        default:false
    }
})

// const newTask = new Task ({
//     description: 'CursoNodeJS-86 to 92',
// })
// newTask.save().then(()=>{
//     console.log(newTask)
// }).catch((error)=>{
//     console.log('Error!',error)
// })

module.exports = Task