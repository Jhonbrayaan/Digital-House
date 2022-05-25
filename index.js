const { request } = require("express");
const express = require("express");
const app = express();
const port = 3000;

app.set("view engine" , "ejs");
app.set('views' , './views')

app.use(express.static(__dirname + '/public/'));

app.get("/", (request , response) => {
    let titulo = "pagina inicial"
    response.render("pages/home" , {titulo });
});

app.get("/termos", (request , response) => {
    let titulo = "termos";
    response.render("pages/termos" , {titulo});
});

app.get("/time", (request , response) => {
    let titulo = "time";
    response.render("pages/time" , {titulo});
});

app.get("/cadastro", (request , response) => {
    let titulo = "cadastro";
    response.render("pages/cadastro" , {titulo});
});

app.get("/login" , (request , response)=> {
    let titulo = "login";
    response.render("pages/login" , {titulo});
})

app.get("/plano" , (request , response)=> {
    let titulo = "planos";
    response.render("pages/plano" , {titulo});
})
app.get("/pagamento" , (request , response)=> {
    let titulo = "pagamentos";
    response.render("pages/pagamentos" , {titulo});
})


app.listen(port ,() => {
 console.log(`servidor iniciado na porta ${port}`) 
});