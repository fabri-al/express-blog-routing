
const lista = require("../data/posts_data");
const express= require("express");
const router = express.Router();
const postController = require("../controllers/postController")

function index(req, res) {
    /* res.json(post); */

    let risultato = lista;


    if (req.query.tags) {
        risultato = lista.filter(post => post.tags.includes(req.query.tags));
    }
}

function show(req, res) {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({ errore: "user error", messaggio: "id non valido" });
    }

    const risultato = lista.find(post => post.id == id);
    
    if (!risultato) {
        
        return res.status(404).json({ errore: "non trovato", messaggio: "post non trovato" });
	}

    return res.json(risultato);
}

function store(req, res) {

	const newPost = {
		
        id: lista[lista.length-1].id +1,
		titolo: req.body.titolo,
		contenuto: req.body.contenuto,
		tags: req.body.tags
	};
    
	lista.push(newPost);
  
	return res.status(201).json(newPost)
    
}

function update(req, res) {
    
    const id = Number(req.params.id);

    if (isNaN(id)) {
        
        return res.status(400).json({errore: "user error", messaggio: "id non valido"})
    }

    const risultato = lista.find(post => post.id == id);

    if (!risultato) {
        return res.status(404).json({ errore: "non trovato", messaggio: "post non trovato"});
    }


        risultato.titolo = req.body.titolo;
		risultato.contenuto = req.body.contenuto;

        return res.json(risultato);

}

function modify(req, res) {
    /* res.send(`hai richiesto di MODIFICARE il post con id: ${req.params.id}`); */
     const id = Number(req.params.id);

    if (isNaN(id)) {
        
        return res.status(400).json({errore: "user error", messaggio: "id non valido"})
    }

    const risultato = lista.find(post => post.id == id);

    if (!risultato) {
        return res.status(404).json({ errore: "non trovato", messaggio: "post non trovato"});
    }

    if (req.body.titolo !== undefined) {
        risultato.titolo = req.body.titolo;
    }

    if (req.body.contenuto !== undefined) {
        risultato.contenuto = req.body.contenuto;
    }

    if (req.body.tags !== undefined) {
        risultato.tags = req.body.tags;
    }

return res.json(risultato);

}

function destroy(req, res) {

    const id = Number(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({ errore: "user error", messaggio: "id non valido" });
    }

    const risultato = lista.find(post => post.id == id);
    
    if (!risultato) {
        
        return res.status(404).json({ errore: "non trovato", messaggio: "post non trovato" });
	}

	lista.splice(lista.indexOf(risultato));

	console.log(`post:${id} eliminato`, lista);

	return res.sendStatus(204);
    
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