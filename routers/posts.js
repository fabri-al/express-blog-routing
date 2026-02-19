const express= require("express");
const router = express.Router();

// index

router.get("/", (req, res) => {

   const post =
        [
            {
                titolo: "fumetti",
                contenuto: "i fumetti più attuali",
                immagine: "/express-blog-intro/public",
                tags: array = [
                    "fumetti",
                    "popolari",
                    "nuovi"
                ]
            },

            {
                titolo: "cibo",
                contenuto: "i migliori cibi",
                immagine: "url",
                tags: array = [
                    "cibi",
                    "popolari",
                    "nuovi"
                ]
            },

            {
                titolo: "macchine",
                contenuto: "le macchine più veloci",
                immagine: "url",
                tags: array = [
                    "macchine",
                    "popolari",
                    "nuovi"
                ]
            },

            {
                titolo: "videogiochi",
                contenuto: "i migliori videogiochi",
                immagine: "url",
                tags: array = [
                    "videogiochi",
                    "popolari",
                    "nuovi"
                ]
            },

            {
                titolo: "film",
                contenuto: "i film più belli",
                immagine: "url",
                tags: array = [
                    "film",
                    "popolari",
                    "nuovi"
                ]

            }
        ];
        res.json(post);
})





//show
router.get ("/:id", (req, res) => {
    res.send(`hai richiesto di MOSTRARE l'id del post con id: ${req.params.id}`);
})

//store
router.post ("/", (req, res) => {
    res.send("hai richiesto di CREARE un nuovo post");
})

//update
router.put("/:id", (req, res)=> {
    res.send(`hai richiesto di AGGIORNARE (completamente) il post con id: ${req.params.id}`);
})

//modify
router.patch("/:id", (req, res) => {
    res.send(`hai richiesto di MODIFICARE il post con id: ${req.params.id}`);
})

//destroy
router.delete("/:id", (req, res) => {
    res.send(`hai richiesto di CANCELLARE il post con id: ${req.params.id}`);
})


module.exports = router;