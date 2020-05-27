import styled from '../../styled'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'

const Nav = styled(motion.nav)<{ isOpen: boolean }>`
  bottom: 0;
  left: 0;
  position: fixed;
  top: 0;
  z-index: 1000;
  width: ${props => (props.isOpen ? `18.75rem` : 0)};
`

const NavBackground = styled(motion.div)`
  background: ${props => props.theme.colors.secondary};
  bottom: 0;
  display: grid;
  left: 0;
  position: absolute;
  top: 0;
  width: 18.75rem;
`

const MenuItemUl = styled(motion.ul)`
  margin: 0 0;
  padding: 0 0;
  padding: 1.5625rem;
  position: absolute;
  top: 6.25rem;
  width: 14.375rem;
  display: grid;
  grid-row-gap: 1rem;
`

const MenuItemLi = styled(motion.li)`
  align-items: center;
  cursor: pointer;
  display: flex;
  list-style: none;
  margin-bottom: 1.25rem;
  margin: 0;
  padding: 0;

  &:hover {
    cursor: none;
  }

  &.active {
    pointer-events: all;

    &:hover {
      cursor: pointer;
    }
  }
`

const HomepageLink = styled(Link)`
  color: ${props => props.theme.colors.action};
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  align-self: center;
  justify-self: center;
  text-transform: capitalize;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`

const MenuToggleButton = styled(motion.button)`
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  background: transparent;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  height: 3.125rem;
  left: 0.9375rem;
  outline: none;
  position: absolute;
  top: 1.125rem;
  width: 3.125rem;
  z-index: 1000;
`

const Path = styled(motion.path)`
  stroke-line-cap: round;
  stroke-width: 0.1875rem;
  stroke: ${props => props.theme.colors.action};
`

const NAV_VARIANTS = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

const SIDEBAR_VARIANTS = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 2.5rem 2.5rem)`,
    opacity: 0.99,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(1.875rem at 2.5rem 2.5rem)",
    opacity: 0.7,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
}

const TOGGLE_WRAPPER_VARIANTS = {
  open: {
    opacity: 1,
    display: "grid",
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    opacity: 0,
    transitionEnd: {
      display: "none",
    },
    transition: {
      y: { stiffness: 1000 },
    },
  },
}
const MENU_ITEM_VARIANTS = {
  open: {
    y: 0,
    opacity: 1,
    display: "initial",
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    display: "none",
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

export default {
  Nav,
  NavBackground,
  SIDEBAR_VARIANTS,
  TOGGLE_WRAPPER_VARIANTS,
  NAV_VARIANTS,
  MenuItemUl,
  MenuItemLi,
  HomepageLink,
  MENU_ITEM_VARIANTS,
  MenuToggleButton,
  Path,
}
