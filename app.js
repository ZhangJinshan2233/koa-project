const koa = require('koa');
const router=require('./router/routers')
const middleware=require('./middleware/index');
const app = new koa();
middleware(app)
app.use(router.homeRouter.routes())
app.listen(3000, () => {
    console.log('server is running at http://localhost:3000')
})