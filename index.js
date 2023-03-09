const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const { logErrors, errorHanlder, boomErrorHanlder } = require('./middlewares/errorHandler');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const whitelist = ['http://localhost:8080/', 'about:blank'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.get('/', (req, res) => {
  res.send('Hello, this is my server in express');
});

app.get('/new-endpoint', (req, res) => {
  res.send('Hi, I am a new endpoint');
});

routerApi(app);
app.use(cors(options));

app.use(logErrors);
app.use(boomErrorHanlder);
app.use(errorHanlder);

app.listen(port, () => {
  console.log('My port ' +  port);
});
