const express = require("express");
const app = express();
const port = 8000;
const cors = require('cors');
require('./server/config/mongoose.config');

app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));

const routes = require('./server/routes/product.routes')
routes(app)

app.listen(port, () => console.log('we are running on port 8000'))