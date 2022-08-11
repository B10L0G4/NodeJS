const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connetClientURL = 'mongodb://127.0.0.1:27017';
const dataBaseName = 'task-manager';

MongoClient.connect(connetClientURL,{useNEwURLParser:true},(error,client)=>{
    if(error){
        return console.log('Unable to connect to DataBase')
    };
    console.log('Conneted Correctly');

    const db = client.db(dataBaseName);
    // db.collection('User').insertOne({
    //     name: 'Vanessa',
    //     age:38
    // });
    // db.collection('users').insertMany([
    //     {
    //         name:'Vanessa',
    //         age:38
    //     },{
    //         name:'Dante',
    //         age:08
    //     }
    // ],(error, result)=>{
    //     if (error){
    //         return console.log('Unable to insert documents')
    //     }
    //     console.log(result.ops)
    // })
    db.collection('tasks').insertMany([
        {
            Task:'Go to terminate class 76',
            situation : true
        },
        {
            Task:'Go to the daily at 9o"lock',
            situation : false
        },
        {
            Task:'Go to the park',
            situation : false
        }
    ],(error, result)=>{
        if (error){
            return console.log('Unable to insert documents')
        }
        console.log(result.ops)
    })










})
