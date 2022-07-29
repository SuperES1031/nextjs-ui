import Space from "@components/atoms/Space";
import Layout from "@components/common/Layout";
import TextHeading from "@components/molecules/TextHeading";
import AboutHero from "@components/organisms/AboutHero";
import PlansHowItWorks from "@components/organisms/PlansHowItWorks";
import WhatYouSee from "@components/organisms/WhatYouSee";

export default function Plans() {
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
    <Layout>
      <Space />
      <AboutHero text={hero.text} button={hero.button} image={hero.image} />
      <PlansHowItWorks />
      <WhatYouSee />
    </Layout>
  )
}