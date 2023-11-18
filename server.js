
const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const engine  = require('express-handlebars');

app.use(express.json())
app.use(express.urlencoded({extended:true}));


app.engine('handlebars',  engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

const user =[
   
]
//Rota Home
app.get('/',(req,res) =>{
    res.json(user)
})

app.get('/usuario',(req,res) =>{
    res.render('usuario')
    console.log(req.body)
})

app.post('/usuario',(req, res) =>{
    user.push(req.body)
    res.json({status:'Criado!'})
})

app.delete('/usuario',(req, res) =>{
    user.pop(req.body)
    res.json({status:'Deletado!'})
})

//Rodando o servidor
app.listen(8000,()=>{
    console.log('rodando')
})