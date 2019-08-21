import gql from 'graphql-tag'

const FIELDS = 'id, name, thumbnail, creator { name }'

export default gql`
  query explore {
    validToken,
    featured { ${FIELDS} },
    newest { ${FIELDS} },
    popular { ${FIELDS} }
  }
`
