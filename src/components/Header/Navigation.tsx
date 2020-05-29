import MenuItem from './MenuItem'
import React, { FC } from 'react'
import ROUTES from '../../config/routes'
import Socials from '../../components/Socials'
import Styled from './Header.styles'
import { IHeaderMenuItem } from '../../types'
import { useLocation } from '@reach/router'

export const PureNavigation: FC<{ headerItems: IHeaderMenuItem[] }> = ({
  headerItems = [],
}) => {
  const { pathname } = useLocation()
  return (
    <>
      <Styled.MenuItemUl variants={Styled.NAV_VARIANTS}>
        {headerItems.map(item => (
          <MenuItem
            key={`menu_item_${item.title}`}
            item={item}
            className={`${
              pathname === item.path + "/" ||
              pathname === item.path ||
              (pathname === ROUTES.root && item.path === "/")
                ? "active"
                : ""
            }`}
            title={
              pathname === item.path + "/" ||
              pathname === item.path ||
              (pathname === ROUTES.root && item.path === "/")
                ? `You're Here Now`
                : item.path
            }
          />
        ))}
      </Styled.MenuItemUl>
      <Styled.SocialNavWrapper variants={Styled.TOGGLE_WRAPPER_VARIANTS}>
        <Socials />
      </Styled.SocialNavWrapper>
    </>
  )
}

const Navigation: FC<{}> = () => {
  return (
    <PureNavigation
      headerItems={[
        { path: ROUTES.root, title: `home` },
        { path: ROUTES.shop, title: `shop` },
        { path: ROUTES.live, title: "live" },
        { path: ROUTES.contact, title: `contact` },
      ]}
    />
  )
}

export default Navigation
