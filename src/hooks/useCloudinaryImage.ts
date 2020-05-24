import { graphql, useStaticQuery } from "gatsby"

const useCloudinaryImage = () => {
  const data = useStaticQuery(graphql`
    query CloudinaryImages {
      allCloudinaryMedia {
        edges {
          node {
            secure_url
          }
        }
      }
    }
  `)
  const url = data.allCloudinaryMedia.edges[0].node.secure_url || ""

  return url
}

export default useCloudinaryImage
