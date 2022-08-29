import Space from '@components/atoms/Space'
import Layout from '@components/common/Layout'
import PostBody from '@components/organisms/PostBody'
import PostHero from '@components/organisms/PostHero'
import HtmlParser from 'html-react-parser'

export default function NewsDetailPage({ post, category }) {
  if (post.title) {
    const { yoast_head } = post

    return (
      <Layout seo={HtmlParser(yoast_head)}>
        <Space />
        <PostHero post={post} />
        <PostBody post={post} />
        <Space />
      </Layout>
    )
  }
}

export async function getStaticProps({ params }) {
  /**
   * News Detail
   */
  const postRes = await fetch(
    `https://pretzelwarrant.wpengine.com/wp-json/wp/v2/posts/?slug=${params.slug}`
  )
  const posts = await postRes.json()
  const post = posts[0]

  // const categoryId = news.acf.ad_category
  // const categoryRes = await fetch(
  //   `https://pretzelwarrant.wpengine.com/wp-json/wp/v2/categories/${categoryId}`
  // )
  // const category = await categoryRes.json()

  if (posts[0]) {
    return {
      props: {
        post,
        // category,
      },
      revalidate: 10,
    }
  } else {
    // // Get Preview Token
    // var FormData = require('form-data')
    // const PREVIEW_USERNAME = process.env.NEXT_PUBLIC_PREVIEW_USERNAME
    // const PREVIEW_PASSWORD = process.env.NEXT_PUBLIC_PREVIEW_SECRET

    // var formdata = new FormData()
    // formdata.append('username', PREVIEW_USERNAME)
    // formdata.append('password', PREVIEW_PASSWORD)

    // var requestOptions = {
    //   method: 'POST',
    //   body: formdata,
    //   redirect: 'follow',
    // }

    // const authRes = await fetch(
    //   process.env.NEXTAUTH_API_URL + '/token',
    //   requestOptions
    // )
    // const { token } = await authRes.json()

    // var myHeaders = new Headers()
    // myHeaders.append('Authorization', `Bearer ${token}`)

    // const previewRes = await fetch(
    //   `https://dhix.dhinsights.org/wp-json/wp/v2/posts/${params.slug}`,
    //   {
    //     headers: myHeaders,
    //   }
    // )
    // const preview = await previewRes.json()

    // const categoryId = preview.acf.ad_category
    // const categoryRes = await fetch(
    //   `https://pretzelwarrant.wpengine.com/wp-json/wp/v2/categories/${categoryId}`
    // )
    // const category = await categoryRes.json()

    // return {
    //   props: {
    //     news: preview,
    //     category,
    //   },
    // }
  }
}

export async function getStaticPaths() {
  const res = await fetch(
    'https://pretzelwarrant.wpengine.com/wp-json/wp/v2/posts/?_fields=slug&per_page=100'
  )
  const posts = await res.json()

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }))

  return { paths, fallback: 'blocking' }
}