import HtmlParser from 'html-react-parser'
import Space from "@components/atoms/Space";
import Layout from "@components/common/Layout";
import TermsTop from "@components/organisms/Terms"

export default function Terms({ page }) {
  const { yoast_head } = page

  return (
    <Layout seo={HtmlParser(yoast_head)}>
      <Space />
      <TermsTop />
    </Layout>
  )
}

export async function getStaticProps() {
  const PAGE_ID = 17

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