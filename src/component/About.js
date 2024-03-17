import React from 'react'
export default function About(props){
const  mystyle={
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor:props.mode === "dark" ? "rgb(24 111 146 / 90%)" : "white"
  }


    return(
    <>
    <h2 className='mb-2' style={{color: props.mode === "dark" ? "white" : "black",}}>About us</h2>
<div className="accordion" id="accordionExample" style={mystyle}>
  <div className="accordion-item"  >
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"  style={mystyle}>
        <strong>TextUtilis</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body"  style={mystyle}>
        It can be use for text manipulation . It have many fuctionalities for text 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"  style={mystyle}>
       <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body"  style={mystyle}>
       TextUtilis is free character counter tool that provides instant character count & word statistics for given text . TextUtilis reports the number of words and characters.
       Thus it is suitable for writing text with word/charcter limit
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"  style={mystyle}>
      <strong>Browser Compatible</strong> 
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body"  style={mystyle}>
       This word counter software works in any web browser such as Chrome , Firefox ,Internet Explorer , Safari.
      </div>
    </div>
  </div>
</div>
</>
    );
    
}