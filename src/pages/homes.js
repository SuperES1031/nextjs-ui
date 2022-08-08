import Space from "@components/atoms/Space";
import Layout from "@components/common/Layout";
import Hero from "@components/organisms/Hero";

export default function Homes() {
  const hero = {
    image: 'home_product_hero',
    heading: 'Home warranties that don’t suck (or make a weird clanging noise).',
    text: 'We protect your appliances and home systems. Simple as that.',
    button: '60 Second Quote',
    buttonlink: '/'
  }

  return (
    <Layout>
      <Hero
        image={hero.image}
        heading={hero.heading}
        text={hero.text}
        subheading={hero.subheading}
        button={hero.button}
        buttonlink={hero.buttonlink}
        classname='!text-2xl !font-bold !text-[#DBDBDB]'
      />
    </Layout>
  )
}