const express = require('express');
const router = express.Router();

// 玩家分数提交接口
router.post('/save-score', (req, res) => {
  const { playerId, score } = req.body;
  
  // 这里添加数据库操作逻辑
  console.log(`收到玩家分数: ${playerId} - ${score}`);
  
  // 返回JSON响应
  res.json({ 
    success: true,
    message: '分数已记录',
    newRank: 42 
  });
});

// 玩家数据获取接口
router.get('/player/:id', (req, res) => {
  const playerId = req.params.id;
  
  // 模拟数据库返回
  res.json({
    id: playerId,
    name: "游戏玩家",
    level: 15,
    inventory: ["sword", "shield"]
  });
});

module.exports = router;