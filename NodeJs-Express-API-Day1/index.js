import express from 'express';
import usersRoutes from './routes/users.js';

const api = express();
const PORT = 7000;

api.use(express.json());
api.use(express.urlencoded({extended: true}));
api.use('/users', usersRoutes);

//route:

api.get('/', (req, res) => res.send('Welcome! This is an API made using Node.js and Express which utilizes all CURD functions through POSTMAN :)'));
api.listen(PORT, () => console.log(`Server running on port:- http://localhost:${PORT}`));
