import React from 'react'

  const Pop_up = (props) => {
  return (
    <div className="alert alert-primary" role="alert">
  {props.message}
</div>
  )
}

export default Pop_up;