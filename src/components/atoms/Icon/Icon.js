import React from 'react'
import Image from 'next/image'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { icons } from './Icons'
import styles from './Icon.module.scss'

/**
 * Render the Icon component.
 *
 * @param  {object}  props            The component attributes as props.
 * @param  {string}  props.icon       Icon svg.
 * @param  {number}  props.width       Icon size.
 * @param  {number}  props.height       Icon size.
 * @param  {string}  props.alt        Icon title.
 * @param  {string}  props.className  Icon title.
 * @return {Element}                  The Icon component.
 */
export default function Icon({ icon, width, height, alt, className }) {
  return (
    <div className={cn(className, styles.wrap)}>
      {icons[icon] && (
        <Image src={icons[icon]} width={width} height={height} alt={alt} />
      )}
    </div>
  )
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  alt: PropTypes.string,
  className: PropTypes.string,
}

Icon.defaultProps = {
  width: 11,
  height: 20
}
