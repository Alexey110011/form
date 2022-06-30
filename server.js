const express = require('express'); 
const app = express();
const port = process.env.PORT || 4000; 
const bodyParser = require('body-parser')

app.listen(port, () => console.log(`Listening on port ${port}`)); 

app.use (bodyParser.urlencoded({extended:false}))
app.use( bodyParser.json())
app.post('/t', function(req, res){
  if(req.body.username!==""&&  
    req.body.usermail!==""&&
    req.body.usernumber!==""&&
    req.body.birthday!==""){
    res.send({resp:"ACCEPTED"})
    console.log(req.body)}
    else{res.send({resp:"REJECTED"})}
  })
