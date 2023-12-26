const inquire = require('inquirer');
const config = require('./config');
const download = require('download-git-repo');
const ora = require('ora');
const chalk = require('chalk');
const loading = ora('Loading');

module.exports = async function (project, args) {
  const answer = await inquire.prompt([
    {
      type: 'list',
      name: 'framework',
      choices: config.framework,
      message: '选择你需要的框架',
    },
  ]);
  // console.log('answer',answer)
  // console.log('project',project);
  loading.start();
  loading.text = '正在下载...';
  download(
    config.framworkurl[answer.framework],
    project,
    (err) => {
     loading.stop();
      if(err){
        console.log(err);
        loading.fail('下载失败');
      }else{
        loading.succeed('下载成功');
        console.log(chalk.green('Successfully created project ' + project));
        console.log(chalk.green('Get started with the following command: '));
        console.log('')
        const commands = config.frameworkComman[answer.framework];
        console.log('$ ' + chalk.blue(`cd ${project}`))
        commands.forEach(c => {
          console.log('$ ' + chalk.blue(c))
        });
      }
    }
  );
};
