const path = require('path')
const express = require('express')
const app = express()

const publicDirectoryPath = path.join(__dirname, '../public') 
app.set('view engine','hbs')
app.use(express.static(publicDirectoryPath))


app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather App',
        name:'Vaness.C.Carraro'
    })
})
app.get ('/about',(req,res)=>{
    res.render('about',{
        title:'About Weather App',
        name:'Vanessa.C.Carraro'
    })   
})
app.get ('/help',(req,res)=>{
    res.render('help',{
        textHelp:'Help test for Weather App'
    })
})
app.get('/weather',(req, res )=> {
    res.send({
        forecast: 'Temperature Now is 20  ' ,
        location: 'Paris'
    })
})
app.listen(3000,() =>{
    console.log('Server is up on port 3000')
})
console.log('Test tag ')
