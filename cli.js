const program = require('commander')
const api = require('./index.js')

// 声明选项
program
  .option('-x, ---xxx', 'what the x')

// 声明子命令 add
program
  .command('add')
  .description('add a task')
  .action((...args) => {
    let taskName = ''
    // 用户可能写的是一整句话中间会用空格隔开，这时我们就要取出每个参数进行拼接
    if (Array.isArray(args[args.length - 1])) {
      taskName = args.slice(args.length - 1)[0].join(' ')
    }
    // 添加任务
    api.add(taskName)
  })

// 声明子命令 clear
program
  .command('clear')
  .description('clear all tasks')
  .action((...args) => {
    const words = args.pop().join(' ')
    console.log('this is clear')
  })

program.parse(process.argv)

