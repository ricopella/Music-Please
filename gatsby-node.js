const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
    const { createPage, createRedirect } = actions

    // REDIRECT FOR /SHOP
    createRedirect({
        fromPath: "/shop",
        toPath: "https://musicpleaseshop.myshopify.com/collections/all",
        isPermanent: true,
        force: true
    });

    return graphql(`
    {
      allShopifyProduct {
        edges {
          node {
            handle
          }
        }
      }
    }
  `).then(result => {
        result.data.allShopifyProduct.edges.forEach(({ node }) => {
            createPage({
                path: `/shop/${node.handle}/`,
                component: path.resolve(`./src/templates/ProductPage/index.tsx`),
                context: {
                    // Data passed to context is available
                    // in page queries as GraphQL variables.
                    handle: node.handle,
                },
            })
        })
    })
}