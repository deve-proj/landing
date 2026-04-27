import axios from "axios"
import userApiClient from "./user.api.client"

export class UserApi
{
    static async Login(login : string, password : string)
    {
        try
        {

            const result = await userApiClient.post("http://localhost:5263/user/login", {
                "login": login,
                "password": password
            })

            return result.status
        }
        catch(e)
        {
            throw new Error(e)
        }
    }

    static async Regist(login : string, password : string, name : string)
    {
        try
        {
            const formData = new FormData()

            formData.append("login", login)
            formData.append("name", name)
            formData.append("password", password)

            const result = await userApiClient.post("http://localhost:5263/user", formData, {headers: {'Content-Type': 'multipart/form-data'}})

            return result.status
        }
        catch(e)
        {
            throw new Error(e)
        }
    }
}