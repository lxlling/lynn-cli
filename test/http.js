// 通过 axios 处理请求
const axios = require('axios')

axios.interceptors.response.use(res => {
  return res.data;
})

/**
 * 获取模板列表
 * @returns Promise
 */

async function getRepoList() {
  return axios.get('https://api.github.com/orgs/vue3-0-cli-yd/repos')
}

/**
 * 获取版本信息
 * @param {string} repo 模板名称
 * @returns Promise
 */

async function getTagList(repo) {
  return axios.get(`https://api.github.com/repos/vue3-0-cli-yd/${repo}/tags`)
}


module.exports = {
  getRepoList,
  getTagList
}
