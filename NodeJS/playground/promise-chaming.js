require ('../task-manager/src/db/mongoose');
const Task = require('../task-manager/src/models/tasks')

// Task.findByIdAndUpdate('63057374db27673237747fb2',{completed : true}).then((task)=>{
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then ((result)=>{
//     console.log(result)
// }).catch ((e)=>{
//     console.log(e)
// })
Task.findOneAndDelete({ _id:'63057374db27673237747fb2' }).then((task)=>{
    console.log(task)
    return Task.countDocuments({completed: false})
}).then ((result)=>{
    console.log(result)
}).catch ((e)=>{
    console.log(e)
})
