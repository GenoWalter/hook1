import { useEffect, useState } from 'react'


// 1. useEffect(callback)
//Gọi callback mỗt khi component re-render
//Gọi callback sau khi component thêm element vào DOM
// 2. useEffect(callback, 1)
// - Chỉ gọi callback 1 lần sau khi component mounted
// 3. useEffect(callback, [deps])

// --------------
// 1. Callback luôn được gọi sau khi component mounted

const tabs =['posts', 'comments', 'albums']



function Content () {
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')

    useEffect ( () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then (res => res.json())
            .then (posts => {
                 setPosts(posts);
            })
    } )

    return (
        <div>
            {tabs.map(tab => (
                <button 
                    key={tab}
                    onClick={() => setType(tab)}
                >
                    {tab}
                </button>
            )) }

            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <ul>
                {posts.map(post => {
                    <li key={post.id}>{post.title}</li>
                ))}                        
            </ul>
        </div>
    }
}
   export default Content
