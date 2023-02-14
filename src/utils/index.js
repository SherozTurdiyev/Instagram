import axios from "axios";

const request = axios.create({
    baseURL: "https://63eb551cf1a969340db5bada.mockapi.io/instagram",
    // headers:{
    //     common:{
    //         Authorization: "Bareer " + localStorage.getItem('token')
    //     }
    // }
})

request.interceptors.response.use(
    (response) => { return response },
    (error) => { return error }
)


class requestInstagram {
    GetUser() {
        const response = request({
            method: "GET",
            url: '/users'
        }).then((res) => {
            return res
        })

        return response
    }
    PostUser(data) {
        const response = request({
            method: "POST",
            url: '/users',
            data: {...data}
        }).then(res=>(res)).catch(error=>(error))
      return response
    }
}

export default new requestInstagram