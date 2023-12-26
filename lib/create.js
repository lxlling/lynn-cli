const myCreate = require('./myCreate')
module.exports = function (program) {
  //执行命令
  program
    .command('create <project> [other...]')
    .alias('crt')
    .description('create a new project')
    .action(myCreate);
};
//000--