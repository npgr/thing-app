import gql from 'graphql-tag'

export default gql`
  query Thing($id: Int) {
    thing(id: $id) {
      id
      name
      creator {
        id
        name
      }
      license
      description
      added
      modified
      default_image {
        url
      }
    }
  }
`
