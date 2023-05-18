const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let messages = [];

app.post('/messages', (req, res) => {
  const message = req.body.message;
  messages.push(message);

  // You can perform additional server-side operations with the message if needed

  res.json({ success: true });
});

app.get('/messages', (req, res) => {
  res.json({ messages: messages });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
