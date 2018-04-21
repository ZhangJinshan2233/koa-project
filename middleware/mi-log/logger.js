const log4js = require('log4js');
const access=require('./access')
const methods = ["trace", "debug", "info", "warn", "error", "fatal", "mark"]
//define public parameters
const baseInfo={
    appLogLevel:'debug',//assign log grade
    dir:'logs', //assign log dirertory which storage log
    env:'dev', //assign current enviroment, if it is dev, the log will display in the control desk
    projectName:'koa2-tutorial',//project name
    serverIp:'0.0.0.0'//default ip address
}
module.exports=(options)=>{
    const contextLog={};
    const appenders={};
    // 继承自 baseInfo 默认参数
  const opts = Object.assign({}, baseInfo, options || {})
  // 需要的变量解构 方便使用
  const { env, appLogLevel, dir, serverIp, projectName } = opts
  const commonInfo={projectName,serverIp}
    appenders.cheese={
        type: 'dateFile', //logger type datefile not datafile
        filename: `${dir}/task`,//file name
        pattern: '-yyyy-MM-dd.log',//suffix of file
        alwaysIncludePattern: true  //always have suffix
    }

    //enviroment variable is dev local development consider it as development enviroment
    if(env==="dev"||env==="local"||env==="development"){
        appenders.out={
            type:"console"
        }
    }
 let  config={
        appenders,

        categories:{
            default:{
                appenders:Object.keys(appenders),
                level:appLogLevel
            }
        }
    }

    const logger=log4js.getLogger('cheese');
       
    return async (ctx,next)=>{
        const start=Date.now();
        
        log4js.configure(config)
      
        methods.forEach((method,i)=>{
            contextLog[method]=(message)=>{
                logger[method](access(ctx,message,commonInfo));
            }
        })
        ctx.log=contextLog;
                await next()
        const responseTime=Date.now()-start;
        logger.info(`response time is ${responseTime/1000}s`)
    }
}
