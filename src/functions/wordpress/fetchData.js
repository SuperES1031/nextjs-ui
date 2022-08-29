import useSWR from "swr"

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export function getPosts(page) {
  const { data, error } = useSWR(
    `https://pretzelwarrant.wpengine.com/wp-json/wp/v2/posts?filter[orderby]=date&order=desc&per_page=5&page=${page}`,
    fetcher
  )

  return {
    data: data,
    loading: !error && !data,
    error: error,
  }
}

export function getImage(id) {
  const { data, error } = useSWR(
    `https://pretzelwarrant.wpengine.com/wp-json/wp/v2/media/${id}`,
    fetcher
  )

  return {
    image: data,
    imageLoading: !error && !data,
    imageError: error,
  }
}


