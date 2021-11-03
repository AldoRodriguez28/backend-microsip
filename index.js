const express = require('express');
//const cors = require('cors');
const routerApi = require('./routes');



const {logErrors, errorHandler, boomErrorHandler} = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3005;

app.use(express.json())

const whitelist = ['http://localhost:8080'];
const options = {
  origin: (origin, callback) =>{
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no, permitido'))
    }
  }
}
//app.use(cors());

app.get('/', (req, res) => {
  res.send('Hola mi server en Express');
  console.log('http://localhost:3005/');
});

app.get('/nuevaRuta', (req, res) => {
  res.send('estas en NUEVA Ruta');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port, () => {
  console.log('escuchando en el puerto: ' + port)
});




