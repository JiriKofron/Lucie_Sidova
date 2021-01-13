const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mailer = require('./mailer');
const helmet = require('helmet');

const app = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/submit', (req, res) => {
  res.send('Požadavek poslán!');
});

app.post('/submit', async (req, res) => {
  try {
    let name = req.body.name;
    let email = req.body.email;
    let phone = req.body.phone;
    let message = req.body.message;
    // console.log(name, email, phone, message);
    // console.log(req.body);
    mailer(name, email, phone, message);
    res.sendStatus(200);
  } catch {
    if (err) {
      console.log(err);
    }
  }
});

app.listen(4000, () => {
  console.log('app listen on port 4000');
});
