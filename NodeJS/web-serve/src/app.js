const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// para rodar o app, node src/app.js

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


app.get('/',(req,res)=>{
    res.render('index',{
        title:'Weather App',
        name:'Vanessa.C.Carraro'
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

app.get('/help/*',(req, res)=> { // não esta funcionando como esperado 
    res.render('404',{
        title:'404',
        name: 'Vanessa.C.Carraro',
        errorMessage: 'Help Article Not Found',
    })
}),

app.get('/weather',(req, res )=> {   
    if (!req.query.address){
        return res.send({
            error:'Please provide any adress'
        })
    }
    geocode(req.query.address,(error, {latitude, longitude, location}= {} )=> {
        if (error){
            return res.send({error})
        }
            forecast(latitude,longitude, (error, forecastData)=> { 
                if (error){
                    return res.send({error})
                    }
                res.send({
                    forecast: forecastData,
                    location,
                    address:req.query.address
                })  
            })
        })
})
app.get('*',(req, res) => {
    res.render('404',{
        title:'404',
        name: 'Vanessa.C.Carraro',
        errorMessage: 'Page Not Found',
    })

}),
app.listen(3000,() =>{
    console.log('Server is up on port 3000')
})
// console.log('Test tag ')
