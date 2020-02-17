const db = require('./db.js')

// 添加一个todo
module.exports.add = async (taskName) => {
  // 1. 读取之前的任务
  const taskList = await db.read()
  // 2. 添加任务
  taskList.push({taskName, done: false})
  // 3. 存储到任务列表
  await db.write(taskList)
}