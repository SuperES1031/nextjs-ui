import Space from "@components/atoms/Space";
import Layout from "@components/common/Layout";
import TextHero from "@components/molecules/TextHero";
import HtmlParser from 'html-react-parser'
import BlogSection from "@components/organisms/Blog/Blog";

export default function Blog({ page, primaryPost }) {
  const { yoast_head } = page

  const hero = {
    heading: "Updates from your favorite extended warranty company.",
    text: "Boiled, baked, and buttered for your enjoyment."
  }

  return (
    <Layout seo={HtmlParser(yoast_head)}>
      <Space />
      <div className="relative">
        <div className="max-w-5xl m-auto py-10 px-2">
          <TextHero heading={hero.heading} subheading={hero.text} />
        </div>

        <BlogSection />
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const PAGE_ID = 48
  const res = await fetch(
    `https://pretzelwarrant.wpengine.com/wp-json/wp/v2/pages/${PAGE_ID}`
  )
  const page = await res.json()

  const postsRes = await fetch(
    'https://pretzelwarrant.wpengine.com/wp-json/wp/v2/posts?filter[orderby]=date&order=desc&per_page=5'
  )
  const posts = await postsRes.json()

  return {
    props: {
      page: page,
      primaryPost: posts[0],
    },
    revalidate: 10,
  }
}