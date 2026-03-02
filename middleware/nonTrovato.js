function nonTrovato(req, res, next) {
    
    console.error(req.method, req.originalUrl);
    res.status(404).json({ error: "page not found"});
}

module.exports = nonTrovato;