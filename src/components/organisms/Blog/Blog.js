import PostCard from "@components/molecules/PostCard"
import styles from "./Blog.module.scss"
import { getPosts } from "@functions/wordpress/fetchData"
import { useEffect, useState } from "react"

export default function BlogSection() {
  const [page, setPage] = useState(1)
  const [isEnd, setIsEnd] = useState(false)
  const [posts, setPosts] = useState([])

  const { data, loading } = getPosts(page)

  useEffect(() => {
    if (data && Array.isArray(data)) {
      if (data.length === 0) {
        setIsEnd(true)
      } else {
        setPosts([...posts, ...data])
      }
    }
  }, [data])

  console.log(posts.length)
  return (
    <div className={styles.wrap}>
      {Array.isArray(data) &&
        posts.map((post, index) => (
          <div key={index}>
            <PostCard post={post} />
          </div>
        ))
      }
    </div>
  )
}