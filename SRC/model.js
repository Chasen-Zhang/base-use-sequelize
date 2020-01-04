const Sequelize = require('sequelize')
const seq = require('./seq')
// 创建Users 模型 users
const User = seq.define('user', {
    // id 会自动创建
    userName: {
        type: Sequelize.STRING, // 对应varchar（255）
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nickName: {
        type: Sequelize.STRING,
        comment: '昵称'
    },
    // 自动创建createAt updateAt
})

// 创建blog模型
const Blog = seq.define('blog', {
    title: {
        type: Sequelize.STRING, // 对应varchar（255）
        allowNull: false
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    // 自动创建createAt updateAt
})

// 外键关联
Blog.belongsTo(User,{
    // 创建Blog.userId -> User.id
    foreignKey: 'userId'
})
// 3.
User.hasMany(Blog, {
    foreignKey: 'userId'
})
// 2. Blog.belongsTo(User)
module.exports = {
    User,
    Blog
}
