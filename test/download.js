const download = require('download-git-repo');
const ora = require('ora');

download('https://github.com/lxlling/vite-vue3-init.git','',{clone:true}, err=>{
    console.log(err);
})