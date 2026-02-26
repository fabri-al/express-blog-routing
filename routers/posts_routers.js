const express= require("express");
const router = express.Router();
const posts = require("../data/posts_data");
const postController = require("../controllers/postController")

// index
router.get("/", postController.index);

//show
router.get ("/:id", postController.show);

//store
router.post ("/", (req, res) => {
console.log("hai richiesto di CREARE un nuovo post", req.body);
res.send("hai richiesto di CREARE un nuovo post");
});


//update
router.put("/:id", postController.update);

//modify
router.patch("/:id", postController.modify);

//destroy
router.delete("/:id", postController.destroy);


module.exports = router;