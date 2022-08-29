import Image from '@components/atoms/Image'
import isHB from '@functions/isHB'
import { Popover, Transition } from '@headlessui/react'
import { useRouter } from 'next/router'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import styles from './PrimaryMenu.module.scss'
import Link from 'next/link'
import isLinkActive from '@functions/isLinkActive'
import cn from 'classnames'
import { useEffect, useState } from 'react'

export default function PrimaryMenu() {
  const router = useRouter()
  const asPath = router ? router.asPath : '/'
  const [open, setOpen] = useState(false)
  const [scroll, setScroll] = useState(false)

  const menus = [
    {
      title: "Why Pretzel",
      link: "/why-pretzel"
    },
    {
      title: "Plans",
      link: ""
    },
    {
      title: "Resources",
      link: "/resources"
    },
    {
      title: "FAQ",
      link: "/faq"
    },
    {
      title: "Get a Quote",
      link: "/"
    }
  ]

  const submenu = [
    {
      title: "Vehicle",
      link: "/car",
      text: "Breakdowns happen. Protect your transmission, brakes, A/C, and more.",
      icon: "vehicle",
    },
    {
      title: "Home",
      link: "/homes",
      text: "Cover your dishwasher, electrical, plumbing, and other stuff.",
      icon: "home",
    },
    {
      title: "Electronics",
      link: "/electronics",
      text: "From breaks to bugs, protect your laptop, gaming systems, and other bits and bytes.",
      icon: "electronics",
    },
    {
      title: "Phone",
      link: "/phone",
      text: "Your smartphone is essential. Cover it for just a few dollars a month.",
      icon: "phone",
    }
  ]

  const subNav = (screen) => {
    if (screen === 'desktop') {
      return (
        <div className={cn('subnav', styles.subnav)}>
          <div className={styles.submenu_body}>
            {submenu.map((subitem, index) => {
              return (
                <div key={"sub" + index} className={styles.subnav_item}>
                  <Link href={subitem.link}>
                    <div>
                      <div className='flex items-center pb-2'>
                        <Image src={subitem.icon} alt={subitem.title} className="lg:h-14 xl:h-16 pr-6" />
                        <p className={styles.subnav_title}>{subitem.title}</p>
                      </div>
                      <p className={styles.subnav_text}>{subitem.text}</p>
                    </div>
                  </Link>
                </div>
              )
            })}
          </div>
          <div className={styles.subnav_button}>
            <Link href='/plans'>
              <a>See All</a>
            </Link>
          </div>
        </div>
      )
    } else {
      return (
        <div className={cn(
          styles.subnavMobile,
          open ? 'h-auto scale-1' : 'scale-0 h-0 hidden'
        )}>
          <div>
            {submenu.map((subitem, index) => {
              return (
                <div key={"sub" + index} className={styles.subnav_item}>
                  <Link href={subitem.link}>
                    <div>
                      <div className='flex items-center'>
                        <Image src={subitem.icon} alt={subitem.title} className="h-14 w-20 pr-6" />
                        <p className={styles.subnav_title}>{subitem.title}</p>
                      </div>
                      <p className={styles.subnav_text}>{subitem.text}</p>
                    </div>
                  </Link>
                </div>
              )
            })}
          </div>
          <div className={styles.subnav_button}>
            <Link href='/plans'>
              <a>See All</a>
            </Link>
          </div>
        </div>
      )
    }
  }

  useEffect(() => {
    const event = () => {
      setScroll(() => {
        if (typeof window !== 'undefined') {
          if (window.scrollY < 50) {
            return false;
          }
        }

        return true;
      });
    };
    document.addEventListener('scroll', event);
    return () => document.removeEventListener('scroll', event);
  }, [])

  console.log(asPath)
  return (
    <Popover >
      <div className={cn(styles.wrap, scroll && 'bg-white shadow-lg  duration-300 !fixed w-full')}>
        <div className={styles.inner}>
          <div className={styles.desktop}>
            <div className='flex'>
              <div className={styles.logo}>
                {
                  isHB(asPath) && !scroll ? (
                    <Image
                      src='logo_primary'
                      href='/'
                      width={112}
                      height={25}
                      alt="primary logo"
                    />
                  ) : (
                    <Image
                      src='logo_secondary'
                      href='/'
                      width={112}
                      height={25}
                      alt="secondary logo"
                    />
                  )
                }

              </div>

              <Popover.Group as='nav' className={styles.menus}>
                {menus?.map((menu, index) => {
                  return (
                    <div key={"main" + index} className='menu-item relative'>
                      <Link href={menu.link} >
                        <a
                          className={cn(
                            isLinkActive(asPath, menu.link) && styles.active,
                            isHB(asPath) && !scroll && styles.primaryColor
                          )}
                        >
                          {menu.title}
                          {menu.title === "Plans" && (
                            <svg className={cn('ml-2 mt-[4px]')} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1 1L5 5L9 1" stroke={isHB(asPath) && !scroll ? "white" : "black"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </a>
                      </Link>
                      {menu.title === "Plans" && subNav('desktop')}
                    </div>
                  )
                })}
              </Popover.Group>
            </div>
            <div className='flex'>
              <Popover.Group as='nav' className={styles.menus}>
                <Link href='/'>
                  <a className={styles.login}>
                    Login
                  </a>
                </Link>
                <Link href='/'>
                  <a className='btn_quote'>
                    Instant quote
                  </a>
                </Link>
              </Popover.Group>
              <div className={styles.hamburgerWrap}>
                <Popover.Button
                  className={cn(
                    isHB(asPath) && styles.primaryColor,
                    styles.hamburger,
                  )}
                >
                  <span>Open menu</span>
                  <MenuIcon aria-hidden='true' />
                </Popover.Button>
              </div>
            </div>
          </div>
        </div>
      </div >
      <Transition>
        <Popover.Panel focus className={styles.mobile}>
          <div className={styles.mobileInner}>
            <div className={styles.mobileHead}>
              <Link href='/'>
                <a>
                  <Image src='logo_secondary' alt='logo' />
                </a>
              </Link>
              <div className={styles.hamburgerWrap}>
                <Popover.Button className={styles.hamburger}>
                  <span>Close menu</span>
                  <XIcon aria-hidden='true' />
                </Popover.Button>
              </div>
            </div>

            <div className={styles.mobileBody}>
              <ul>
                {menus?.map((menu, index) => {
                  if (menu.title === "Plans") {
                    return (
                      <li key={index}>
                        <p
                          className={cn(
                            isLinkActive(asPath, menu.link) && styles.mobileActive,
                            styles.mobileMenu
                          )}
                          onClick={() => setOpen(!open)}
                        >
                          {menu.title} {menu.title === "Plans" && (
                            <svg className={cn('ml-2 mt-1', open && 'rotate-180')} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1 1L5 5L9 1" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </p>
                        {subNav("mobile")}
                      </li>
                    )
                  } else {
                    return (
                      <li key={index}>
                        <Link href={menu.link}>
                          <a className={cn(
                            isLinkActive(asPath, menu.link) && styles.mobileActive,
                            styles.mobileMenu
                          )}>
                            {menu.title}
                          </a>
                        </Link>
                      </li>
                    )
                  }
                })}
                <Link href='/'>
                  <a className={styles.mobileMenu}>
                    Login
                  </a>
                </Link>
                <Link href='/'>
                  <a className={styles.mobileMenu}>
                    Instant quote
                  </a>
                </Link>
              </ul>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover >
  )
}