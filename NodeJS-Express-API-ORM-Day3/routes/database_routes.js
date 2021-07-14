import  express from 'express';
import { createUser, updateUser, readAllUser, readOneUser, delUser } from '../controllers/database_user.js';
import { createProduct, updateProduct, readAllProduct,  readOneProduct, delProduct} from '../controllers/database_prod.js';


const app = express();
app.use(express.json());
const router = express.Router();


router.post('/users', createUser); 
router.put('/users/:id', updateUser);
router.get('/users', readAllUser);
router.get('/users/:id', readOneUser);
router.delete('/users/:id', delUser);

router.post('/products', createProduct); 
router.put('/products/:id', updateProduct);
router.get('/products', readAllProduct);
router.get('/products/:id', readOneProduct);
router.delete('/products/:id', delProduct);


export default router; 