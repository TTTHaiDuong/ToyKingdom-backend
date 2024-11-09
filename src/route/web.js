import express from 'express';
import authCtl from '../controllers/auth.js';
import cartCtl from '../controllers/cart.js';
import productCtl from '../controllers/product.js';
import productImageCtl from '../controllers/product-image.js';
import productReviewCtl from '../controllers/product-review.js';
import userCtl from '../controllers/user.js';
import passport from '../middlewares/passport.js';
import upload from '../middlewares/image-upload.js';

const router = express.Router();

/** Khởi tạo tất cả đường dẫn */
const initWebRouters = (app) => {

    router.all('*', checkPermission);

    initPublicRoutes(router);
    initUserRoutes(router);
    initAdminRoutes(router);
    initOwnerRoutes(router);
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

    router.post('/login', authCtl.login);
    router.post('/signup', authCtl.signup);
    router.post('/access/refresh', authCtl.refreshAccessToken);

    router.get('/product/findOne', productCtl.findOne);
    router.get('/product/findAll', productCtl.findAll);

    router.get('/product/image/find', productImageCtl.find);
    router.get('/product/review/findAll', productReviewCtl.findAll);

    return parentRouter.use('/', router);
}

/** Khởi tạo đường dẫn dành cho user */
const initUserRoutes = (parentRouter) => {
    const router = express.Router();

    router.post('/cart/create', cartCtl.create);
    router.get('/cart/find', cartCtl.findByUser);
    router.delete('/cart/delete', cartCtl.destroy);

    router.post('/product/review/create', productReviewCtl.create);
    router.put('/product/review/update', productReviewCtl.update);

    return parentRouter.use('/user', router);
}

/** Khởi tạo đường dẫn dành cho admin */
const initAdminRoutes = (parentRouter) => {
    const router = express.Router();

    router.get('/user/findOne', userCtl.findOne);
    router.get('/user/findAll', userCtl.findAll);
    router.put('/user/update', userCtl.update);
    router.delete('/user/delete', userCtl.destroy);

    router.post('/product/create', productCtl.create);
    router.get('/product/findOne', productCtl.findOne);
    router.get('/product/findAll', productCtl.findAll);
    router.put('/product/update', productCtl.update);
    router.delete('/product/delete', productCtl.destroy);

    router.post('/product/image/create', upload.single('image'), productImageCtl.create);
    router.put('/product/image/update', upload.single('image'), productImageCtl.update);
    router.delete('/product/image/delete', productImageCtl.destroy);

    return parentRouter.use('/admin', router);
}

/** Khởi tạo đường dẫn dành cho owner */
const initOwnerRoutes = (parentRouter) => {
    const router = express.Router();

    router.put('/user/role/change', userCtl.changeRole);

    return parentRouter.use('/owner', router);
}

const initRegisteredRoutes = (parentRouter) => {
    const router = express.Router();

    router.delete('/logout', authCtl.logout);
    router.put('/password/update', authCtl.changePassword);

    router.get('/profile', userCtl.findOne);

    router.delete('/product/review/delete', productReviewCtl.destroy);

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