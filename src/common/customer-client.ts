import { delete_, get } from "./http-client"

export const getcustomers = async()=>{
    const response = await get(`/customer/`)
    return response
}
export const deletecustomers = async(id:string|number)=>{
    const response = await delete_(`/customer/${id}`)
    return response
}