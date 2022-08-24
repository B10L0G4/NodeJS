const { MongoClient, ObjectId} = require('mongodb')
// const mongodb =require('mongodb')
// const MongoClient =mongodb.MongoClient
// const ObjectId = mongodb.ObjectId
const connetClientURL = 'mongodb://127.0.0.1:27017';
const dataBaseName = 'task-manager';

// const id= new ObjectId();
// console.log(id)
// console.log(id.getTimestamp())

MongoClient.connect(connetClientURL,{useNEwURLParser:true},(error,client)=>{
    if(error){
        return console.log('Unable to connect to DataBase')
    };
    console.log('Conneted Correctly');

    const db = client.db(dataBaseName);

   //_________________________________________Create____________________________________________//

    // db.collection('users').insertOne({  // add um item 
    //     name: 'Alice',
    //     age:38
    // });
    // db.collection('users').insertMany([ add vários itens 
    //     {
    //         name:'Vanessa',
    //         age:38
    //     },{
    //         name:'Dante',
    //         age:08
    //     }
    // ],(error, result)=>{
    //     if (error){ // trataiva de erro
    //         return console.log('Unable to insert documents')
    //     }
    //     console.log(result.ops)
    // })
    // db.collection('tasks').insertMany([
    //     {
    //         Task:'Go to terminate class 76',
    //         situation : true
    //     },
    //     {
    //         Task:'Go to the daily at 9o"lock',
    //         situation : false
    //     },
    //     {
    //         Task:'Go to the park',
    //         situation : false
    //     }
    // ],(error, result)=>{
    //     if (error){
    //         return console.log('Unable to insert documents')
    //     }
    //     console.log(result.ops)
    // })
//__________________________________________Read_____________________________________________//

    // db.collection('tasks').findOne({situation :true},(error, task )=>{ // encontra 1 item no BD
    //     if (error){
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(task)
    // })

    // db.collection('tasks').find({situation:false}).toArray((error, tasks )=>{ // Encontra Vários itens no BD
    //     if (error){
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(tasks)
    // })
//_________________________________________Update___________________________________________//

//const UpdatePromise = db.collection('users').updateOne({
// db.collection('users').updateOne({
//     _id: new ObjectId('62f5a0715b57625519106b7a')
// },{
//     // $set:{
//     //     name: 'Mary'
//     // }
//         $inc:{
//         age: -1
//     }

// //UpdatePromise().then((result)=>{ quando utilizando promises não precisamos criar uma variavel ou chamar a função 
// }).then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// })

// db.collection('tasks').updateMany({
//     situation:false 
//     },{ // pode-se deixar as aspas vazias para mudar todos os documentos 
//         $set:{
//             situation :true 
//         }
//     }
// ).then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// })



//_________________________________________Delete___________________________________________//

// db.collection('users').deleteMany({
//     age:38
// }).then((result)=>{
//     console.log(result)
// }).catch ((error)=>{
//     console.log(error)
// })
// db.collection('tasks').deleteOne ({
//     _id: new ObjectId('62f4e1996ef896ece34973ae') 
//     // ou pela  Task : 'Go to the Park'
// })

})
