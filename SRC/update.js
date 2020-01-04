 const {
     Blog,
     User
 } = require('./model')
 !(async function(){
    const updateRes = await User.update({
        nickName: 'zhangsan1'
    },{
        where: {
            userName: '张三'
        }
    })
    console.log(updateRes[0]>0)
 })()