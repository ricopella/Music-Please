import { graphql, useStaticQuery } from 'gatsby';

const useCloudinaryImage = (id: string) => {
  const data = useStaticQuery(graphql`
    query CloudinaryImages {
      allCloudinaryMedia {
        edges {
          node {
            id
            public_id
            secure_url
          }
        }
      }
    }
  `)
  const edge = data.allCloudinaryMedia.edges.find(n => {
    return n.node.public_id === id
  })

  if (!edge) return null

  return edge.node.secure_url
}

export default useCloudinaryImage
