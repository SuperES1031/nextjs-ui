import HtmlParser from 'html-react-parser'
import Background from "@components/atoms/Background";
import Layout from "@components/common/Layout";
import TextSubHeading from "@components/molecules/TextSubHeading";
import Backed from "@components/organisms/Backed";
import Covered from "@components/organisms/Covered";
import Hero from "@components/organisms/Hero";
import HomeGraphic from "@components/organisms/HomeGraphic/HomeGraphic";
import NotPsychic from "@components/organisms/NotPsychic";
import PlansHowItWorks from "@components/organisms/PlansHowItWorks";
import ProductFaq from "@components/organisms/ProductFaq";
import StopAt from "@components/organisms/StopAt";
import Taste from "@components/organisms/Taste";
import Testimonial from "@components/organisms/Testimonial";
import Link from "next/link";

export default function Homes({ page }) {
  const { yoast_head } = page
  const hero = {
    image: 'home_product_hero',
    heading: 'Home warranties that don’t suck (or make a weird clanging noise).',
    text: 'We protect your appliances and home systems. Simple as that.',
    button: '60 Second Quote',
    buttonlink: '/'
  }

  const coveredText = {
    heading: "A few clicks and you’re covered.",
    subheading: "Your best bud on wheels can be protected today."
  }

  const psychicText = {
    heading: "Not psychic, just smart.",
    subheading: "Most home warranties expect you to see into the future, picking and choosing which of your home’s most important systems and appliances might need coverage. With Pretzel, you can protect it all for one low monthly price.",
    subheading1: "(Move over, Nostradamus!)",
    bottom: "From your HVAC systems down to your garbage disposal, home tech repairs and replacements can add up quickly. Keep your life running – without breaking the bank."
  }

  const psychicData = [
    {
      image: 'ac',
      subheading: "When your AC won’t C",
      text: "Average cost to replace AC fan motor: $300 to $600"
    },
    {
      image: 'plumbing_system',
      subheading: "When your plumbing system poops out",
      text: "Average cost to replace a water shut-off valve: $375-$800"
    },
    {
      image: 'fridge',
      subheading: "When your fridge decides it’s a fancy closet",
      text: "New fridge compressor: $100 to $500 not including labor"
    }
  ]

  const psychicButton = {
    text: "GET PRETZEL",
    url: "./"
  }

  const tasteText = {
    heading: "Here’s a taste of what’s covered",
    subheading: "Breakdowns, be gone!"
  }

  const tasteData = [
    {
      image: "central_air",
      subheading: "Central Air"
    },
    {
      image: "home_heating",
      subheading: "Home Heating"
    },
    {
      image: "plumbing",
      subheading: "Plumbing"
    },
    {
      image: "refrigerator",
      subheading: "Refrigerator"
    },
    {
      image: "dishwasher",
      subheading: "Dishwasher"
    },
    {
      image: "oven",
      subheading: "Oven, Stovetop, & Range"
    },
    {
      image: "ceiling",
      subheading: "Ceiling Fans"
    },
    {
      image: "water_heater",
      subheading: "Water Heater"
    },
    {
      image: "electrical",
      subheading: "Electrical"
    }
  ]

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
      image: "car_product",
      subheading: "Your Vehicle",
      text: "Breakdowns happen. Protect your transmission, brakes, A/C, and more.",
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
      <HomeGraphic graphic='home_graphic' />
      <Covered text={coveredText} />
      <NotPsychic text={psychicText} data={psychicData} button={psychicButton} />
      <Taste text={tasteText} data={tasteData} button={{ link: './', icon: 'much_more' }} />
      <div className="relative">
        <Background image='pro_light_icone' className='left-0 top-[10%]' alt='background left' />
        <Background image='plans_right' className='right-0 bottom-0' alt='background right' />
        <PlansHowItWorks />
      </div>
      <div className="bg-[#F5F4FA] py-20">
        <TextSubHeading text={text} />
        <div className="pt-10 md:pt-16 text-center">
          <Link href='./'>
            <a className="btn text-body">GET STARTED</a>
          </Link>
        </div>
      </div>
      <Backed />
      <div className="bg-[#F5F4FA]">
        <Testimonial />
      </div>
      <ProductFaq />
      <StopAt text={stopText} data={stopData} />
    </Layout>
  )
}

export async function getStaticProps() {
  const PAGE_ID = 9

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