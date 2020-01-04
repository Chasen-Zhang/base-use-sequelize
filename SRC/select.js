 const {
     Blog,
     User
 } = require('./model')
  !(async function () {
      // 查询一跳记录
    //   const zhangsan = await User.findOne({
    //       where:{
    //           userName: '张三'
    //       }
    //   })
    //   console.log(zhangsan.dataValues)

      // 查询特定的列
    //   const zhangsan = await User.findOne({
    //       attributes: ['userName','nickName'],
    //       where: {
    //           userName: '张三'
    //       }
    //   })
    //   console.log(zhangsan.dataValues)

    // 查询所有
    // const zhangsanBlogList = await Blog.findAll({
    //     where: {
    //         userId: 1
    //     },
    //     order: [
    //         ['id', 'desc']
    //     ]
    // })
    // console.log(zhangsanBlogList.map(blog => blog.dataValues))

    // 分页
    // const blogPageList = await Blog.findAll({
    //     limit: 2,//限制本次查询两条
    //     offset: 2, // 跳过多少条
    //     order: [
    //         ['id', 'desc']
    //     ]
    // })
    //  console.log(blogPageList.map(blog => blog.dataValues))
    //查询总数
    // const blogSum = await Blog.findAndCountAll({
    //     limit: 2,//限制本次查询两条
    //     offset: 0, // 跳过多少条
    //     order: [
    //         ['id', 'desc']
    //     ]
    // })
    // console.log(
    //     blogSum.count,
    //      blogSum.rows.map(blog=>blog.dataValues),
    //     )
    // 连表查询1
    // const blogListWithUser = await Blog.findAndCountAll({
    //     order: [
    //         ['id', 'desc']
    //     ],
    //     include: [
    //         {
    //             model: User,
    //             attributes:['userName', 'nickName'],
    //             where:{
    //                 userName: '张三'
    //             }
    //         }
    //     ]
    // })
    // console.log(
    //     blogListWithUser.count,
    //     blogListWithUser.rows.map(blog => {
    //         const blogValue = blog.dataValues
    //         blogValue.user = blog.user.dataValues
    //         return blogValue
    //     }),
    // )
    // 连表查询2
    const userWithBlog = await User.findAndCountAll({
        attributes: ['userName', 'nickName'],
        include: [
            {
                model: Blog
            }
        ]
    })
    console.log(
        userWithBlog.count,
        userWithBlog.rows.map(user => {
            const userValue = user.dataValues
            userValue.blogs = userValue.blogs.map(blog => blog.dataValues)
            return userValue
        }),
    )

})()