import React from 'react'

function Alert(props) {
  return (
    props.message && <div>
        <div class="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Success!</strong> {props.message}
        </div>
        
    </div>
  )
}

export default Alert
