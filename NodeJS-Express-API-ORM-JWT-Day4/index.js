import express from 'express';
import Routes from './routes/database_routes.js';

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/', Routes)
app.get('/', (_req, res) => res.send('Welcome! This is an app made using Node.js and Express storing data in MySQL database through Sequelize and uses JWT Autentication for user login and registeration  :)'));
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
