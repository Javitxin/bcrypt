const express = require('express');
const session = require('express-session');
const { hashedSecret } = require('./crypto/config');
const routes = require('./routes');


const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(
    session({
        secret: hashedSecret,
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false },
    })
);

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});
