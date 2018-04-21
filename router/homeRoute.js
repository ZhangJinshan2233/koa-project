const router = require('koa-router')();

const Controller=require('../controller/controller')
router
    .get('/',Controller.homeController.Index )

router
    .get('/home',Controller.homeController.Home)

router
    .get('/home/:id/:name',Controller.homeController.GetOneUser)

router
    .get('/user', Controller.homeController.Login)

router
    .post('/user/register',Controller.homeController.Register)


 module.exports=router;