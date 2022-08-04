import Hero from "@components/organisms/Hero";
import Layout from "components/common/Layout";
import ComPrice from "@components/organisms/ComPrice";
import TextHeading from "@components/molecules/TextHeading";
import AppSection from "@components/organisms/AppSection";
import HowItWorks from "@components/organisms/HowItWorks";
import Drama from "@components/organisms/Drama";
import PretzelMean from "@components/organisms/PretzelMean";
import Backed from "@components/organisms/Backed";
import Testimonial from "@components/organisms/Testimonial";

export default function Home() {
  const hero = {
    image: 'home_hero',
    heading: 'Making life better through better protection.',
    text: 'Simple, straight forward protection plans for everything that matters.',
    subheading: 'HOME. CAR. ELECTRONICS. PHONE.',
    button: '60 Second Quote',
    buttonlink: '/'
  }

  const comprice = [
    {
      heading: "Awesome prices. Simple claims. Comprehensive coverage.",
      subheading: "Bundle your plans and save.",
    },
    [
      {
        image: "vehicle",
        subheading: "Your Vehicle",
        text: "Breakdowns happen. Protect your transmission, brakes, A/C, and more.",
        cta: "See Plans",
        ctalink: "/",
        price: "79.99"
      },
      {
        image: "home",
        subheading: "Your Home",
        text: "Cover your dishwasher, electrical, plumbing, and other stuff.",
        cta: "See Plans",
        ctalink: "/",
        price: "39.99"
      },
      {
        image: "electronics",
        subheading: "Your Electronics",
        text: "From breaks to bugs, protect your laptop, gaming systems, and other bits and bytes.",
        cta: "See Plans",
        ctalink: "/",
        price: "24.99"
      },
      {
        image: "phone",
        subheading: "Your Phone",
        text: "Your smartphone is essential. Cover it for just a few dollars a month.",
        cta: "See Plans",
        ctalink: "/",
        price: "8.00"
      }
    ],
    {
      beforeIcon: "combefore",
      afterIcon: "comafter"
    }
  ]

  const richtext = {
    heading: "Unbelievably easy",
    subheading: "Sign up online in minutes. Manage your account from your phone. File claims on the Pretzel app and get paid. Easy, fast, and hassle-free."
  }

  const works = [
    {
      heading: "Here’s how it works",
      subheading: "We run protection plans the way they should be run – as a service designed to save you money and make your life easier. You pay a low, flat monthly fee, and when something happens that’s covered, we foot the bill or make sure you get paid easily and quickly.",
    },
    [
      {
        image: "flat_low_rates",
        subheading: "Flat, low rates"
      },
      {
        image: "quick_easy_payments",
        subheading: "Quick and easy payments"
      },
      {
        image: "unexpected_expenses",
        subheading: "No more worrying about unexpected expenses"
      },
      {
        image: "money_left",
        subheading: "Money left over goes to great causes"
      }
    ],
    {
      beforeIcon: "work_left",
      afterIcon: "work_right"
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
      />
      <ComPrice comprice={comprice} />
      <div className='max-w-[1050px] m-auto pt-20 pb-20 md:pb-40 px-4'>
        <TextHeading
          heading={richtext.heading}
          subheading={richtext.subheading}
        />
      </div>
      <AppSection />
      <HowItWorks data={works} />
      <Drama />
      <PretzelMean />
      <Backed />
      <Testimonial />
    </Layout>
  )
}
