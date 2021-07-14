import express from 'express';
import UsersRoutes from './routes/database_routes.js';
import ProductsRoutes from './routes/database_routes.js';

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/', UsersRoutes)
app.use('/', ProductsRoutes)


app.get('/', (req, res) => res.send('Welcome! This is an app made using Node.js and Express having objects from Sequelize which utilizes all CURD functions through POSTMAN  :)'));
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
