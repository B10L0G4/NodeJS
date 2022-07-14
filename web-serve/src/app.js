
const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
// define caminhos para as configuracoes do express
const publicDirectoryPath = path.join(__dirname, '../public') 
const viewsPath = path.join(__dirname,'../template/views')
const partialsPath = path.join(__dirname, '../template/partial')

// setup handbars engine e visualizacao de locais 
app.set('view engine','hbs')
app.set('views', viewsPath)

// setup estatico para o diretorio do servidor 
app.use(express.static(publicDirectoryPath))
hbs.registerPartials(partialsPath)

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
        title:'Help',
        name:'Vanessa.C.Carraro',
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
