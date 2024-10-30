import express from 'express';
import accountController from '../controllers/account';
import userController from '../controllers/user';
import productController from '../controllers/product';
import passport from '../middlewares/passport';

const router = express.Router();

/** Khởi tạo tất cả đường dẫn */
const initWebRouters = (app) => {

    router.all('*', checkPermission);
    initPublicRoutes(router);
    // initUserRoutes(router);
    initAdminRoutes(router);
    // initOwnerRoutes(router);
    initRegisteredRoutes(router);

    return app.use('/api', router);
}

/** Khởi tạo đường dẫn công cộng */
const initPublicRoutes = (parentRouter) => {
    const router = express.Router();

    router.post('/login', accountController.login); // Yêu cầu đăng nhập
    router.post('/signup', accountController.signup);
    router.get('/product/findAll', productController.findAllProducts);
    router.get('/product/findOne', productController.findOneProduct);

    // Đăng ký
    // router.get('/product/find_all', productController.findOne_Amin);

    return parentRouter.use('/', router);
}

/** Khởi tạo đường dẫn dành cho user */
const initUserRoutes = (parentRouter) => {
    const router = express.Router();

    router.get('/profile', userController.getUserProfile);
    router.put('/update', userController.updateUserProfile);

    return parentRouter.use('/user', router);
}

/** Khởi tạo đường dẫn dành cho admin */
const initAdminRoutes = (parentRouter) => {
    const router = express.Router();

    // router.get('/user/find', userController.getUsers_Admin);
    // router.delete('/user/delete', productController.getOneProduct_Admin);

    router.post('/product/create', productController.createProduct);
    router.get('/product/findAll', productController.findAllProducts);
    router.get('/product/findOne', productController.findOneProduct);
    router.put('/product/update', productController.updateProduct);
    router.delete('/product/delete', productController.deleteProducts);

    return parentRouter.use('/admin', router);
}

/** Khởi tạo đường dẫn dành cho owner */
const initOwnerRoutes = (parentRouter) => {
    const router = express.Router();

    router.put('/role/update',);

    return parentRouter.use('/owner', router);
}

const initRegisteredRoutes = (parentRouter) => {
    const router = express.Router();

    router.put('/password/update', accountController.changePassword);

    return parentRouter.use('/registered', router);
}

/**
 * Kiểm tra quyền của tài khoản
 */
const checkPermission = async (req, res, next) => {
    if (req.path.startsWith('/user')) await passport.checkUser(req, res, next);
    else if (req.path.startsWith('/admin')) await passport.checkAdmin(req, res, next);
    else if (req.path.startsWith('/owner')) await passport.checkOwner(req, res, next);
    else if (req.path.startsWith('/registered')) await passport.checkRegistered(req, res, next);
    else next();
}

export default initWebRouters;