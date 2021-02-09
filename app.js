const fs = require('fs')

const express = require('express')
const { json } = require('body-parser')

const app = express()
const port = 6500

app.get('/landing', (req, res) => {
   res.send('<h1> Welcome to express server </h1>')
})

app.listen(port, function(err){
   console.log('server is running on port' +port)
})

app.get('/getMovies', function(req, res){
   fs.readFile('data-db.json', (err, result)=>{
      if(err){
         throw err
      }else{
         res.send(JSON.parse(result))
      }
   })  
})