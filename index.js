const fs = require('fs')
// 获取home目录
const homedir = require('os').homedir()

// 获取环境变量里设置的home目录
const home = process.env.HOME || homedir

const path = require('path')
const dbPath = path.join(home, '.todo')

module.exports.add = (title) => {
  // 读取之前的任务
  fs.readFile(dbPath, { flag: 'a+' }, (error1, data) => {
    if (error1) console.log(error1)
    else {
      let list
      try {
        list = JSON.parse(data.toString()) 
      } catch (error2) {
        list = []
      }
      console.log(list)
      const task = {
        title,
        done: false
      }
      list.push(task)
      console.log(list)
      const string = JSON.stringify(list)
      fs.writeFile(dbPath, string + '\n', (error3) => {
        if(error3) console.log(error3)
      })
    }
  })
  // 往里面添加一个title任务
  // 存储任务到文件

}