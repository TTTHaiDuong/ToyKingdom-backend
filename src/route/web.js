import express from 'express';
import authController from '../controllers/auth.js';
import userController from '../controllers/user.js';
import productController from '../controllers/product.js';
import productImageController from '../controllers/product-image.js'
import passport from '../middlewares/passport.js';
import upload from '../middlewares/image-upload.js';

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

    router.get('/', async (req, res) => {
        return res.status(200).json({ message: 'Welcome to Toykingdom Server' })
    });

    router.post('/login', authController.login);
    router.post('/signup', authController.signup);
    router.post('/access/refresh', authController.refreshAccessToken);

    router.get('/product/findOne', productController.findOne);
    router.get('/product/findAll', productController.findAll);

    router.get('/product/image/find', productImageController.find);

    return parentRouter.use('/', router);
}

/** Khởi tạo đường dẫn dành cho user */
const initUserRoutes = (parentRouter) => {
    const router = express.Router();



    return parentRouter.use('/user', router);
}

/** Khởi tạo đường dẫn dành cho admin */
const initAdminRoutes = (parentRouter) => {
    const router = express.Router();

    router.get('/user/findOne', userController.findOne);
    router.get('/user/findAll', userController.findAll);
    router.put('/user/update', userController.update);
    router.delete('/user/delete', userController.destroy);

    router.post('/product/create', productController.create);
    router.get('/product/findOne', productController.findOne);
    router.get('/product/findAll', productController.findAll);
    router.put('/product/update', productController.update);
    router.delete('/product/delete', productController.destroy);

    router.post('/product/image/create', upload.single('image'), productImageController.create);
    router.put('/product/image/update', upload.single('image'), productImageController.update);
    router.delete('/product/image/delete', productImageController.destroy);

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

    router.get('/profile', userController.findOne);

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