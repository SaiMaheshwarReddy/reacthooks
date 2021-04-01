import axios from 'axios'
import React, { useState, useEffect } from 'react'

function Fetching() {
const [posts, setPosts] = useState([]);
    useEffect(() => {

        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res)
            setPosts(res.data)
        })
        .catch(err => console.log(err))
        .finally(console.log("completed"))
    }
        )
    return (
        <div>
            {
                posts.map(post => {
                   return <p>{post.title}</p>
                })
            }
           
        </div>
    )
}

export default Fetching
