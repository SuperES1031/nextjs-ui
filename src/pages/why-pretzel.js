import HtmlParser from 'html-react-parser'
import Space from "@components/atoms/Space";
import Layout from "@components/common/Layout";
import TextHeading from "@components/molecules/TextHeading";
import AboutHero from "@components/organisms/AboutHero";
import Deal from "@components/organisms/Deal";
import DgtT from "@components/organisms/DgtT";
import OurMission from "@components/organisms/OurMission";
import ShortVersion from "@components/organisms/ShortVersion";

export default function About({ page }) {
  const { yoast_head } = page

  const hero = {
    text: {
      heading: "What is Pretzel Warranty?",
      text: "Cheese dip optional."
    },
    image: "about_hero"
  }

  const text = {
    heading: "But",
    heading1: "why",
    heading2: "is Pretzel?",
    subheading: "Great question."
  }

  return (
    <Layout seo={HtmlParser(yoast_head)}>
      <Space />
      <AboutHero text={hero.text} image={hero.image} />
      <ShortVersion />
      <div className="py-20 md:py-40 px-6">
        <TextHeading heading={text.heading} heading1={text.heading1} heading2={text.heading2} subheading={text.subheading} />
      </div>
      <OurMission />
      <Deal />
      <DgtT />
    </Layout>
  )
}

export async function getStaticProps() {
  const PAGE_ID = 7

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