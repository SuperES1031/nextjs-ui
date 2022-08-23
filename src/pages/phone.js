import HtmlParser from 'html-react-parser'
import Background from "@components/atoms/Background"
import Layout from "@components/common/Layout"
import TextSubHeading from "@components/molecules/TextSubHeading"
import Backed from "@components/organisms/Backed"
import Covered from "@components/organisms/Covered"
import Hero from "@components/organisms/Hero"
import HomeGraphic from "@components/organisms/HomeGraphic/HomeGraphic"
import NotPsychic from "@components/organisms/NotPsychic"
import PlansHowItWorks from "@components/organisms/PlansHowItWorks"
import ProductFaq from "@components/organisms/ProductFaq"
import StopAt from "@components/organisms/StopAt"
import Taste from "@components/organisms/Taste"
import Testimonial from "@components/organisms/Testimonial"
import Link from "next/link"

export default function Phone({ page }) {
  const { yoast_head } = page

  const hero = {
    image: 'phone_product_hero',
    heading: 'You need it. We protect it.',
    text: 'Dropped. Stolen. Worn down. Pretzel covers your phone. Simple as that.',
    button: '60 Second Quote',
    buttonlink: '/'
  }

  const coveredText = {
    heading: "A few clicks and you’re covered.",
    subheading: "Simply select your devices and protect your stuff today."
  }

  const psychicText = {
    heading: "The one thing you can’t live without.",
    subheading: "Ok, maybe that’s a little dramatic, but let’s face it – our phones are our window to the world. With Pretzel, you get comprehensive coverage for just about anything that can go wrong. Because if our bags of rice know anything, it’s that anything that can go wrong with your phone? Well, it will.",
    bottom: "With Pretzel, you can stay connected even when things go wrong – without breaking the bank."
  }

  const psychicData = [
    {
      image: 'crashed',
      subheading: "When your desktop dramatically dies",
      text: "Average cost to replace a desktop computer: $580"
    },
    {
      image: 'favorite_console',
      subheading: "When your favorite console is inconsolable",
      text: "Average cost to replace a game system: $230"
    },
    {
      image: 'printer',
      subheading: "When your printer makes that noise again (come on!)",
      text: "Average cost to replace a printer: $70"
    },
    {
      image: 'thermostat',
      subheading: "When your thermostat is all thermed out",
      text: "Average cost to replace a smart thermostat: $250"
    },
    {
      image: 'router',
      subheading: "When your router won’t route",
      text: "Average cost to replace a router: $150"
    },
    {
      image: 'springs',
      subheading: "When your data springs a leak",
      text: "Keeping your personal information safe is priceless. That’s why we offer security and storage tools to protect your stuff online as well as off."
    }
  ]

  const psychicButton = {
    text: "GET PRETZEL",
    url: "./"
  }

  const tasteText = {
    heading: "What sets us apart?",
    subheading: "We’re not just some regular old mall Pretzel."
  }

  const tasteData = [
    {
      image: "home_heating",
      subheading: "Personal service",
      text: "Get local in-store repairs at one of our 700+ partner locations when you need a repair in a hurry (or just want a little human contact)."
    },
    {
      image: "supply_replacement",
      subheading: "Speedy replacements",
      text: "Your phone emergency deserves our urgency. We’ll replace your phone in as little as one day."
    },
    {
      image: "home_heating",
      subheading: "Coverage for lost phones",
      text: "Whether your phone is lost or stolen, if it’s gone, it’s gone, and we cover that. Unlike those other guys."
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
      image: "home_product",
      subheading: "Your Home",
      text: "Cover your dishwasher, electrical, plumbing, and other stuff.",
      cta: "See Plans",
      ctalink: "/",
      price: "24.99"
    },
    {
      image: "electronics_product",
      subheading: "Your Electronics",
      text: "From breaks to bugs, protect your laptop, gaming systems, and other bits and bytes.",
      cta: "See Plans",
      ctalink: "/",
      price: "24.99"
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
        classname='!text-subhead !text-[#DBDBDB] !max-w-[1122px]'
      />
      <HomeGraphic graphic='phone_graphic' />
      <Covered text={coveredText} />
      <NotPsychic text={psychicText} data={psychicData} button={psychicButton} />
      <Taste text={tasteText} data={tasteData} button={{ link: './' }} />
      <div className="relative">
        <Background image='pro_light_icone' className='left-0 top-[10%]' alt='background left' />
        <Background image='plans_right' className='right-0 bottom-0' alt='background right' />
        <PlansHowItWorks />
      </div>
      <div className="bg-[#F5F4FA] py-40">
        <TextSubHeading text={text} />
        <div className="pt-10 md:pt-20 text-center">
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
    </Layout>
  )
}

export async function getStaticProps() {
  const PAGE_ID = 15

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