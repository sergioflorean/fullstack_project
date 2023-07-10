const { createProduct, getAllProducts, getOneProduct, deleteProduct, updateProduct } = require("../controller/product.controller");


module.exports = (app) => {
    app.get('/api/product', getAllProducts);
    app.post('/api/product/new', createProduct);
    app.get('/api/product/:id', getOneProduct);
    app.delete('/api/product/:id', deleteProduct);
    app.put('/api/update/:id', updateProduct);
}