"use client"
import { useState } from 'react'

const LikeButton = () => {
  const [likeCount, setLikeCount] = useState(0)
  return (<>
    <button onClick={() => { setLikeCount(likeCount + 1) }} className='bg-red-600 font-bold px-5 py-2 rounded-sm'>
      LIKES: {likeCount}
    </button>
  </>)
}

export default LikeButton
