import Vue from "vue";
import axios from "axios";
import qs from "qs";


// 判断开发模式
if(process.env.NODE_ENV == "development"){
    axios.defaults.baseURL = '/api/';
    // console.log("开发环境");
} else if(process.env.NODE_ENV == "production"){
    axios.defaults.baseURL = '/api/';
    // console.log("生产环境");
} else if(process.env.NODE_ENV == "debug"){
    axios.defaults.baseURL = '/api/';
    // console.log("debug环境");
}

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


Vue.prototype.$axios = axios;


/**
*   @param {url}  请求地址
*   @param {p} 请求参数
*/
let post = function(url, p){
    const promise = new Promise((resolve, reject) => {
        this.$axios({
            url: url,
            method: "post",
            data: p || {},
        })
        .then(res => {
            resolve(res);
        })
        .catch(err => {
            reject(err);
        })
    })
    return promise;
}
Vue.prototype.post = post;



// this.post("", params).then( res => {
//     console.log(res);
// }, (err => {
//     console.log(err);
// }))
