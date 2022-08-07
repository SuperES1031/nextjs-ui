import Layout from "@components/common/Layout";
import Breakdown from "@components/organisms/Breakdown";
import CarGraphic from "@components/organisms/CarGraphic";
import Covered from "@components/organisms/Covered";
import Hero from "@components/organisms/Hero";
import Taste from "@components/organisms/Taste";

export default function Vehicle() {
  const hero = {
    image: 'vehicle_hero',
    heading: 'Your vehicle, protected.',
    text: 'Simple sign up. Simple claims. Simply Pretzel.',
    button: '60 Second Quote',
    buttonlink: '/'
  }

  const tasteText = {
    heading: "Here’s a taste of what’s covered",
    subheading: "Breakdowns, be gone!"
  }

  const tasteData = [
    {
      image: "engine",
      subheading: "Engine"
    },
    {
      image: "transmission",
      subheading: "Transmission"
    },
    {
      image: "cooling_system",
      subheading: "Cooling System"
    },
    {
      image: "air_conditoring",
      subheading: "Air Conditioning"
    },
    {
      image: "drive_axle",
      subheading: "Drive Axle"
    },
    {
      image: "electorical_components",
      subheading: "Electrical Components"
    },
    {
      image: "brakes",
      subheading: "Brakes"
    },
    {
      image: "suspension",
      subheading: "Suspension"
    },
    {
      image: "steering",
      subheading: "Steering"
    }
  ]

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
      <Taste text={tasteText} data={tasteData} button={{ link: './', icon: false }} />
    </Layout>
  )
} 