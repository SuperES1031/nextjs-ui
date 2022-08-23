import HtmlParser from 'html-react-parser'
import Space from "@components/atoms/Space";
import Layout from "@components/common/Layout";
import FaqTop from "@components/organisms/Faq";

export default function Faq({ page }) {
  const { yoast_head } = page
  return (
    <Layout seo={HtmlParser(yoast_head)}>
      <Space />
      <FaqTop />
    </Layout>
  )
}

export async function getStaticProps() {
  const PAGE_ID = 13

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