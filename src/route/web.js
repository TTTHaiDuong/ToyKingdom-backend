import express from 'express';
import authController from '../controllers/auth';
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

    app.use('/', router);
    app.use((req, res) => {
        return res.status(404).json({
            path: req.path,
            method: req.method,
            message: 'Path not found'
        });
    });
}

/** Khởi tạo đường dẫn công cộng */
const initPublicRoutes = (parentRouter) => {
    const router = express.Router();

    router.get('/', (req, res) => { return res.render('home-page.ejs') });
    router.post('/login', authController.login); // Yêu cầu đăng nhập
    router.post('/signup', authController.signup);
    router.post('/access/refresh', authController.refreshAccessToken);

    router.get('/product/findAll', productController.findAll);
    router.get('/product/findOne', productController.findOne);

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

    router.get('/user/findAll', userController.findAll);
    // router.delete('/user/delete', productController.getOneProduct_Admin);

    router.post('/product/create', productController.create);
    router.get('/product/findAll', productController.findAll);
    router.get('/product/findOne', productController.findOne);
    router.put('/product/update', productController.update);
    router.delete('/product/delete', productController.destroy);

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

    router.delete('/logout', authController.logout);
    router.put('/password/update', authController.changePassword);

    router.get('/user/findOne', userController.findOne);

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