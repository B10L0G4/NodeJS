const users = []

//adduser , removeuser, getuser, getusersinroom

const addUser = ({id, username, room}) => {
  // clear the data 
  username = username.trim().toLowerCase()
  room = room.trim().toLowerCase()

  // validare  the data 
  if(!username || !room){
    return{
      error: 'Username and room are requires'
    }
  }
  // check for existint user 
  const existingUser = users.find((user) => {
    return user.room === room && user.username === username
  })
  // validate username
  if(existingUser){
    return {
      error:'Username is in use '
    }
  }
    // Store user 
    const user = {id, username, room}
    users.push(user)
    return {user}
  }
const removeUser = (id) => {
  const index = users.findIndex((user)=>  user.id === id) 

  if (index !== -1) {
    return users.splice(index, 1)[0]
  }
}
const getUser = (id) => {
  return users.find((user) => user.id === id)
}

getUserInRoom = (room) => {
  room = romm.trim().toLowerCase()
  return users.filter((user) => user.room === room)
}

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUserInRoom
}

//   addUser({
//     id:22,
//     username:'Vanessa',
//     room:'SP'
//   })

//   const user = getUser(22)
//   console.log(user)

//   const userList = getUserInRoom('SP')
//   console.log(userList)

// // const removedUser = removeUser(22)
// // console.log(removeUser)
// // console.log(users)