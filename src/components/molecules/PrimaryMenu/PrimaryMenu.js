import Image from '@components/atoms/Image'
import isHB from '@functions/isHB'
import { Popover, Transition } from '@headlessui/react'
import { useRouter } from 'next/router'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import styles from './PrimaryMenu.module.scss'
import Link from 'next/link'
import isLinkActive from '@functions/isLinkActive'
import cn from 'classnames'

export default function PrimaryMenu() {
  const router = useRouter()
  const asPath = router ? router.asPath : '/'

  return (
    <Popover >
      <div className={styles.wrap}>
        <div className={styles.inner}>
          <div className={styles.desktop}>
            <div className='flex'>
              <div className={styles.logo}>
                {
                  isHB(asPath) ? (
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
                <Link href='/why-pretzel'>
                  <a
                    className={cn(
                      isLinkActive(asPath, '/why-pretzel') && styles.active,
                      isHB(asPath) && styles.primaryColor,
                      styles.menu
                    )}
                  >
                    Why Pretzel
                  </a>
                </Link>
                <Link href='/plans'>
                  <a
                    className={cn(
                      isLinkActive(asPath, '/plans') && styles.active,
                      isHB(asPath) && styles.primaryColor,
                      styles.menu
                    )}
                  >
                    Plans
                  </a>
                </Link>
                <Link href='/resources'>
                  <a
                    className={cn(
                      isLinkActive(asPath, '/resources') && styles.active,
                      isHB(asPath) && styles.primaryColor,
                      styles.menu
                    )}
                  >
                    Resources
                  </a>
                </Link>
                <Link href='/faq'>
                  <a
                    className={cn(
                      isLinkActive(asPath, '/faq') && styles.active,
                      isHB(asPath) && styles.primaryColor,
                      styles.menu
                    )}
                  >
                    FAQ
                  </a>
                </Link>
                <Link href='/get-quote'>
                  <a
                    className={cn(
                      isLinkActive(asPath, '/get-quote') && styles.active,
                      isHB(asPath) && styles.primaryColor,
                      styles.menu
                    )}
                  >
                    Get a Quote
                  </a>
                </Link>
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
      </div>
      <Transition>
        <Popover.Panel focus className={styles.mobile}>
          <div className={styles.mobileInner}>
            <div className={styles.mobileHead}>
              <div className={styles.hamburgerWrap}>
                <Popover.Button className={styles.hamburger}>
                  <span>Close menu</span>
                  <XIcon aria-hidden='true' />
                </Popover.Button>
              </div>
            </div>

            <div className={styles.mobileBody}>
              <nav>
                <Link href='/why-pretzel'>
                  <a
                    className={cn(
                      isLinkActive(asPath, '/why-pretzel') && styles.mobileActive,
                      styles.mobileMenu
                    )}
                  >
                    Why Pretzel
                  </a>
                </Link>
                <Link href='/plans'>
                  <a
                    className={cn(
                      isLinkActive(asPath, '/plans') && styles.mobileActive,
                      styles.mobileMenu
                    )}
                  >
                    Plans
                  </a>
                </Link>
                <Link href='/resources'>
                  <a
                    className={cn(
                      isLinkActive(asPath, '/resources') && styles.mobileActive,
                      styles.mobileMenu
                    )}
                  >
                    Resources
                  </a>
                </Link>
                <Link href='/faq'>
                  <a
                    className={cn(
                      isLinkActive(asPath, '/faq') && styles.mobileActive,
                      styles.mobileMenu
                    )}
                  >
                    FAQ
                  </a>
                </Link>
                <Link href='/get-quote'>
                  <a
                    className={cn(
                      isLinkActive(asPath, '/get-quote') && styles.mobileActive,
                      styles.mobileMenu
                    )}
                  >
                    Get a Quote
                  </a>
                </Link>
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
              </nav>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover >
  )
}