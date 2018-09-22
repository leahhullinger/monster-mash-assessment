const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const controller = require('./controller')

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/monsters', controller.read)
app.post('/monsters', controller.create)
app.delete('/monsters/:name', controller.delete)

app.listen(3005, () => {
  console.log('listening on port 3005')
})