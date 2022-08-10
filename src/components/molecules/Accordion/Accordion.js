import { useState } from 'react'
import styles from './Accordion.module.scss'
import AccordionItem from '@components/atoms/AccordionItem'

export default function Accordion(props) {
  const [activeIndex, setActiveIndex] = useState(props.open)

  const accordionData = props.accordion
  const icon = props.icon
  const accordion = accordionData?.map((item, index) => {
    const showDescription = index === activeIndex ? "showDescription" : ""
    const ariaExpanded = index === activeIndex ? "ariaExpanded" : ""

    return (
      <AccordionItem
        showDescription={showDescription}
        ariaExpanded={ariaExpanded}
        item={item}
        index={index}
        icon={icon}
        onClick={() => {
          if (index === activeIndex) setActiveIndex(null)
          else setActiveIndex(index);
        }}
        key={index}
      />
    )
  })

  return (
    <div className={styles.accordion}>
      {accordion}
    </div>
  )
}

