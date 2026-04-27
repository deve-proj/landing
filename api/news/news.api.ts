import axios from "axios";
import { DefaultApiCreatePostRequest } from '@deve-proj/news-center-sdk'
import { NEWS_API_URL } from "./config";

export class NewsApi
{

    // static async createPost(postData : DefaultApiCreatePostRequest, files?: File[])
    // {

    //     const formData = new FormData()

    //     formData.append('structure', JSON.stringify(postData.structure))

    //     if(files)
    //     {
    //         files.forEach(file => {
    //             formData.append('files', file)
    //         })
    //     }

    //     const response = await axios.post(
    //         `${NEWS_API_URL}/news`,
    //         formData,
    //         {
    //             headers: {
    //                 'Authorization': localStorage.getItem("token")
    //             }
    //         }
    //     )
    // }

    static async getNews(params? : {userId? : string, postId? : string}) // Если ничего не передали, выполним обычный get на получение ВСЕХ постов
    {

        let body = ''

        if (params?.postId)
        {
            body = `query{news(postId: "${params.postId}"){post{previewImage, title}}}`
        }
        else if (params?.userId)
        {
            body = `query{news(userId: "${params.userId}"){post{previewImage, title}}}`
        }

        else
        {
            body = `query{news{post{previewImage, title}}}`
        }

        const response = await axios.post(
            `${NEWS_API_URL}/graphql`,
            {query: body},
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )

        return response.data.data.news

    }
}