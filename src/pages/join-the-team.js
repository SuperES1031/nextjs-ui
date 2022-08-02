import Space from "@components/atoms/Space";
import Layout from "@components/common/Layout";
import NATextHeading from "@components/molecules/NATextHeading";
import OurProcess from "@components/organisms/OurProcess";
import TeamFaq from "@components/organisms/TeamFaq";

export default function JoinTheTeam() {
  const team = {
    heading: "Team up with us",
    subheading: "We are technology-driven, 100% remote, and looking for passionate and creative individuals ready to dive headfirst into something totally new. We’re disrupting an industry by putting kindness first – in our services and our work environment. Unexpected maybe, but necessary."
  }

  const mission = {
    heading: "Our mission",
    subheading: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
  }

  const who = {
    heading: "Who should work at Pretzel?",
    subheading: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum h 1500s when an unknown printer took a gallay of type and scrambled it to make a type spe"
  }

  return (
    <Layout>
      <Space />
      <div className="py-20 m-auto max-w-7xl px-6">
        <NATextHeading heading={team.heading} subheading={team.subheading} />
      </div>
      <div className="bg-[#F5F4FA] py-20 md:py-32 px-6">
        <div className="max-w-7xl m-auto py-8 md:pb-14">
          <NATextHeading heading={mission.heading} subheading={mission.subheading} />
        </div>
        <div className="max-w-7xl m-auto py-8 md:pt-14">
          <NATextHeading heading={who.heading} subheading={who.subheading} />
        </div>
      </div>
      <OurProcess />
      <TeamFaq />
    </Layout>
  )
}