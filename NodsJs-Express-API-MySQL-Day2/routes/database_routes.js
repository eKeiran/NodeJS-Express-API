import  express from 'express';
import { createUser, updateUser, readAllUser, readOneUser, delUser } from '../controllers/database_user.js';
import { createProduct, updateProduct, readAllProduct,  readOneProduct, delProduct} from '../controllers/database_prod.js';


const app = express();
app.use(express.json());
const router = express.Router();

// Users:

router.post('/users', createUser);
router.put('/users', updateUser);
router.get('/users', readAllUser);
router.get('/users/:ID', readOneUser);
router.delete('/users/:ID', delUser);

// Products:
router.post('/products', createProduct);
router.put('/products', updateProduct);
router.get('/products', readAllProduct);
router.get('/products/:ID', readOneProduct);
router.delete('/products/:ID', delProduct);


export default router;