import React from "react"
import Helmet from "react-helmet"
import useSiteMetaData from "../hooks/useSiteMetaData"
import { useLocation } from "@reach/router"
import useImage from "../hooks/useImage"

function SEO({ description, image, title }) {
  const { pathname } = useLocation()
  const {
    title: defaultTitle,
    description: defaultDescription,
    lang,
    keywords,
    twitterUserName,
    siteUrl,
  } = useSiteMetaData()

  const logoImage = useImage("PLEASE.png")

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}/${pathname}`,
    image: image || logoImage.src,
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={seo.title}
      titleTemplate={`${title} | ${defaultTitle}`}
      meta={[
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0",
        },
        {
          name: `description`,
          content: seo.description,
        },
        {
          property: `og:title`,
          content: seo.title,
        },
        {
          property: `og:description`,
          content: seo.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: seo.url,
        },
        {
          property: "og:locale",
          content: "en_US",
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: twitterUserName,
        },
        {
          name: `twitter:title`,
          content: seo.title,
        },
        {
          name: `twitter:description`,
          content: seo.description,
        },
        {
          name: "image",
          content: seo.image,
        },
        {
          name: "og:image",
          content: seo.image,
        },
        {
          name: "twitter:image",
          content: seo.image,
        },
      ].concat(
        keywords.length > 0
          ? {
              name: `keywords`,
              content: (keywords || []).join(`, `),
            }
          : []
      )}
    >
      <link rel="canonical" href={seo.url} />
    </Helmet>
  )
}

export default SEO
