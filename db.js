const fs = require('fs')
const path = require('path')

// 获取home目录
const homedir = require('os').homedir()

// 获取如果设置了环境变量就设置环境变量里的home目录 没设置就是默认的home目录
// 为了将后面的todo任务写入到这个目录的某个文件中
const home = process.env.HOME || homedir

// 将home目录下的.todo文件 作为我们的数据库文件
const dbPath = path.join(home, '.todo')


const db = {
  read(path = dbPath) {
    return new Promise((resolve, reject) => {
      // 1. 读取之前的任务
      fs.readFile(dbPath, { flag: 'a+' }, (error, data) => {
        if (error) return reject(error)
        let taskList
        try {
          // 之前有任务 读取到任务列表
          taskList = JSON.parse(data.toString())
        } catch (error1) {
          // 之前没任务 新建空任务列表
          taskList = []
        }
        resolve(taskList)
      })
    })
  },
  write(taskList, path = dbPath) {
    return new Promise((resolve, reject) => {
      // 1. 将任务列表转为JSON字符串
      const string = JSON.stringify(taskList)
      // 2. 将字符串写入到指定的文件中
      fs.writeFile(path, string + '\n', (error) => {
        if (error)  return reject(error)
        resolve()
      })
    })
  }
}

module.exports = db