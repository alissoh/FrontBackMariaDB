import express from "express";
const app = express()
import conection from './databases/database.mjs'
import bodyParser from "body-parser"
import perguntamodel from "./databases/Pergunta.mjs"

conection
    .authenticate()
    .then(()=> {
        console.log("foi bebe")
    })
    .catch((msgErro)=>{
        console.log(msgErro)
    })
    

app.set('view engine', 'ejs')
app.use(express.static('public'))



app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())




//rotas
app.get('/',(req,res)=>{
    res.render("perguntas")
})
app.post('/perguntas', (req,res)=>{
    const titulo = req.body.titulo
    const pergunta = req.body.pergunta
    perguntamodel.create({
        titulo:titulo,
        descricao:pergunta
    }).then(()=>{
        res.redirect("/")
    })
})

    

const PORT = 8080

app.listen(PORT,()=>{
    console.log('200 OK',{PORT})
})
