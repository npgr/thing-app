import React from 'react'

export default ({ match: { params } }) => {
  return <h2>Detail of Thing {params.id}</h2>
}
