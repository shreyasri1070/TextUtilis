import React from 'react'

function Alert(props) {
    const capital=(word)=>{
        word=word.toLowerCase();
        return word.charAt(0).toUpperCase()+word.slice(1);

    }
  return (
    <div style={{height:'50px'}}>
    {props.alert&&<div className={`alert alert-${props.alert.ty} alert-dismissible fade show`} role="alert">
         {/* props.alert is null so we didn't get the value but after  changing alert value updated */}
    <strong> {capital(props.alert.ty)}:</strong> {props.alert.msg}
    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>}
</div>
  )
}

export default Alert;


