import axios from 'axios';
import React, { useEffect, useState } from 'react';
import requestInstagram from '../utils/index'
const Comments = () => {
    const [Data, setData] = useState([]);
    useEffect(() => {
        requestInstagram.GetUser()
            .then((res) => { console.log(res.data); })
    }, []);
    function sendComment() {
        axios({
            method: "POST",
            url: "https://63eb551cf1a969340db5bada.mockapi.io/instagram/users/1/posts",
            data: {
                "name": "Sheroz",
                "poster_path": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/814.jpg",
                "location": "location Sheroz",
                "comment": "comment Sheroz",
            }
        })
            .then(res => { console.log(res); })
            .catch(error => { console.log(error); })
    }
    return (
        <div className='container'>
            <h1 className='text-center'>Comments</h1>
            <div className='d-flex flex-row py-3'>
                <input type="text" placeholder='comment' className='form-control' />
                <button onClick={sendComment} className='btn btn-primary'>send</button>
            </div>
        </div>
    );
}

export default Comments;
