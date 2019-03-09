import axios from 'axios';

const endPoint = 'http://localhost:3001/api/cityposts'


class PostRequest {

    static all(){
        let request = axios.get(endPoints)
        return request;
    }

    static create(){
        let request = axios.post(endPoints, NewPost)
        return request;
    }

    static update(){
        let request = axios.post(`${endPoint}/${postId}`, updatePost)
        return request;
    }

    static delete(post){
        let request = axios.delete(`${endPoint}/${post._id}`)
        return request;
    }


}

export default PostRequest