const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const ejsMate = require('ejs-mate');
const indexRouter = require('./routes/index');
const app = express();

// Setting the view engine to EJS
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('views', './views');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static("public"));
app.use(express.json());
app.use((req, res, next) => {
    next();
  });

// Routes
app.use('/', indexRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
