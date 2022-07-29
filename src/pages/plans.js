import Space from "@components/atoms/Space";
import Layout from "@components/common/Layout";
import AboutHero from "@components/organisms/AboutHero";

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
    </Layout>
  )
}