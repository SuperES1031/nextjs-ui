import Space from "@components/atoms/Space"
import Layout from "@components/common/Layout"
import NATextHeading from "@components/molecules/NATextHeading"
import TextHero from "@components/molecules/TextHero"
import Partners from "@components/organisms/Partners"

export default function OurPartners() {
  const text = {
    heading: "Our Charitable Partners",
    subheading: "Making the world a better place, one warranty at a time."
  }
  return (
    <Layout>
      <Space />
      <div className="pt-16 px-4">
        <TextHero heading={text.heading} subheading={text.subheading} />
      </div>
      <Partners />
    </Layout>
  )
}