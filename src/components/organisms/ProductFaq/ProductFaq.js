import Background from '@components/atoms/Background'
import Accordion from '@components/molecules/Accordion'
import NATextHeading from '@components/molecules/NATextHeading'
import Link from 'next/link'
import styles from './ProductFaq.module.scss'

export default function ProductFaq() {
  const text = {
    heading: "Wait! I have a question!",
    subheading: "Well, isn’t it lucky that we put together this FAQ, then."
  }

  const faq = [
    {
      title: "What exactly does a Pretzel vehicle protection plan cover?",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      title: "What exactly does a Pretzel vehicle protection plan cover?",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      title: "What exactly does a Pretzel vehicle protection plan cover?",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      title: "What exactly does a Pretzel vehicle protection plan cover?",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      title: "What exactly does a Pretzel vehicle protection plan cover?",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
  ]

  return (
    <div className={styles.root}>
      <Background image='faq_icon' className='right-0 top-[5%]' alt='background right' />
      <div className={styles.wrap}>
        <div className={styles.head}>
          <NATextHeading heading={text.heading} subheading={text.subheading} />
        </div>
        <div className={styles.body}>
          <Accordion accordion={faq} icon='accordion_icon2' />
        </div>
        <div className='text-center md:py-10'>
          <a href='./faq' rel='noreferrer' className='text-base font-bold underline text-[#1F1A3D]'>SEE ALL</a>
        </div>
      </div>
    </div>
  )
}