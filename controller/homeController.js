const HomeService = require('../service/home')

module.exports={
    Index:async (ctx, next) => {
        await ctx.render("home/index", {title: "iKcamp"})
    },

    Home: async (ctx, next) => {
        console.log(ctx.request.query)
       
        ctx.response.body = `<h1>Home page</h1>`
    },

    Login:async (ctx, next) => {
       await ctx.render('home/login',{
           btnName:"GoGo"
       })
    },

    GetOneUser: async (ctx, next) => {
        console.log(ctx.params)
        ctx.response.body = '<h1>HOME page /:id/:name</h1>'
    },
    
    Register:async(ctx,next)=>{
        let params = ctx.request.body
        let name = params.name
        let password = params.password
        let res = await HomeService.register(name,password)
        if(res.status == "-1"){
          await ctx.render("home/login", res.data)
        }else{
          ctx.state.title = "personal center"
          await ctx.render("home/success", res.data)
        }
    }
}