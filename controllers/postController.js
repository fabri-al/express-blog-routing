
const post = require("../data/posts_data");
const express= require("express");
const router = express.Router();
const postController = require("../controllers/postController")

function index(req, res) {
    res.json(post);
}

function show(req, res) {
    res.json(post[req.params.id]);
    res.send(`hai richiesto di MOSTRARE l'id del post con id: ${req.params.id}`);
}

function store(req, res) {

	const newPost = {
		
        id: post[post.length-1].id +1,
		titolo: req.body.titolo,
		contenuto: req.body.contenuto,
		
	};
    
	post.push(newPost);
    console.log("array:", post)

	return res.status(201).json(newPost)
    
}

function update(req, res) {
    
    const id = Number(req.params.id);

    if (isNaN(id)) {
        
        return res.status(400).json({errore: "user error", messaggio: "id non valido"})
    }

    const risultato = post.find(post => post.id == id);

    if (!risultato) {
        return res.status(404).json({ errore: "non trovato", messaggio: "post non trovato"});
    }


        risultato.titolo = req.body.titolo;
		risultato.contenuto = req.body.contenuto;

        return res.json(risultato);

}

function modify(req, res) {
    res.send(`hai richiesto di MODIFICARE il post con id: ${req.params.id}`);
}

function destroy(req, res) {

    const id = Number(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({ errore: "user error", messaggio: "id non valido" });
    }

    const risultato = post.find(post => post.id == id);
    
    if (!risultato) {
        
        return res.status(404).json({ errore: "non trovato", messaggio: "post non trovato" });
	}

	post.splice(post.indexOf(risultato));

	console.log(`post:${id} eliminato`, post);

	return res.sendStatus(204);
    
}

//update
router.put("/:id", (req, res) => {;
console.log(`hai richiesto di AGGIORNARE (completamente) il post con id: ${req.params.id}`, req.body);
});


//store
router.post ("/", (req, res) => {
console.log("hai richiesto di CREARE un nuovo post", req.body);

});


//update
router.put("/:id", (req, res) => {;
console.log(`hai richiesto di AGGIORNARE (completamente) il post con id: ${req.params.id}`, req.body);
});


const controller = {

    index,
    show,
    store,
    update,
    modify,
    destroy
}

module.exports = controller;