// Create a method to get incomplete tasks

// 1- Define GetTasksToDo method 
// 2- Use Filter to return the incompletes tasks (arrow functions)
// 3- test your work by running the script  

const tasks = {
    tasks: [{
        text:'Grossering Shopping',
        completed: true
    },{ 
        text: 'Clean Yard',
        completed: false

    },{
        text: 'Film course',
        completed: false
    }],
    GetTasksToDo(){
        return this.tasks.filter((tasks) => {
            return tasks.completed === false

        })
        return tasksToDo
    }
}

console.log(tasks.GetTasksToDo())