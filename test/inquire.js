const inquire = import('inquirer');

inquire.prompt([{
    type:'input',
    name:'username',
    message:'你的名字',
}]).then(function(answers){
    console.log(answers)
})