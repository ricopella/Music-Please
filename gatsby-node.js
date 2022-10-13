exports.createPages = ({ actions }) => {
  const { createRedirect } = actions

  // REDIRECT FOR /SHOP
  createRedirect({
    fromPath: "/shop",
    toPath: "https://musicpleaseshop.myshopify.com/collections/all",
    isPermanent: true,
    force: true,
  })

  createRedirect({
    fromPath: "/daywine",
    toPath: "https://www.eventbrite.com/e/daywine-tickets-440764126367",
    isPermanent: true,
    force: true,
  })
}
