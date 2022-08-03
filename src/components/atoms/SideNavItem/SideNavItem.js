import GetParam from '@functions/getParam';
import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'
import styles from './SideNavItem.module.scss'

export default function SideNavItem({ item, index }) {
  const router = useRouter()

  const [isActive, setIsActive] = useState(index === 0 ? true : false);
  const [param, setParam] = useState('')

  useEffect(() => {
    setParam(GetParam(router?.asPath))
  }, [router])

  return (
    <div className={styles.item} >
      <p className={styles.nav_title} onClick={() => setIsActive(!isActive)}>
        {item.title}
        <svg className={cn(styles.icon, isActive && styles.rotate)}
          width="16" height="27" viewBox="0 0 16 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.49023 24.4922L13.4902 13.5016L2.49023 2.51107" stroke="#1F1A3D" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </p>
      <div className={cn(
        styles.subnav,
        isActive && styles.active
      )}>
        {item.link.map((link, i) => (
          <p className={cn(styles.link, param === link.link && styles.activeLink)} key={i}>
            <Link href={link.link}>
              <a>{link.text}</a>
            </Link>
          </p>
        ))}
      </div>
    </div>
  )
}