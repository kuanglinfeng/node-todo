const program = require('commander')
const api = require('./index.js')

program
  .option('-x, ---xxx', 'what the x')

program
  .command('add')
  .description('add a task')
  .action((...args) => {
    let words = ''
    if (Array.isArray(args[args.length - 1])) {
      words = args.slice(args.length - 1)[0].join(' ')
    }
    console.log(words)
    api.add(words)
  })

program
  .command('clear')
  .description('add all tasks')
  .action((...args) => {
    const words = args.pop().join(' ')
    console.log('this is clear')
  })

program.parse(process.argv)

