// import router from '@/router'
import axios from 'axios'
import Vue from 'vue'
import router from '../router/index'
// Vue.use()

export function request(config){
    const instance = axios.create({
        // baseURL:'http://47.103.198.84:8090/ems',
        baseURL:'http://127.0.0.0:8088/api',  
        timeout:10000,
        headers:{
            token:''
        }
    })

    instance.interceptors.request.use(config=>{
        // 请求之前 我们统一就为这个config 设置一个token 
        // console.log(config.headers.Authrization)
        const headers = config.headers;
        let token = localStorage.getItem('token');
        headers['token'] = token;
        console.log('请求成功')
        console.log(config)
        return config
    },
    err=>{
        console.log(err + '请求失败')
    })


    instance.interceptors.response.use(res=>{
        console.log('成功响应拦截 ')
        console.log(res)
        return res
    },err=>{
        console.log(err)
        console.log('lanjieshibai')
    })


    return instance(config)
}
