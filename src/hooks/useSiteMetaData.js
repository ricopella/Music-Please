import { graphql, useStaticQuery } from "gatsby"

const useSiteMetaData = () => {
  const { data } = useStaticQuery(graphql`
    query {
      data: site {
        siteMetadata {
          author
          description
          image
          keywords
          lang
          siteUrl
          title
          twitterUserName
        }
      }
    }
  `)

  return data?.siteMetadata || null
}

export default useSiteMetaData
