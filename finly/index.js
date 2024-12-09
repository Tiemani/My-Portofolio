const express = require('express');
const morgan = require('morgan');

const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(morgan('dev'));

app.get('/', (req, res) => {
res.render('index.ejs', { message: 'Hello From Node.js' });
});

app.get('/contact', (req, res) => {
res.render('index.ejs', { message: 'The Contact Page' });
});

app.get('/about', (req, res) => {
res.render('index.ejs', { message: 'The About Page' });
});

app.get('*', (req, res) => {
res.status(404).render('index.ejs', { message: 'Not Found' });
});

const PORT = 3000;

app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});