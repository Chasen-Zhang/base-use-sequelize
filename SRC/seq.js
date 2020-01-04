const Sequelize = require('sequelize')
const conf = {
    host: 'localhost',
    dialect: 'mysql',
    pool: { // 线上使用
        max: 5, // 连接池最大的连接数量
        min: 0, // 最小
        idle: 10000 // 如果一个连接池10s之内没有被使用，则释放。
    }
}
const seq = new Sequelize('koa2', 'root', 'xxxxx', conf)



module.exports = seq;