import { delete_, get, post, put } from "./http-client"

export const getSubImprovements = async(id:string|number)=>{
    const response = await get(`/improvements/${id}/sub`)
    return response
}

export const postSubImprovements = async(id:string|number,data:{ description: string })=>{
    const response = await post(`/improvements/${id}/sub`,data)
    return response
}

export const putSubImprovements = async(subId:string|number,data:{ description: string })=>{
    const response = await put(`/improvements/sub/${subId}`,data)
    return response
}

export const deleteSubImprovements = async(subId:string|number)=>{
    const response = await delete_(`/improvements/sub/${subId}`)
    return response
}