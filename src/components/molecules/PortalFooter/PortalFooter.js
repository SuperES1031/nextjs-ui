import Icon from '@components/atoms/Icon'
import Image from '@components/atoms/Image'
import Link from 'next/link'
import styles from './PortalFooter.module.scss'

export default function PortalFooter() {

  const menus = [
    {
      text: 'Why Pretzel',
      link: '/why-pretzel',
    },
    {
      text: 'Newsroom',
      link: '/newsroom',
    },
    {
      text: 'Legal Stuff',
      link: '/legal-stuff',
    },
    {
      text: 'Join the Team',
      link: '/join-the-team',
    },
    {
      text: 'Transparency',
      link: '/transparency',
    },
    {
      text: 'Giving back',
      link: '/giving-back',
    },
    {
      text: 'Terms of services',
      link: '/terms-of-services',
    },
    {
      text: 'Contact Us',
      link: '/contact',
    }
  ]

  return (
    <div className={styles.root}>
      <div className={styles.wrap}>
        <div className={styles.inner}>
          <div className={styles.menu}>
            <div>
              <Image
                src='logo_primary'
                width={138}
                height={30}
                alt="footer logo"
              />
              <div className={styles.social}>
                <a
                  href='https://www.facebook.com/pretzelwarranty/'
                  target='_blank'
                  rel='noreferrer'
                  className={styles.icon}
                >
                  <svg width="11" height="23" viewBox="0 0 11 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M7.02978 22.55V11.4963H10.1573L10.5718 7.6872H7.02978L7.03509 5.78069C7.03509 4.78721 7.13184 4.25488 8.59443 4.25488H10.5496V0.445312H7.42166C3.66445 0.445312 2.342 2.29315 2.342 5.40064V7.68763H0V11.4968H2.342V22.55H7.02978Z" fill="white" />
                  </svg>
                </a>

                <a
                  href='https://twitter.com/pretzelwarranty/'
                  target='_blank'
                  rel='noreferrer'
                  className={styles.icon}
                >
                  <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M10.7479 5.44954L10.7937 6.19778L10.0298 6.10616C7.24933 5.75494 4.82023 4.56386 2.75778 2.56346L1.74947 1.57089L1.48975 2.30386C0.939767 3.93778 1.29115 5.66332 2.43695 6.82386C3.04805 7.46521 2.91055 7.55683 1.85641 7.17508C1.48975 7.05291 1.16893 6.96129 1.13837 7.0071C1.03143 7.114 1.39809 8.50359 1.68836 9.05332C2.08557 9.81683 2.89527 10.5651 3.78136 11.0079L4.52996 11.3591L3.64387 11.3744C2.78833 11.3744 2.75778 11.3897 2.84944 11.7103C3.15499 12.7029 4.3619 13.7566 5.70632 14.2147L6.65351 14.5353L5.82853 15.024C4.60634 15.7264 3.17027 16.1235 1.73419 16.154C1.04671 16.1693 0.481445 16.2303 0.481445 16.2762C0.481445 16.4289 2.34529 17.284 3.42998 17.6199C6.68407 18.6125 10.5492 18.1849 13.452 16.4899C15.5144 15.2836 17.5769 12.8862 18.5393 10.5651C19.0588 9.32818 19.5782 7.06818 19.5782 5.984C19.5782 5.28156 19.624 5.18994 20.4796 4.35008C20.9837 3.86143 21.4573 3.32697 21.549 3.17427C21.7017 2.88413 21.6865 2.88413 20.9073 3.14373C19.6087 3.60184 19.4254 3.54075 20.0671 2.85359C20.5407 2.36494 21.1059 1.47927 21.1059 1.21967C21.1059 1.17386 20.8768 1.25021 20.6171 1.38765C20.3421 1.54035 19.731 1.7694 19.2726 1.90684L18.4477 2.16643L17.6991 1.66251C17.2866 1.38765 16.706 1.08224 16.4005 0.99062C15.6213 0.776837 14.4297 0.807377 13.7269 1.0517C11.8173 1.73886 10.6104 3.51021 10.7479 5.44954Z" fill="white" />
                  </svg>
                </a>

                <a
                  href='https://www.instagram.com/pretzelwarranty/'
                  target='_blank'
                  rel='noreferrer'
                  className={styles.icon}
                >
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M10.7075 0.328125C7.94506 0.328125 7.59839 0.340204 6.51343 0.389578C5.43059 0.439163 4.69147 0.610595 4.04473 0.862126C3.37575 1.12192 2.80826 1.46945 2.2429 2.03502C1.67711 2.60039 1.32959 3.16787 1.06895 3.83664C0.816778 4.48359 0.645135 5.22293 0.596397 6.30534C0.547871 7.39029 0.535156 7.73718 0.535156 10.4996C0.535156 13.262 0.547447 13.6076 0.596609 14.6926C0.646407 15.7754 0.817838 16.5145 1.06916 17.1613C1.32917 17.8302 1.67669 18.3977 2.24227 18.9631C2.80742 19.5289 3.3749 19.8772 4.04346 20.137C4.69062 20.3886 5.42996 20.56 6.51258 20.6096C7.59754 20.659 7.944 20.671 10.7062 20.671C13.4688 20.671 13.8144 20.659 14.8994 20.6096C15.9822 20.56 16.7222 20.3886 17.3693 20.137C18.0381 19.8772 18.6047 19.5289 19.1699 18.9631C19.7357 18.3977 20.0832 17.8302 20.3439 17.1615C20.5939 16.5145 20.7655 15.7752 20.8164 14.6928C20.8651 13.6078 20.8779 13.262 20.8779 10.4996C20.8779 7.73718 20.8651 7.39051 20.8164 6.30555C20.7655 5.22271 20.5939 4.48359 20.3439 3.83685C20.0832 3.16787 19.7357 2.60039 19.1699 2.03502C18.6041 1.46924 18.0383 1.12171 17.3687 0.862126C16.7203 0.610595 15.9807 0.439163 14.8979 0.389578C13.8129 0.340204 13.4675 0.328125 10.7043 0.328125H10.7075ZM9.79491 2.1627C10.0657 2.16228 10.3679 2.1627 10.7074 2.1627C13.4231 2.1627 13.745 2.17245 14.8175 2.22118C15.8092 2.26653 16.3474 2.43224 16.706 2.57146C17.1807 2.75582 17.5191 2.9762 17.8749 3.3322C18.2309 3.68821 18.4512 4.02725 18.636 4.50192C18.7752 4.86004 18.9412 5.39828 18.9863 6.39C19.035 7.46224 19.0456 7.78434 19.0456 10.4988C19.0456 13.2134 19.035 13.5354 18.9863 14.6077C18.941 15.5994 18.7752 16.1376 18.636 16.4958C18.4517 16.9704 18.2309 17.3084 17.8749 17.6642C17.5189 18.0202 17.1809 18.2406 16.706 18.4249C16.3479 18.5648 15.8092 18.7301 14.8175 18.7754C13.7452 18.8242 13.4231 18.8348 10.7074 18.8348C7.99138 18.8348 7.6695 18.8242 6.59726 18.7754C5.60554 18.7297 5.0673 18.564 4.70854 18.4247C4.23388 18.2404 3.89483 18.02 3.53883 17.664C3.18282 17.308 2.96244 16.9698 2.77766 16.4949C2.63844 16.1368 2.47252 15.5986 2.42738 14.6068C2.37864 13.5346 2.3689 13.2125 2.3689 10.4963C2.3689 7.7801 2.37864 7.4597 2.42738 6.38746C2.47273 5.39574 2.63844 4.8575 2.77766 4.49896C2.96202 4.02429 3.18282 3.68524 3.53883 3.32924C3.89483 2.97324 4.23388 2.75286 4.70854 2.56807C5.06709 2.42822 5.60554 2.26293 6.59726 2.21737C7.53557 2.17499 7.8992 2.16228 9.79491 2.16016V2.1627ZM16.1366 3.85199C15.4627 3.85199 14.916 4.39807 14.916 5.07214C14.916 5.746 15.4627 6.29271 16.1366 6.29271C16.8104 6.29271 17.3572 5.746 17.3572 5.07214C17.3572 4.39828 16.8104 3.85156 16.1366 3.85156V3.85199ZM10.7069 5.27734C7.8222 5.27734 5.4834 7.61614 5.4834 10.5008C5.4834 13.3855 7.8222 15.7232 10.7069 15.7232C13.5915 15.7232 15.9295 13.3855 15.9295 10.5008C15.9295 7.61614 13.5913 5.27734 10.7067 5.27734H10.7069ZM10.7069 7.10938C12.5793 7.10938 14.0974 8.62725 14.0974 10.4999C14.0974 12.3723 12.5793 13.8903 10.7069 13.8903C8.83428 13.8903 7.31641 12.3723 7.31641 10.4999C7.31641 8.62725 8.83428 7.10938 10.7069 7.10938Z" fill="white" />
                  </svg>
                </a>

                <a
                  href='https://www.pinterest.com/pretzelwarranty/'
                  target='_blank'
                  rel='noreferrer'
                  className={styles.icon}
                >
                  <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M11.2185 0.53125C5.26417 0.53125 0.4375 5.36041 0.4375 11.3207C0.4375 15.891 3.27897 19.7956 7.28887 21.3679C7.19458 20.5148 7.11049 19.2052 7.3271 18.2718C7.52205 17.4301 8.59111 12.9096 8.59111 12.9096C8.59111 12.9096 8.26873 12.263 8.26873 11.3079C8.26873 9.80702 9.13646 8.6874 10.2195 8.6874C11.1382 8.6874 11.5829 9.37856 11.5829 10.2074C11.5829 11.1332 10.9942 12.5168 10.6897 13.7997C10.4361 14.8746 11.2287 15.7494 12.2863 15.7494C14.2027 15.7494 15.6757 13.727 15.6757 10.8081C15.6757 8.2245 13.8217 6.41883 11.1726 6.41883C8.10564 6.41883 6.30519 8.72183 6.30519 11.1013C6.30519 12.0284 6.66069 13.0231 7.10666 13.5637C7.19458 13.6709 7.20732 13.764 7.18184 13.8736C7.10029 14.2141 6.91808 14.9473 6.8824 15.0965C6.83526 15.2942 6.72568 15.3363 6.52053 15.2419C5.17498 14.6145 4.334 12.6431 4.334 11.0618C4.334 7.65832 6.80468 4.53154 11.4568 4.53154C15.1966 4.53154 18.103 7.19925 18.103 10.7634C18.103 14.4819 15.7598 17.4748 12.5093 17.4748C11.416 17.4748 10.389 16.906 10.0373 16.2353C10.0373 16.2353 9.49706 18.2947 9.36582 18.7997C9.12245 19.737 8.46496 20.9114 8.02664 21.6281C9.03453 21.9418 10.1061 22.1101 11.2185 22.1101C17.1728 22.1101 21.9995 17.2797 21.9995 11.3207C21.9995 5.36041 17.1728 0.53125 11.2185 0.53125Z" fill="white" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <ul>
                <li className={styles.title}>
                  <Link href="/plans">
                    <a>
                      Plans
                    </a>
                  </Link>
                </li>
                <li className={styles.title}>
                  <Link href="/faq">
                    <a>
                      FAQ
                    </a>
                  </Link>
                </li>
                <li className={styles.title}>
                  <Link href="/login">
                    <a>
                      Login
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className={styles.heading}>Services</h4>
              <ul>
                {menus.map((menu, index) => (
                  <li key={index}>
                    <Link href={menu.link}>
                      <a className={styles.link}>{menu.text}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className={styles.heading}>Stay In Touch</h4>
              <p className={styles.text}>Subscribe to our newsletter</p>
              <form className={styles.form}>
                <input type='email' placeholder='Enter Email' />
                <button type='button'>
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.392127 7.04697C-0.129873 6.87297 -0.134873 6.59197 0.402127 6.41297L19.4891 0.0509739C20.0181 -0.125026 20.3211 0.170974 20.1731 0.688974L14.7191 19.775C14.5691 20.304 14.2641 20.322 14.0401 19.82L10.4461 11.732L16.4461 3.73197L8.44613 9.73197L0.392127 7.04697V7.04697Z" fill="#EA2667" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
          <hr className={styles.border} />
          <div className={styles.copyWrite}>
            Copyright 2022 My Pretzel LLC
          </div>
        </div>
      </div>
    </div >
  )
}