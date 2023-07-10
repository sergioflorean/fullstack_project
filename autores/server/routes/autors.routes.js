const { createAutor,getAllActors, getOneAutor, deleteAutor, updateAutor } = require("../controller/autors.controller");


module.exports = (app) => {
    
    app.get('/api/autor', getAllActors);
    app.post('/api/autor/new', createAutor);
    app.get('/api/autor/:id', getOneAutor);
    app.delete('/api/autor/:id', deleteAutor);
    app.put('/api/update/:id', updateAutor);

}