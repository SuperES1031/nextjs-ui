import Layout from "@components/common/Layout";
import Breakdown from "@components/organisms/Breakdown";
import CarGraphic from "@components/organisms/CarGraphic";
import Covered from "@components/organisms/Covered";
import Hero from "@components/organisms/Hero";

export default function Vehicle() {
  const hero = {
    image: 'vehicle_hero',
    heading: 'Your vehicle, protected.',
    text: 'Simple sign up. Simple claims. Simply Pretzel.',
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
      <CarGraphic />
      <Covered />
      <Breakdown />
    </Layout>
  )
} 