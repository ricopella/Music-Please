import ROUTES from "../../config/routes"

const HOME_ITEMS = [
  { path: ROUTES.root, title: `home` },
  // { path: ROUTES.about, title: "about" },
  { path: ROUTES.contact, title: `contact` },
]

const SHOP_ITEMS = [{ path: ROUTES.shop, title: `shop` }]

const ART_ITEMS = [
  { path: ROUTES.live, title: "live" },
  { path: ROUTES.sounds, title: "sounds" },
]

export default {
  HOME_ITEMS,
  ART_ITEMS,
  SHOP_ITEMS,
}
