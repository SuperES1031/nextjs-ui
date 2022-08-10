import Background from '@components/atoms/Background'
import Accordion from '@components/molecules/Accordion'
import GridImage from '@components/molecules/GridImage'
import TextHero from '@components/molecules/TextHero'
import styles from './Faq.module.scss'

export default function Faq() {
  const text = {
    heading: "FAQ",
    subheading: "All your burning questions about our protection plans, answered at last."
  }

  const data = [
    {
      image: 'general',
      subheading: 'General'
    },
    {
      image: 'vehicle',
      subheading: 'Vehicle'
    },
    {
      image: 'home',
      subheading: 'Home'
    },
    {
      image: 'electronics',
      subheading: 'Electronics'
    },
    {
      image: 'phone',
      subheading: 'Phone'
    },
    {
      image: 'general',
      subheading: 'Giving'
    }
  ]

  const faq = [
    {
      title: "What exactly does a Pretzel vehicle protection plan cover?",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      title: "What’s not covered?",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum h 1500s when an unknown printer took a gallay of type and scrambled it to make a type spe"
    },
    {
      title: "How is a Pretzel plan different from insurance?",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum h 1500s when an unknown printer took a gallay of type and scrambled it to make a type spe"
    },
    {
      title: "I have a protection plan from another company. Can I switch?",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum h 1500s when an unknown printer took a gallay of type and scrambled it to make a type spe"
    },
    {
      title: "How do I file a claim?",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum h 1500s when an unknown printer took a gallay of type and scrambled it to make a type spe"
    }
  ]

  return (
    <div className={styles.root}>
      <Background image='plans_left' className='hidden md:block bottom-0' alt='background left' />
      <Background image='plans_right' className='hidden md:block right-0' alt='background right' />
      <div className={styles.wrap}>
        <div className={styles.head}>
          <TextHero heading={text.heading} subheading={text.subheading} />
        </div>
        <div className={styles.body}>
          <GridImage data={data} />
        </div>
        <div className={styles.footer}>
          <Accordion accordion={faq} icon='accordion_icon2' open={0} />
        </div>
      </div>
    </div>
  )
}