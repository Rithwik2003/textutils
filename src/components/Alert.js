import React from 'react'

function Alert(props) {
  return (
    <div style={{height:"58px"}}>
      {props.message  && <div>
          <div class="alert alert-success alert-dismissible fade show" style={{height:"50px"}} role="alert">
              <strong>Success!</strong> {props.message}
          </div>
          
      </div>}
    </div>
  )
}

export default Alert;
