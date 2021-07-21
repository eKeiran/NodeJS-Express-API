import  express from 'express';
import { signUp,  signIn, userInfo, allUserInfo, readOneUser, updateUser, delUser } from '../controllers/database_user.js';
import { createProduct, updateProduct, readAllProduct,  readOneProduct, delProduct} from '../controllers/database_prod.js';
import verifyToken from '../authenticate/jwtTokenVerify.js'
import { checkDuplicateEmailAndPhone } from '../authenticate/signUpVerify.js';

const app = express();
app.use(express.json());
const router = express.Router();

// JWT AUTH USER:
router.post('/signIn', signIn);
router.post('/signUp', [checkDuplicateEmailAndPhone], signUp)
router.get('/signIn/user', [verifyToken], userInfo);

// JWT AUTH ADMIN:
router.get('/signIn/user/all', [verifyToken], allUserInfo); 
router.put('/signIn/user/:id',  [verifyToken], updateUser);  
router.get('/signIn/user/:id',  [verifyToken], readOneUser);  
router.delete('/signIn/user/:id',  [verifyToken], delUser);  

//PRODUCTS:
router.post('/products', createProduct); 
router.put('/products/:id', updateProduct);
router.get('/products', readAllProduct);
router.get('/products/:id', readOneProduct);
router.delete('/products/:id', delProduct);


export default router; 