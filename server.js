const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT =8080;

// Middleware for parsing form data
app.use(bodyParser.urlencoded({ extended: true }));

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (e.g., CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Route for the home page
app.get('/', (req, res) => {
  res.render('index');
});

// Endpoint to handle form submissions
app.post('/submit', (req, res) => {
  const { username, email } = req.body;
  res.render('response', { username, email });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
