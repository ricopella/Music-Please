import React, { FC } from 'react'
import Styled from './Header.styles'
import { BUTTON_ANIMATION } from '../../styles/constants'

/**
 * Component used for Header and Navigation
 *
 * Since the animation requires
 *
 * @param {*} { isOpen, item }
 */
const MenuItem: FC<{ item: string }> = ({ item }) => (
  <Styled.MenuItemLi variants={Styled.MENU_ITEM_VARIANTS} {...BUTTON_ANIMATION}>
    <Styled.HomepageLink
      to={item === "home" ? "/" : item}
    >{`+ ${item.toUpperCase()}`}</Styled.HomepageLink>
  </Styled.MenuItemLi>
)

export default MenuItem
