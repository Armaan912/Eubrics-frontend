
import { post } from "./http-client"


export const postlogin = async(data:{username:string,password:string})=>{
    const response = await post(`/auth/login`,data)
    return response
}

export const postregister = async(data:{username:string,password:string})=>{
    const response = await post(`/auth/register`,data)
    return response
}