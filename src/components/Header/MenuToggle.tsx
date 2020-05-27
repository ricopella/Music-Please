import React, { FC } from 'react'
import Styled from './Header.styles'
import { BUTTON_ANIMATION } from '../../styles/constants'
import { Cycle } from 'framer-motion'

const MENU_WIDTH = 23
const MENU_HEIGHT = 23

const Path = props => <Styled.Path {...props} />

const MenuToggle: FC<{ toggle: Cycle }> = ({ toggle }) => (
  <Styled.MenuToggleButton
    onClick={toggle}
    {...BUTTON_ANIMATION}
    className="hamburger_menu"
    aria-label="navigation button"
  >
    <svg
      width={MENU_WIDTH}
      height={MENU_WIDTH}
      viewBox={`0 0 ${MENU_WIDTH} ${MENU_HEIGHT}`}
    >
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </Styled.MenuToggleButton>
)

export default MenuToggle
