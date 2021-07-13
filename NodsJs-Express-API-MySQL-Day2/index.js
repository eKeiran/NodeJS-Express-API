import express from 'express';
import usersRoutes from './routes/database_routes.js';
import productsRoutes from './routes/database_routes.js';
const app = express();
const PORT = 7005;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/', usersRoutes)
app.use('/', productsRoutes)

//route:

app.get('/', (req, res) => res.send('Welcome! This is an app made using Node.js and Express having objects from MySQL which utilizes all CURD functions through POSTMAN  :)'));
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
