import express from 'express';
import loginController from '../api-controllers/login';
import userController from '../api-controllers/user';
import productController from '../api-controllers/product';
import middlewares from '../middlewares/passport';
import signUp from '../api-controllers/sign-up';

const router = express.Router();

/** Khởi tạo tất cả đường dẫn */
const initWebRouters = (app) => {
    router.all('*', checkPermission);

    initPublicRoutes(router);
    initUserRoutes(router);
    initAdminRoutes(router);
    initOwnerRoutes(router);

    router.get('/token', async (req, res) => { return res.render('token.ejs'); })

    return app.use('/', router);
}

/** Khởi tạo đường dẫn công cộng */
const initPublicRoutes = (parentRouter) => {
    const router = express.Router();

    router.get('/', loginController.getHomePage); // Trang chủ
    router.post('/sign-up', signUp); // Đăng ký
    router.post('/submit-login', loginController.submitLogin); // Yêu cầu đăng nhập

    return parentRouter.use('/', router);
}

/** Khởi tạo đường dẫn dành cho user */
const initUserRoutes = (parentRouter) => {
    const router = express.Router();

    router.get('/get-profile', userController.getUserProfile);
    router.put('/update-profile', userController.updateUserProfile);

    return parentRouter.use('/user', router);
}

/** Khởi tạo đường dẫn dành cho admin */
const initAdminRoutes = (parentRouter) => {
    const router = express.Router();

    router.get('/get-users', userController.getUsers_Admin);
    router.get('/get-product/:id', productController.getOneProduct_Admin);

    return parentRouter.use('/admin', router);
}

/** Khởi tạo đường dẫn dành cho owner */
const initOwnerRoutes = (parentRouter) => {
    const router = express.Router();

    return parentRouter.use('/owner', router);
}

/**
 * Kiểm tra quyền của tài khoản
 */
const checkPermission = async (req, res, next) => {
    if (req.path.startsWith('/user')) await middlewares.checkUser(req, res, next);
    else if (req.path.startsWith('/admin')) await middlewares.checkAdmin(req, res, next);
    else if (req.path.startsWith('/owner')) await middlewares.checkOwner(req, res, next);
    else next();
}

export default initWebRouters;