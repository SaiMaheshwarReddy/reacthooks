import axios from 'axios'
import React, { useState, useEffect } from 'react'

function Fetching() {
const [posts, setPosts] = useState([]);
const [postId, setPostId] = useState(1);
const [inputId, setInputId] = useState(1);
const fetchData = () => {
    setInputId(postId)
}
    useEffect(() => {

        axios.get(`https://jsonplaceholder.typicode.com/posts/${inputId}`)
        .then(res => {
            console.log(res)
            setPosts(res.data)
        })
        .catch(err => console.log(err))
        .finally(console.log("completed"))
    }, [inputId])
    return (
        <>
            {/* {
                posts.map(post => {
                   return <p>{post.title}</p>
                })
            } */}
          
           
           <input type="text" value={postId} onChange={e => setPostId(e.target.value)} />
           <button onClick={fetchData}>Fetch</button>
           <h2>{posts.title}</h2>
        </>
    )
}

export default Fetching
