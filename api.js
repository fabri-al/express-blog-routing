console.log("ciao mondo");

const express = require("express") 
const postsRouter = require("./routers/posts_routers");
const nonTrovato = require("./middleware/nonTrovato");
const gestoreErrori = require("./middleware/gestoreErrori");
const controllaOrario = require("./middleware/controllaOrario");

const app = express()
const port = 3000


app.use(express.static('public'));
app.use(express.json());


app.get('/', (req, res) => {
	console.log("chiamata ricevuta");
	res.send('<html><body><h1>hello posts</h1><h2>prova</h2></body></html>')
})

app.use("/posts", postsRouter);

app.use(gestoreErrori);
app.use(nonTrovato);
app.use(controllaOrario);
//avvio applicazione
app.listen(port, () => {
	console.log(`Example app listening on http://localhost:${port}/`)
})