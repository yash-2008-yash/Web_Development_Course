import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [posts, setPosts] = useState(null)
  const [images, setImages] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const [postsResponse, imagesResponse] = await Promise.all([
          fetch("https://jsonplaceholder.typicode.com/posts"),
          fetch("https://picsum.photos/v2/list?page=2&limit=100")
        ])
        const postsData = await postsResponse.json()
        const imagesData = await imagesResponse.json()

        setPosts(postsData)
        setImages(imagesData)
      }
      catch (err) {
        setError(err.message)
      }
    }

    fetchData()
  }, [])

  if (error) {
    return <h1>Error: {error}</h1>
  }

  if (!posts || !images) {
    return <h1>Loading...</h1>
  }

  return (<>
    <h1>Fake data cards using free REST APIs</h1>
    <p>For text: <u>https://jsonplaceholder.typicode.com/</u></p>
    <p>For images: <u>https://picsum.photos/</u></p>

    <div className='container'>
      {posts.map((post, index) => (
        <div key={post.id} className='card'>
          <img src={`https://picsum.photos/id/${images[index]?.id}/200`} width="200px" alt="" />
          <div className="text">
            <h3 style={{ textTransform: "uppercase" }}>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        </div>
      ))}
    </div>
  </>)
}

export default App