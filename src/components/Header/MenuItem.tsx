import React, { FC } from 'react'
import Styled from './Header.styles'
import { BUTTON_ANIMATION } from '../../styles/constants'
import { IHeaderMenuItem } from '../../types'

interface IMenuItem {
  item: IHeaderMenuItem
  className?: string
  title: string
}

/**
 * Component used for Header and Navigation
 *
 */
const MenuItem: FC<IMenuItem> = ({ className = "", item, title }) => (
  <Styled.MenuItemLi variants={Styled.MENU_ITEM_VARIANTS} {...BUTTON_ANIMATION}>
    <Styled.HomepageLink
      to={item?.path}
      className={className}
      title={title}
    >{`+ ${item.title.toUpperCase()}`}</Styled.HomepageLink>
  </Styled.MenuItemLi>
)

export default MenuItem
