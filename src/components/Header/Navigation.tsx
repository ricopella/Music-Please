import MenuItem from './MenuItem'
import React, { FC } from 'react'
import Styled from './Header.styles'

export const PureNavigation: FC<{ headerItems: string[] }> = ({
  headerItems = [],
}) => (
  <Styled.MenuItemUl variants={Styled.NAV_VARIANTS}>
    {headerItems.map(item => (
      <MenuItem key={`menu_item_${item}`} item={item} />
    ))}
  </Styled.MenuItemUl>
)

const Navigation: FC<{}> = () => {
  return <PureNavigation headerItems={[`home`, `shop`, `live`, `contact`]} />
}

export default Navigation
