const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  // REDIRECT FOR /SHOP
  createRedirect(
    {
      fromPath: "/shop",
      toPath: "https://musicpleaseshop.myshopify.com/collections/all",
      isPermanent: true,
      force: true,
    },
    {
      toPath:
        "https://www.eventbrite.com/e/daywine-tropical-dance-party-tickets-345566487667",
      fromPath: "/daywine",
      isPermanent: true,
      force: true,
    }
  )
}
