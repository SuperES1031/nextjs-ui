import HtmlParser from 'html-react-parser'
import Space from "@components/atoms/Space";
import Layout from "@components/common/Layout";
import ChoosePretzel from "@components/organisms/ChoosePretzel";
import TextButton from "@components/molecules/TextButton";
import TextHeading from "@components/molecules/TextHeading";
import AboutHero from "@components/organisms/AboutHero";
import PlansHowItWorks from "@components/organisms/PlansHowItWorks";
import WhatYouSee from "@components/organisms/WhatYouSee";
import WhyPretzel from "@components/organisms/WhyPretzel";

export default function Plans({ page }) {
  const { yoast_head } = page

  const hero = {
    text: {
      heading: "Better protection for all your important things.",
      text: "Simple plans. Simple claims. Simply great. That’s the Pretzel way."
    },
    button: {
      link: "/",
      text: "GET PRETZEL"
    },
    image: "plans_hero"
  }

  return (
    <Layout seo={HtmlParser(yoast_head)}>
      <Space />
      <AboutHero text={hero.text} button={hero.button} image={hero.image} />
      <PlansHowItWorks classname='bg-[#F5F4FA]' />
      <WhatYouSee />
      <TextButton />
      <ChoosePretzel />
      <WhyPretzel />
    </Layout>
  )
}

export async function getStaticProps() {
  const PAGE_ID = 8

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