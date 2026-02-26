
const post = require("../data/posts_data");

function index(req, res) {
    res.json(post);
}

function show(req, res) {
    res.json(post[req.params.id]);
    res.send(`hai richiesto di MOSTRARE l'id del post con id: ${req.params.id}`);
}

function store(req, res) {
    res.send("hai richiesto di CREARE un nuovo post");
}

function update(req, res) {
    res.send(`hai richiesto di AGGIORNARE (completamente) il post con id: ${req.params.id}`);
}

function modify(req, res) {
    res.send(`hai richiesto di MODIFICARE il post con id: ${req.params.id}`);
}

function destroy(req, res) {

    const id = Number(req.params.id);

    if (isNaN(id)) {
        return red.status(400).json({ errore: "user error", messaggio: "id non valido" });
    }

    const risultato = post.find(post => post.id == id);
    
    if (!risultato) {
        
        return res.status(400).json({ errore: "non trovato", messaggio: "post non trovato" });
	}

	post.splice(post.indexOf(risultato));

	console.log(`post:${id} eliminato`, post);

	return res.sendStatus(204);
    


  /*   res.send(`hai richiesto di CANCELLARE il post con id: ${req.params.id}`); */
}


const controller = {

    index,
    show,
    store,
    update,
    modify,
    destroy
}

module.exports = controller;