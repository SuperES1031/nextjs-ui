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

export default function Electronics() {
  const hero = {
    image: 'electronics_product_hero',
    heading: 'Your most loved and used devices, covered in a click.',
    text: 'Simple sign up. Simple claims. Simply Pretzel.',
    button: '60 Second Quote',
    buttonlink: '/'
  }

  const coveredText = {
    heading: "A few clicks and you’re covered.",
    subheading: "No listing out devices. No nitpicking. We cover it all with one awesome plan at one awesome affordable price. So what are you waiting for? Protect your stuff today."
  }

  const psychicText = {
    heading: "Not psychic, just smart.",
    subheading: "Most home warranties expect you to see into the future, picking and choosing which of your home’s most important systems and appliances might need coverage. With Pretzel, you can protect it all for one low monthly price.",
    subheading1: "(Move over, Nostradamus!)",
    bottom: "Device repairs and replacements can add up fast. We cover all the most important tech in your life, and we do it one place, for one low price. Keep your life running – without breaking the bank."
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
    heading: "Here’s a taste of what’s covered",
    subheading: ""
  }

  const tasteData = [
    {
      image: "central_air",
      subheading: "LED, LCD and Plasma TVs"
    },
    {
      image: "home_heating",
      subheading: "Gaming systems"
    },
    {
      image: "plumbing",
      subheading: "Audio headsets"
    },
    {
      image: "refrigerator",
      subheading: "Smart thermostats"
    },
    {
      image: "dishwasher",
      subheading: "Smart home security cameras"
    },
    {
      image: "oven",
      subheading: "Smart watches"
    },
    {
      image: "ceiling",
      subheading: "Desktop and laptop computers"
    },
    {
      image: "water_heater",
      subheading: "Smart smoke & carbon monoxide detectors"
    },
    {
      image: "electrical",
      subheading: "External hard drives"
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
      image: "phone_product",
      subheading: "Your Phone",
      text: "Your smartphone is essential. Cover it for just a few dollars a month.",
      cta: "See Plans",
      ctalink: "/",
      price: "8.00"
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
        classname='!text-subhead !text-[#DBDBDB] !max-w-[1122px]'
      />
      <HomeGraphic graphic='electronics_graphic' />
      <Covered text={coveredText} />
      <NotPsychic text={psychicText} data={psychicData} button={psychicButton} />
      <Taste text={tasteText} data={tasteData} button={{ link: './', icon: 'so_more' }} />
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
