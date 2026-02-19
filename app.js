console.log("ciao mondo");

const express = require("express") 
const postsRouter = require("./routers/posts");

const app = express()
const port = 3000


app.use(express.static('public'));

app.get('/', (req, res) => {
	console.log("chiamata ricevuta");
	res.send('<html><body><h1>hello posts</h1><h2>prova</h2></body></html>')
})

app.use("/posts", postsRouter);

//avvio applicazione
app.listen(port, () => {
	console.log(`Example app listening on http://localhost:${port}/`)
})