 const {
     Blog,
     User
 } = require('./model') 
 !(async function () {
     const deleteBlog = await Blog.destroy({
         where: {
             id: 4
         }
     })
     console.log(deleteBlog)
 })()