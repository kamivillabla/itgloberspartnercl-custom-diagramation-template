import React, { ReactNode } from 'react'
import { useCssHandles } from 'vtex.css-handles'

import './styles.css'


type Props = {
  element: ReactNode
}

const CustomGridItemBig = ({ element }: Props) => {

  const CSS_HANDLES = [
    "custom-grid__item-big",
  ]
  const handles = useCssHandles(CSS_HANDLES)

  console.log("mi elemento es:", element)
  return (
    <div className={handles['custom-grid__item-big']}>{element}</div>
  )
}

export default CustomGridItemBig
