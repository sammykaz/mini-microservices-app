const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

const events = [];

app.post('/events', (req, res) => {
  const event = req.body;

  //Store events in case any microservice fails and events failed to process.
  events.push(event);

  //Assuming all these always succeed.
  axios.post('http://posts-srv:4000/events', event); //Post Service
  // axios.post('http://localhost:4001/events', event); //Comment Service
  // axios.post('http://localhost:4002/events', event); //Query Service
  // axios.post('http://localhost:4003/events', event); //Moderation Service

  res.send({ status: 'OK' });
});

//Get Events that were missed when services were down.
app.get('/events', (req, res) => {
  res.send(events);
});

app.listen(4005, () => {
  console.log('Listening on 4005');
});
