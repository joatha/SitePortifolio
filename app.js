const express = require('express')
const app = express()

app.use( express.static( "public" ) )


app.set('view engine', 'ejs')


app.get("/", (req, res)=>{
    res.render('../views/index.ejs')

})
app.listen(8080, ()=>{
    console.log("Servidor rodando")
})