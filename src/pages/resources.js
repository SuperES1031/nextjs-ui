import HtmlParser from 'html-react-parser'
import Layout from "@components/common/Layout";

export default function Resources({ page }) {
  const { yoast_head } = page
  return (
    <Layout seo={HtmlParser(yoast_head)}>
      <div className="h-screen w-screen"></div>
    </Layout>
  )
}

export async function getStaticProps() {
  const PAGE_ID = 16

  const res = await fetch(
    `https://pretzelwarrant.wpengine.com/wp-json/wp/v2/pages/${PAGE_ID}`
  )
  const page = await res.json()

  return {
    props: {
      page: page,
    },
    revalidate: 10,
  }
}