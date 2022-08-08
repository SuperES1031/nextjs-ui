import Background from '@components/atoms/Background'
import NATextHeading from '@components/molecules/NATextHeading'
import SeePlans from '@components/molecules/SeePlans'
import Link from 'next/link'
import styles from './ContactTop.module.scss'

export default function ContactTop() {
  const text = {
    heading: "Make Contact",
    subheading: "We won’t be weird about it."
  }

  const seeplans = [
    {
      image: "vehicle",
      subheading: "Your Vehicle",
      text: "Breakdowns happen. Protect your transmission, brakes, A/C, and more.",
      cta: "See Plans",
      ctalink: "/",
      price: "79.99"
    },
    {
      image: "home_1",
      subheading: "Your Home",
      text: "Cover your dishwasher, electrical, plumbing, and other stuff.",
      cta: "See Plans",
      ctalink: "/",
      price: "39.99"
    },
    {
      image: "electronics_1",
      subheading: "Your Electronics",
      text: "From breaks to bugs, protect your laptop, gaming systems, and other bits and bytes.",
      cta: "See Plans",
      ctalink: "/",
      price: "24.99"
    },
    {
      image: "phone_1",
      subheading: "Your Phone",
      text: "Your smartphone is essential. Cover it for just a few dollars a month.",
      cta: "See Plans",
      ctalink: "/",
      price: "8.00"
    }
  ]

  return (
    <div className={styles.root}>
      <Background image='plans_left' className='hidden md:block top-[20%]' alt='background left' />
      <Background image='plans_right' className='hidden md:block right-0' alt='background right' />
      <div className={styles.wrap}>
        <div className={styles.head}>
          <NATextHeading heading={text.heading} subheading={text.subheading} />
          <div className={styles.social}>
            <a
              href='https://www.facebook.com/pretzelwarranty/'
              target='_blank'
              rel='noreferrer'
              className={styles.icon}
            >
              <svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M5.31965 16V7.99906H7.68636L8 5.2419H5.31965L5.32367 3.86191C5.32367 3.1428 5.39689 2.75748 6.50368 2.75748H7.98325V0H5.6162C2.773 0 1.77227 1.33752 1.77227 3.58682V5.24221H0V7.99938H1.77227V16H5.31965Z" fill="#EE2E64" />
              </svg>
            </a>

            <a
              href='https://twitter.com/pretzelwarranty/'
              target='_blank'
              rel='noreferrer'
              className={styles.icon}
            >
              <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M8.25447 3.72422L8.29132 4.32976L7.67715 4.25561C5.44156 3.97138 3.4885 3.00746 1.83023 1.38857L1.01953 0.5853L0.810707 1.17848C0.368503 2.50078 0.651022 3.89723 1.57228 4.83643C2.06362 5.35547 1.95307 5.42962 1.10551 5.12067C0.810707 5.0218 0.552755 4.94766 0.528188 4.98473C0.442204 5.07123 0.737006 6.19581 0.970392 6.64069C1.28976 7.25859 1.94078 7.86413 2.65322 8.22251L3.25511 8.50674L2.54267 8.5191C1.8548 8.5191 1.83023 8.53146 1.90393 8.79098C2.1496 9.59425 3.11999 10.4469 4.20094 10.8177L4.96251 11.0772L4.2992 11.4727C3.31653 12.0411 2.16189 12.3624 1.00724 12.3871C0.454487 12.3995 0 12.4489 0 12.486C0 12.6096 1.49858 13.3016 2.3707 13.5735C4.98708 14.3768 8.09479 14.0307 10.4286 12.659C12.0869 11.6827 13.7452 9.74254 14.519 7.86413C14.9367 6.86314 15.3543 5.03416 15.3543 4.15675C15.3543 3.58828 15.3911 3.51413 16.079 2.83445C16.4844 2.43899 16.8652 2.00646 16.9389 1.88288C17.0617 1.64808 17.0494 1.64808 16.423 1.85817C15.3789 2.22891 15.2315 2.17948 15.7474 1.62337C16.1282 1.22791 16.5826 0.511153 16.5826 0.301067C16.5826 0.263994 16.3984 0.325783 16.1896 0.437005C15.9685 0.560584 15.4771 0.745954 15.1086 0.857175L14.4453 1.06726L13.8434 0.659448C13.5118 0.437005 13.045 0.189846 12.7993 0.115698C12.1729 -0.057313 11.2148 -0.0325972 10.6497 0.16513C9.11431 0.721238 8.14392 2.15476 8.25447 3.72422Z" fill="#EE2E64" />
              </svg>
            </a>

            <a
              href='https://www.instagram.com/pretzelwarranty/'
              target='_blank'
              rel='noreferrer'
              className={styles.icon}
            >
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M8.01088 0.226562C5.86832 0.226562 5.59944 0.235931 4.75793 0.274226C3.91807 0.312686 3.34479 0.44565 2.84317 0.640742C2.3243 0.842243 1.88415 1.11179 1.44565 1.55046C1.00681 1.98896 0.737268 2.42911 0.535109 2.94782C0.339524 3.4496 0.206395 4.02304 0.168593 4.86258C0.130955 5.70408 0.121094 5.97314 0.121094 8.11569C0.121094 10.2582 0.130626 10.5263 0.168757 11.3678C0.207381 12.2077 0.340346 12.781 0.535273 13.2826C0.736939 13.8015 1.00648 14.2416 1.44515 14.6801C1.88349 15.1189 2.32364 15.3891 2.84219 15.5906C3.34413 15.7857 3.91757 15.9187 4.75727 15.9572C5.59878 15.9955 5.8675 16.0048 8.0099 16.0048C10.1526 16.0048 10.4207 15.9955 11.2622 15.9572C12.1021 15.9187 12.676 15.7857 13.1779 15.5906C13.6966 15.3891 14.1361 15.1189 14.5745 14.6801C15.0133 14.2416 15.2829 13.8015 15.485 13.2827C15.679 12.781 15.8121 12.2075 15.8515 11.368C15.8893 10.5265 15.8992 10.2582 15.8992 8.11569C15.8992 5.97314 15.8893 5.70425 15.8515 4.86274C15.8121 4.02288 15.679 3.4496 15.485 2.94798C15.2829 2.42911 15.0133 1.98896 14.5745 1.55046C14.1356 1.11162 13.6968 0.842079 13.1774 0.640742C12.6745 0.44565 12.1009 0.312686 11.261 0.274226C10.4195 0.235931 10.1516 0.226562 8.00842 0.226562H8.01088ZM7.30269 1.65041C7.51274 1.65008 7.74711 1.65041 8.01041 1.65041C10.1168 1.65041 10.3665 1.65797 11.1983 1.69577C11.9675 1.73094 12.3849 1.85947 12.663 1.96745C13.0312 2.11044 13.2937 2.28138 13.5696 2.5575C13.8457 2.83362 14.0167 3.09659 14.16 3.46475C14.268 3.74251 14.3967 4.15998 14.4317 4.92917C14.4695 5.76081 14.4777 6.01063 14.4777 8.11605C14.4777 10.2215 14.4695 10.4713 14.4317 11.3029C14.3965 12.0721 14.268 12.4896 14.16 12.7673C14.017 13.1355 13.8457 13.3977 13.5696 13.6736C13.2935 13.9497 13.0313 14.1207 12.663 14.2636C12.3853 14.3721 11.9675 14.5003 11.1983 14.5355C10.3666 14.5733 10.1168 14.5815 8.01041 14.5815C5.90385 14.5815 5.65419 14.5733 4.82255 14.5355C4.05336 14.5 3.63589 14.3715 3.35763 14.2635C2.98947 14.1205 2.7265 13.9496 2.45038 13.6734C2.17426 13.3973 2.00333 13.135 1.86001 12.7667C1.75203 12.4889 1.62334 12.0715 1.58833 11.3023C1.55053 10.4706 1.54297 10.2208 1.54297 8.11407C1.54297 6.00735 1.55053 5.75884 1.58833 4.92719C1.6235 4.158 1.75203 3.74054 1.86001 3.46244C2.003 3.09429 2.17426 2.83131 2.45038 2.55519C2.7265 2.27907 2.98947 2.10814 3.35763 1.96482C3.63572 1.85635 4.05336 1.72815 4.82255 1.69281C5.55032 1.65994 5.83235 1.65008 7.30269 1.64844V1.65041ZM12.2221 2.96144C11.6994 2.96144 11.2754 3.38498 11.2754 3.9078C11.2754 4.43046 11.6994 4.8545 12.2221 4.8545C12.7447 4.8545 13.1688 4.43046 13.1688 3.9078C13.1688 3.38515 12.7447 2.96111 12.2221 2.96111V2.96144ZM8.01038 4.07031C5.77299 4.07031 3.95898 5.88432 3.95898 8.12171C3.95898 10.3591 5.77299 12.1723 8.01038 12.1723C10.2478 12.1723 12.0611 10.3591 12.0611 8.12171C12.0611 5.88432 10.2476 4.07031 8.01022 4.07031H8.01038ZM8.01155 5.48438C9.4638 5.48438 10.6413 6.66166 10.6413 8.11408C10.6413 9.56634 9.4638 10.7438 8.01155 10.7438C6.55912 10.7438 5.38184 9.56634 5.38184 8.11408C5.38184 6.66166 6.55912 5.48438 8.01155 5.48438Z" fill="#EE2E64" />
              </svg>
            </a>

            <a
              href='https://www.pinterest.com/pretzelwarranty/'
              target='_blank'
              rel='noreferrer'
              className={styles.icon}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M8 0C3.58161 0 0 3.58066 0 8C0 11.3887 2.1085 14.2839 5.08403 15.4497C5.01406 14.8172 4.95166 13.8461 5.1124 13.154C5.25706 12.53 6.05035 9.17811 6.05035 9.17811C6.05035 9.17811 5.81113 8.69874 5.81113 7.99054C5.81113 6.87767 6.45503 6.04751 7.25872 6.04751C7.94043 6.04751 8.27042 6.55998 8.27042 7.17457C8.27042 7.86101 7.83359 8.88689 7.60761 9.83808C7.41945 10.6351 8.00756 11.2838 8.79234 11.2838C10.2144 11.2838 11.3074 9.78419 11.3074 7.6199C11.3074 5.70429 9.93169 4.36544 7.96596 4.36544C5.69011 4.36544 4.3541 6.07304 4.3541 7.83737C4.3541 8.52476 4.61789 9.26226 4.94882 9.66316C5.01406 9.74258 5.02352 9.81161 5.00461 9.89292C4.9441 10.1454 4.80889 10.689 4.78241 10.7997C4.74743 10.9462 4.66612 10.9774 4.51389 10.9075C3.51542 10.4423 2.89138 8.9805 2.89138 7.80806C2.89138 5.28448 4.72474 2.96608 8.17681 2.96608C10.9519 2.96608 13.1086 4.9441 13.1086 7.58681C13.1086 10.3439 11.3698 12.5631 8.95781 12.5631C8.14656 12.5631 7.38447 12.1414 7.12351 11.644C7.12351 11.644 6.72261 13.171 6.62522 13.5454C6.44463 14.2404 5.95674 15.1112 5.63149 15.6426C6.37939 15.8752 7.17457 16 8 16C12.4184 16 16 12.4184 16 8C16 3.58066 12.4184 0 8 0Z" fill="#EE2E64" />
              </svg>
            </a>
          </div>
        </div>
        <div className={styles.body}>
          <form>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 mb-6 md:mb-10 w-full group">
                <input type="text" name="first_name" id="first_name" className="block py-2.5 px-0 w-full text-base md:text-body text-[#1F1A3D] bg-transparent border-0 border-b-2 border-[#BDBEBF] appearance-none focus:outline-none focus:ring-0 focus:border-[#EA2667] peer" placeholder=" " required="" />
                <label htmlFor="first_name" className="peer-focus:font-medium absolute text-base md:text-body text-[#1F1A3D] duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#EA2667] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
              </div>
              <div className="relative z-0 mb-6 md:mb-10 w-full group">
                <input type="text" name="last_name" id="last_name" className="block py-2.5 px-0 w-full text-base md:text-body text-[#1F1A3D] bg-transparent border-0 border-b-2 border-[#BDBEBF] appearance-none focus:outline-none focus:ring-0 focus:border-[#EA2667] peer" placeholder=" " required="" />
                <label htmlFor="last_name" className="peer-focus:font-medium absolute text-base md:text-body text-[#1F1A3D] duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#EA2667] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 mb-6 md:mb-10 w-full group">
                <input type="text" name="phone_number" id="phone_number" className="block py-2.5 px-0 w-full text-base md:text-body text-[#1F1A3D] bg-transparent border-0 border-b-2 border-[#BDBEBF] appearance-none focus:outline-none focus:ring-0 focus:border-[#EA2667] peer" placeholder=" " required="" />
                <label htmlFor="phone_number" className="peer-focus:font-medium absolute text-base md:text-body text-[#1F1A3D] duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#EA2667] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone Number</label>
              </div>
              <div className="relative z-0 mb-6 md:mb-10 w-full group">
                <input type="email" name="email" id="last_name" className="block py-2.5 px-0 w-full text-base md:text-body text-[#1F1A3D] bg-transparent border-0 border-b-2 border-[#BDBEBF] appearance-none focus:outline-none focus:ring-0 focus:border-[#EA2667] peer" placeholder=" " required="" />
                <label htmlFor="email" className="peer-focus:font-medium absolute text-base md:text-body text-[#1F1A3D] duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#EA2667] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email Address</label>
              </div>
            </div>
            <div>
              <label htmlFor="email" className="text-base md:text-body text-[#1F1A3D]">Message</label>
              <textarea name="email" id="last_name" rows="6" className="mt-2 block py-2.5 px-3 w-full text-base md:text-body text-[#1F1A3D] bg-transparent border-[1px] rounded-[8px] border-[#BDBEBF] appearance-none focus:outline-none focus:ring-0 focus:border-[#EA2667] peer" placeholder="Type Here... " required="" />
            </div>
            <div className='text-center'>
              <button type="submit" className={styles.button}>Drop a line</button>
            </div>
          </form>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerInner}>
          <SeePlans seeplan={seeplans} />
          <div className={styles.cta}>
            <Link href="./">
              <a className='btn'>Get covered</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
