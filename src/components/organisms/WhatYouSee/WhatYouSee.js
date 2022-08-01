import Image from '@components/atoms/Image'
import TextHeading from '@components/molecules/TextHeading'
import Link from 'next/link'
import styles from './WhatYouSee.module.scss'

export default function WhatYouSee() {
  const text = {
    heading: "What you see is what you get.",
    subheading: "Take a peek at our plans, then dig into the details."
  }

  return (
    <div className={styles.root}>
      <div className={styles.wrap}>
        <div className={styles.head}>
          <TextHeading heading={text.heading} subheading={text.subheading} />
        </div>
        <div className={styles.body}>
          <div className={styles.desktop}>
            <div className={styles.first}>
              <div>
                <Image src='plan_basic' alt='plan basics' />
                <p className={styles.title}>Plan Basics</p>
                <div className={styles.bold}>
                  <p>Your Vehicle</p>
                  <p>(based on standard Salted plan)</p>
                </div>
                <p>Breakdown coverage for:</p>
                <li>Engine</li>
                <li>Transmission</li>
                <li>Cooling System</li>
                <li>Air Conditioning</li>
                <li>Drive Axle Assembly</li>
                <li>Electrical Components</li>
                <li>Brakes</li>
                <li>Suspension</li>
                <li>Steering</li>
                <li>And more</li>
              </div>
              <div>
                <Image src='perk' alt='perks' />
                <p className={styles.title}>Perks</p>
                <div className={styles.bold}>
                  <p>Your Vehicle</p>
                  <p>(based on standard Salted plan)</p>
                </div>
                <p>Maintenance benefits for:</p>
                <li>Oil & filter changes</li>
                <li>Brake pads/shoes</li>
                <li>Battery</li>
                <li>Cooling system </li>
                <li>Annual diagnostics</li>
                <li>Tire rotation</li>
                <li>Wiper blades</li>
                <p>Roadside assistance for breakdowns:</p>
                <li>Towing</li>
                <li>Tire change</li>
                <li>Lockout service</li>
                <li>Rental car reimbursements</li>
              </div>
              <div>
                <Image src='add_on' alt='add ons' />
                <p className={styles.title}>Add-ons</p>
                <div className={styles.bold}>
                  <p>Your Vehicle</p>
                  <p>(based on standard Salted plan)</p>
                </div>
                <li>Tire & wheel protection</li>
                <li>Paintless dent removal</li>
                <li>Windshield replacement</li>
                <li>Appearance</li>
                <li>Key replacement</li>
              </div>
            </div>
            <div className={styles.second}>
              <div>
                <div className={styles.bold}>
                  <p>Your home</p>
                  <p>(based on standard Salted plan)</p>
                </div>
                <p>Breakdown coverage for:</p>
                <li>Central Air Conditioning</li>
                <li>Central Home Heating</li>
                <li>Interior Electrical</li>
                <li>Water heater</li>
                <li>Range/oven/cooktop</li>
                <li>Kitchen exhaust</li>
                <li>Refrigerator</li>
                <li>Dishwasher</li>
                <li>And more</li>
              </div>
              <div>
                <div className={styles.bold}>
                  <p>Your home</p>
                  <p>(based on standard Salted plan)</p>
                </div>
                <li>Qualified contractors</li>
                <li>Emergency service for the breakdown of covered items</li>
              </div>
              <div>
                <div className={styles.bold}>
                  <p>Your home</p>
                  <p>(based on standard Salted plan)</p>
                </div>
                <li>Clothes washing machine and dryer</li>
                <li>Pool and spa</li>
                <li>Plumbing</li>
                <li>Food spoilage</li>
                <li>And more</li>
              </div>
            </div>
            <div className={styles.third}>
              <div>
                <div className={styles.bold}>
                  <p>Your Electronics</p>
                </div>
                <p>Coverage for your choice of devices, including:</p>
                <li>Computers </li>
                <li>Tablets</li>
                <li>Speakers</li>
                <li>Routers</li>
                <li>Televisions</li>
                <li>Gaming systems</li>
                <li>Audio & VR headsets</li>
                <li>Smart home devices</li>
                <li>And more</li>
              </div>
              <div>
                <div className={styles.bold}>
                  <p>Your Electronics</p>
                </div>
                <li>Over 700 authorized repair centers</li>
                <li>Fast replacements</li>
                <li>Coverage for breaks, failures, and accidents</li>
                <li>Security app to protect your data</li>
                <li>Storage to protect your important files and photos</li>
                <li>24/7 tech support</li>
              </div>
              <div>
                <div className={styles.bold}>
                  <p>Your Electronics</p>
                </div>
                <li>Not necessary – cover an unlimited number of devices for one flat price</li>
              </div>
            </div>
            <div className={styles.fourth}>
              <div>
                <div className={styles.bold}>
                  <p>Your Phone</p>
                </div>
                <p>Coverage for:</p>
                <li>Cracked screen repairs</li>
                <li>Defects and failures</li>
                <li>Lost phone</li>
                <li>Stolen phone</li>
                <li>Battery replacement</li>
                <li>Water damage</li>
              </div>
              <div>
                <div className={styles.bold}>
                  <p>Your Phone</p>
                </div>
                <li>Over 700 authorized repair centers</li>
                <li>Get a replacement phone sent to you in as little as one day</li>
                <li>Coverage includes certain phone accessories</li>
              </div>
              <div>
                <div className={styles.bold}>
                  <p>Your Phone</p>
                </div>
                <li>Not necessary – price depends on phone make and model</li>
              </div>
            </div>
            <div className={styles.bottons}>
              <div>
                <p>Starting at $XX</p>
                <Link href="./">
                  <a className='cta'>Learn More</a>
                </Link>
              </div>
              <div>
                <p>Starting at $XX</p>
                <Link href="./">
                  <a className='cta'>Learn More</a>
                </Link>
              </div>
              <div>
                <p>Starting at $XX</p>
                <Link href="./">
                  <a className='cta'>Learn More</a>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.mobile}>
            <div className={styles.first}>
              <div>
                <div>
                  <Image src='plan_basic' alt='plan basics' />
                  <p className={styles.title}>Plan Basics</p>
                  <div className={styles.bold}>
                    <p>Your Vehicle</p>
                    <p>(based on standard Salted plan)</p>
                  </div>
                  <p>Breakdown coverage for:</p>
                  <li>Engine</li>
                  <li>Transmission</li>
                  <li>Cooling System</li>
                  <li>Air Conditioning</li>
                  <li>Drive Axle Assembly</li>
                  <li>Electrical Components</li>
                  <li>Brakes</li>
                  <li>Suspension</li>
                  <li>Steering</li>
                  <li>And more</li>
                </div>
                <div>
                  <div className={styles.bold}>
                    <p>Your home</p>
                    <p>(based on standard Salted plan)</p>
                  </div>
                  <p>Breakdown coverage for:</p>
                  <li>Central Air Conditioning</li>
                  <li>Central Home Heating</li>
                  <li>Interior Electrical</li>
                  <li>Water heater</li>
                  <li>Range/oven/cooktop</li>
                  <li>Kitchen exhaust</li>
                  <li>Refrigerator</li>
                  <li>Dishwasher</li>
                  <li>And more</li>
                </div>
                <div>
                  <div className={styles.bold}>
                    <p>Your Electronics</p>
                  </div>
                  <p>Coverage for your choice of devices, including:</p>
                  <li>Computers </li>
                  <li>Tablets</li>
                  <li>Speakers</li>
                  <li>Routers</li>
                  <li>Televisions</li>
                  <li>Gaming systems</li>
                  <li>Audio & VR headsets</li>
                  <li>Smart home devices</li>
                  <li>And more</li>
                </div>
                <div>
                  <div className={styles.bold}>
                    <p>Your Phone</p>
                  </div>
                  <p>Coverage for:</p>
                  <li>Cracked screen repairs</li>
                  <li>Defects and failures</li>
                  <li>Lost phone</li>
                  <li>Stolen phone</li>
                  <li>Battery replacement</li>
                  <li>Water damage</li>
                </div>
                <div className={styles.mbutton}>
                  <p>Starting at $XX</p>
                  <Link href="./">
                    <a className='cta'>Learn More</a>
                  </Link>
                </div>
              </div>
              <div>
                <div>
                  <Image src='perk' alt='perks' />
                  <p className={styles.title}>Perks</p>
                  <div className={styles.bold}>
                    <p>Your Vehicle</p>
                    <p>(based on standard Salted plan)</p>
                  </div>
                  <p>Maintenance benefits for:</p>
                  <li>Oil & filter changes</li>
                  <li>Brake pads/shoes</li>
                  <li>Battery</li>
                  <li>Cooling system </li>
                  <li>Annual diagnostics</li>
                  <li>Tire rotation</li>
                  <li>Wiper blades</li>
                  <p>Roadside assistance for breakdowns:</p>
                  <li>Towing</li>
                  <li>Tire change</li>
                  <li>Lockout service</li>
                  <li>Rental car reimbursements</li>
                </div>
                <div>
                  <div className={styles.bold}>
                    <p>Your home</p>
                    <p>(based on standard Salted plan)</p>
                  </div>
                  <li>Qualified contractors</li>
                  <li>Emergency service for the breakdown of covered items</li>
                </div>
                <div>
                  <div className={styles.bold}>
                    <p>Your Electronics</p>
                  </div>
                  <li>Over 700 authorized repair centers</li>
                  <li>Fast replacements</li>
                  <li>Coverage for breaks, failures, and accidents</li>
                  <li>Security app to protect your data</li>
                  <li>Storage to protect your important files and photos</li>
                  <li>24/7 tech support</li>
                </div>
                <div>
                  <div className={styles.bold}>
                    <p>Your Phone</p>
                  </div>
                  <li>Over 700 authorized repair centers</li>
                  <li>Get a replacement phone sent to you in as little as one day</li>
                  <li>Coverage includes certain phone accessories</li>
                </div>
                <div className={styles.mbutton}>
                  <p>Starting at $XX</p>
                  <Link href="./">
                    <a className='cta'>Learn More</a>
                  </Link>
                </div>
              </div>
              <div>
                <div>
                  <Image src='add_on' alt='add ons' />
                  <p className={styles.title}>Add-ons</p>
                  <div className={styles.bold}>
                    <p>Your Vehicle</p>
                    <p>(based on standard Salted plan)</p>
                  </div>
                  <li>Tire & wheel protection</li>
                  <li>Paintless dent removal</li>
                  <li>Windshield replacement</li>
                  <li>Appearance</li>
                  <li>Key replacement</li>
                </div>
                <div>
                  <div className={styles.bold}>
                    <p>Your home</p>
                    <p>(based on standard Salted plan)</p>
                  </div>
                  <li>Clothes washing machine and dryer</li>
                  <li>Pool and spa</li>
                  <li>Plumbing</li>
                  <li>Food spoilage</li>
                  <li>And more</li>
                </div>
                <div>
                  <div className={styles.bold}>
                    <p>Your Electronics</p>
                  </div>
                  <li>Not necessary – cover an unlimited number of devices for one flat price</li>
                </div>
                <div>
                  <div className={styles.bold}>
                    <p>Your Phone</p>
                  </div>
                  <li>Not necessary – price depends on phone make and model</li>
                </div>
                <div className={styles.mbutton}>
                  <p>Starting at $XX</p>
                  <Link href="./">
                    <a className='cta'>Learn More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}