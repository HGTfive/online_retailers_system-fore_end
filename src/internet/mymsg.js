import { request } from "./api";

export function postmymsg(data){
    return request({
        url:'my/msg',
        method:'post',
        data:data
    })
}

export function getmymsg(){
    return request({
        url:'my/getmsg',
        method:'get'
    })
}

export function photoI(){
    return request({
        url:'user/changeAvatar',
        // method:'get'
    })
}