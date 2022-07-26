import ROUTES from "../../config/routes"

const NAV_ITEMS = [
  { path: ROUTES.root, title: `home` },
  // { path: ROUTES.about, title: "about" },
  { path: ROUTES.sounds, title: "sounds" },
  { path: ROUTES.shop, title: `shop`, external: true },
  { path: ROUTES.live, title: "live" },
  { path: ROUTES.contact, title: `contact` },
  { path: ROUTES.daywine, title: `daywine`, external: true },
]

export default {
  NAV_ITEMS,
}
