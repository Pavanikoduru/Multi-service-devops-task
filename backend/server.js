// backend/server.js
const express = require('express');
const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
