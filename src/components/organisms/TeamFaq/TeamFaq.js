import Background from '@components/atoms/Background'
import Accordion from '@components/molecules/Accordion'
import styles from './TeamFaq.module.scss'

export default function TeamFaq() {
  const customer = [
    {
      title: 'Professional Services',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum h 1500s when an unknown printer took a gallay of type and scrambled it to make a type spe'
    },
    {
      title: 'Professional Services Consultant',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum h 1500s when an unknown printer took a gallay of type and scrambled it to make a type spe'
    },
    {
      title: 'Professional Services Manager',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum h 1500s when an unknown printer took a gallay of type and scrambled it to make a type spe'
    },
    {
      title: 'Solutions Engineer',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum h 1500s when an unknown printer took a gallay of type and scrambled it to make a type spe '
    }
  ]

  const engineer = [
    {
      title: 'Director of Engineering',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum h 1500s when an unknown printer took a gallay of type and scrambled it to make a type spe'
    },
    {
      title: 'Director of Engineering, Core Services',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum h 1500s when an unknown printer took a gallay of type and scrambled it to make a type spe'
    },
    {
      title: 'Engineering Manager',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum h 1500s when an unknown printer took a gallay of type and scrambled it to make a type spe'
    },
    {
      title: 'Midlevel I Senior I Lead Frontend Engineer',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum h 1500s when an unknown printer took a gallay of type and scrambled it to make a type spe '
    }
  ]

  const it = [
    {
      title: 'Head of Go To Market Systems',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum h 1500s when an unknown printer took a gallay of type and scrambled it to make a type spe'
    },
    {
      title: 'IT Helpdesk Technician.',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum h 1500s when an unknown printer took a gallay of type and scrambled it to make a type spe'
    },
    {
      title: 'IT Specialist',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum h 1500s when an unknown printer took a gallay of type and scrambled it to make a type spe'
    }
  ]


  return (
    <div className={styles.root}>
      <Background image='plans_left' className='top-[40%]' alt='background left' />
      <Background image='plans_right' className='right-0 top-[25%]' alt='background right' />
      <div className={styles.wrap}>
        <div className={styles.faq}>
          <p className={styles.title}>Customer Experience</p>
          <Accordion accordion={customer} icon='accordion_icon1' />
        </div>
        <div className={styles.faq}>
          <p className={styles.title}>Engineering</p>
          <Accordion accordion={engineer} icon='accordion_icon1' />
        </div>
        <div className={styles.faq}>
          <p className={styles.title}>IT</p>
          <Accordion accordion={it} icon='accordion_icon1' />
        </div>
      </div>
    </div>
  )
}