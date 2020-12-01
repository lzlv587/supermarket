import {request} from 'network/request'

export function getHomeMutidata(){
    return request({
        url:'/home/multidata',
        
    })
}

export function getDanmu(page){
    return request({
        baseURL:'',
        url:'/cgi/c-bin/GetDanmuData.cgi',
        params:{
            page
        },
    })
}
