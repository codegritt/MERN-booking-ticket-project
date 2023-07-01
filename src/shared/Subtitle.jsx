import React from 'react'
import section_subtitle from './Subtitle.module.css'

const Subtitle = ({subtitle}) => {
  return (
    <h3 className={section_subtitle.section_subtitle}>
        {subtitle}
    </h3>
  )
}

export default Subtitle