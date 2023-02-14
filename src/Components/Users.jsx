import React, { useState } from 'react';
import requestInstagram from '../utils/index'
const Users = () => {
    const [data, setData] = useState([])
    function getUSER() {
        requestInstagram.GetUser()
            .then((res) => {
                console.log(res.data);
                setData(res.data)
            })
    }
    function submitUser(params) {
        params.preventDefault()
        let rasmManzili
        params.target[2].src = window.URL.createObjectURL(params.target[2].files[0])
        rasmManzili = params.target[2].src

        let data = {
            name: params.target[0].value,
            bio: params.target[1].value,
            avatar: rasmManzili
        }
        requestInstagram.PostUser(data)
            .then((res) => {
                console.log(res);
            })
    }
    return (
        <div className="App">
            <form onSubmit={(item) => { submitUser(item) }}>
                <input type="text" placeholder='userName' /> <br />
                <input type="text" placeholder='Bio' /> <br />
                <input type="file" /> <br />
                <input type="submit" value={"Jo'natish"} />
            </form>
            <button onClick={getUSER}>Get users</button>
            {
                data.map((arr, index) => {
                    return (
                        <div>
                            <h1>{arr.name}</h1>
                            <img src={arr.avatar} alt={arr.name} />
                            <p><i>{arr.bio}</i></p>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Users;
