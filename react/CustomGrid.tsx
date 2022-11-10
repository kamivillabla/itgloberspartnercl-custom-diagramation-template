import React, { ReactNode } from 'react';
import customGridSchema from './schemas/custom-grid-schema';
import CustomGridItemBig from './components/CustomGridItemBig'
import CustomGridItemSmall from './components/CustomGridItemSmall'


type Props = {
  gridType: number
  children: [ReactNode, ReactNode, ReactNode, ReactNode, ReactNode]
}

const CustomGrid = ({ gridType = 1, children }: Props) => {
  console.log("mostrar children", children);
  return (
    <>
      <div> Aquí ira mi grilla customizada {gridType}</div>
      <CustomGridItemBig
        element={children[0]}
      />
      <CustomGridItemSmall
        elementOne={children[1]}
        elementTwo={children[2]}
      />
      <CustomGridItemSmall
        elementOne={children[3]}
        elementTwo={children[4]}
      />

    </>
  )
}

CustomGrid.schema = customGridSchema

export default CustomGrid
