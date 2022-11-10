import React, { ReactNode } from 'react'

type Props = {
  elementOne: ReactNode,
  elementTwo: ReactNode,

}

const CustomGridItemSmall = ({ elementOne, elementTwo }: Props) => {
  console.log("mi elemento es:", elementOne, elementTwo)
  return (
    <>
      <div>{elementOne}</div>
      <div>{elementTwo}</div>
    </>
  )
}

export default CustomGridItemSmall
