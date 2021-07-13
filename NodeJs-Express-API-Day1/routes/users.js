import express from 'express';
import { createUser, getUser, userID, userUpdate, userDelete } from '../controllers/users.js';
const app = express();
app.use(express.json());
const router = express.Router();

// all routes start from ../users here already:
router.get('/', getUser);
router.post('/', createUser);
//userID route where route is ../users/ID:
router.get('/:ID', userID);
router.delete('/:ID', userDelete);
router.patch('/:ID', userUpdate)

export default router;