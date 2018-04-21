module.exports={
    register:async(name,password)=>{
        let data
        if (name == 'ikcamp' && password == '123456') {
            data = {
                status:0,
                data:{
                    title:"person center",
                    content:"welcome to person center"
                }
            }
          } else {
            data={
                status:-1,
                data:{
                    title:"longin failed",
                    content:"please input correct account information"
                }
            }
          }
          return data
    }
}