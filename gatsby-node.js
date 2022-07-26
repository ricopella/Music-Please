const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  // REDIRECT FOR /SHOP
  createRedirect({
    fromPath: "/shop",
    toPath: "https://musicpleaseshop.myshopify.com/collections/all",
    isPermanent: true,
    force: true,
  })

  createRedirect({
    fromPath: "/daywine",
    toPath: "https://www.eventbrite.com/e/daywine-tickets-390793743607",
    isPermanent: true,
    force: true,
  })
}
