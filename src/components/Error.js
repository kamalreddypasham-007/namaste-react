import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const error=useRouteError();
    return (
    <div>
        <h1>OOps Something Went wrong!</h1>
        <h3>{error.status}</h3>
    </div>
  )
}

export default Error    