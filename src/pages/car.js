import HtmlParser from 'html-react-parser'
import Background from "@components/atoms/Background";
import Layout from "@components/common/Layout";
import NATextHeading from "@components/molecules/NATextHeading";
import TextSubHeading from "@components/molecules/TextSubHeading";
import Backed from "@components/organisms/Backed";
import Breakdown from "@components/organisms/Breakdown";
import CarGraphic from "@components/organisms/CarGraphic";
import Covered from "@components/organisms/Covered";
import Hero from "@components/organisms/Hero";
import Mention from "@components/organisms/Mention";
import PlansHowItWorks from "@components/organisms/PlansHowItWorks";
import ProductFaq from "@components/organisms/ProductFaq";
import StopAt from "@components/organisms/StopAt";
import Taste from "@components/organisms/Taste";
import Testimonial from "@components/organisms/Testimonial";
import Link from "next/link";

export default function Vehicle({ page }) {
  const { yoast_head } = page

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

  const coveredText = {
    heading: "A few clicks and you’re covered.",
    subheading: "Your best bud on wheels can be protected today."
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

  const planText = {
    heading: "With a Pretzel plan, you’re covered. Seriously.",
    subheading: "Breakdowns happen. Why not keep your life running?"
  }

  const text = {
    subheading1: "And it all starts at just",
    subheading2: "$XX per month.",
    text: "Really? Yes, really."
  }


  const stopText = {
    heading: "Why stop at one Pretzel when you can have the whole bag?",
    subheading: "Everything that matters, protected."
  }

  const stopData = [
    {
      image: "home_product",
      subheading: "Your Home",
      text: "Cover your dishwasher, electrical, plumbing, and other stuff.",
      cta: "See Plans",
      ctalink: "/",
      price: "39.99"
    },
    {
      image: "electronics_product",
      subheading: "Your Electronics",
      text: "From breaks to bugs, protect your laptop, gaming systems, and other bits and bytes.",
      cta: "See Plans",
      ctalink: "/",
      price: "24.99"
    },
    {
      image: "phone_product",
      subheading: "Your Phone",
      text: "Your smartphone is essential. Cover it for just a few dollars a month.",
      cta: "See Plans",
      ctalink: "/",
      price: "8.00"
    }
  ]

  return (
    <Layout seo={HtmlParser(yoast_head)}>
      <Hero
        image={hero.image}
        heading={hero.heading}
        text={hero.text}
        subheading={hero.subheading}
        button={hero.button}
        buttonlink={hero.buttonlink}
        classname='!text-subhead !text-[#DBDBDB]'
      />
      <CarGraphic />
      <Covered text={coveredText} />
      <Breakdown />
      <Taste text={tasteText} data={tasteData} button={{ link: './', icon: false }} />
      <Mention />
      <div className="relative">
        <Background image='pro_light_icone' className='left-0 top-[10%]' alt='background left' />
        <Background image='plans_right' className='right-0 top-[10%]' alt='background right' />
        <div className="py-20 md:py-32 max-w-screen-lg m-auto px-2">
          <NATextHeading heading={planText.heading} subheading={planText.subheading} />
          <div className="text-center pt-10 md:pt-24">
            <Link href='./'>
              <a className="btn">GET PRETZEL</a>
            </Link>
          </div>
        </div>
      </div>
      <PlansHowItWorks classname='bg-[#F5F4FA]' />
      <div className="bg-[#F5F4FA] pb-20">
        <TextSubHeading text={text} />
        <div className="py-10 md:py-20 text-center">
          <Link href='./'>
            <a className="btn">GET STARTED</a>
          </Link>
        </div>
      </div>
      <Backed />
      <div className="bg-[#F5F4FA]">
        <Testimonial />
      </div>
      <ProductFaq />
      <StopAt text={stopText} data={stopData} />
    </Layout >
  )
}

export async function getStaticProps() {
  const PAGE_ID = 10

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