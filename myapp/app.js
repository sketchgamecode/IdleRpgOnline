const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();  // 加载.env环境变量

const app = express();

// 中间件配置
app.use(cors());  // 启用跨域
app.use(bodyParser.json());  // 解析JSON请求体
app.use(bodyParser.urlencoded({ extended: true }));

// API路由
const apiRouter = require('./routes/api');
app.use('/api', apiRouter);  // 所有API访问前缀

// 错误处理中间件
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// // 启动服务器
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`API服务器运行在 http://localhost:${PORT}`);
// });

module.exports = app;  // 导出app以便测试或其他用途