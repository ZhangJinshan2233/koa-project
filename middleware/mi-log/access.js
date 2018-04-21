module.exports=(ctx,message,commonInfo)=>{
    const{
        method,//request method 
        url,    
        host,
        headers,
    }=ctx.request;

    const client={
        method,
        url,
        host,
        message,
        referer:headers['referer'],//request source address
        userAgent:headers['user-agent']//client information
    }

    return JSON.stringify(Object.assign(commonInfo,client))
}