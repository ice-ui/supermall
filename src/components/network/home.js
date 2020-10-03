// 首先导入request
import { request } from './request'

// Home.vue面向home.js开发
export function getHomeMultidata() {
    return request({
        url: '/home/multidata'
    })
}