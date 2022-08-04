import Background from '@components/atoms/Background'
import SideNavItem from '@components/atoms/SideNavItem'
import NATextHeading from '@components/molecules/NATextHeading'
import styles from './Terms.module.scss'

export default function Terms() {
  const text = {
    heading: "Mind your Ts and Cs.",
    subheading: "Aliquam mart vita ugit blandit. Curabitur porta augu tsagittis ut Amat mivel a fermentum, rhoncus pretium elit, Nunc sempus, eget dictut duis aliquam."
  }

  const nav = [
    {
      title: "Policy Terms",
      link: [
        {
          text: "Pulicy Schtermit",
          link: "#pharetra_adipiscing"
        },
        {
          text: "Pulicy Schtermit",
          link: "#come_from"
        },
        {
          text: "Pulicy Schtermit",
          link: "#where_come_from"
        }
      ]
    },
    {
      title: "Policy Terms",
      link: [
        {
          text: "Pulicy Schtermit",
          link: "#"
        },
        {
          text: "Pulicy Schtermit",
          link: "#"
        },
        {
          text: "Pulicy Schtermit",
          link: "#"
        }
      ]
    },
    {
      title: "Policy Terms",
      link: [
        {
          text: "Pulicy Schtermit",
          link: "#"
        },
        {
          text: "Pulicy Schtermit",
          link: "#"
        },
        {
          text: "Pulicy Schtermit",
          link: "#"
        }
      ]
    },
    {
      title: "Policy Terms",
      link: [
        {
          text: "Pulicy Schtermit",
          link: "#"
        },
        {
          text: "Pulicy Schtermit",
          link: "#"
        },
        {
          text: "Pulicy Schtermit",
          link: "#"
        }
      ]
    }
  ]


  return (
    <div className={styles.root}>
      <Background image='plans_left' className='hidden md:block top-[50%]' alt='background left' />
      <Background image='plans_right' className='hidden md:block right-0' alt='background right' />
      <div className={styles.wrap}>
        <div className={styles.head}>
          <NATextHeading heading={text.heading} subheading={text.subheading} />
        </div>
        <div className={styles.body}>
          <div className={styles.bodyInner}>
            <div className={styles.nav}>
              {nav?.map((item, index) => (
                <SideNavItem item={item} key={index} index={index} />
              ))}
            </div>
            <div className={styles.content}>
              <div className={styles.block} id="pharetra_adipiscing">
                <p className={styles.bold}>Pharetra adipiscing</p>
                <p className={styles.semi}>Last Update: 23 April 2021</p>
                <p className={styles.text}>
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </p>
              </div>
              <div className={styles.block} id="come_from">
                <p className={styles.bold}>Where does it come from?</p>
                <p className={styles.text}>
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                  The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                </p>
              </div>
              <div className={styles.block} id="where_come_from">
                <p className={styles.bold}>Where does it come from?</p>
                <p className={styles.text}>
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                  The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}