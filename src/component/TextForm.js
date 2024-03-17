import React, { useState } from "react";

export default function TextForm(props) {
  const handleClick = () => {
  
    setText(text.toUpperCase());
  };
  const handlelowClick = () => {
   
    setText(text.toLowerCase());
  };
  const handleChange = (event) => {
    
    setText(event.target.value);
  };
  const onClear = () => {
    setText("");
  };

  const [find, setfind] = useState("");
  const [replace, setreplace] = useState("");

  const changefind = (event) => {
    setfind(event.target.value);
  };
  const changereplace = (event) => {
    setreplace(event.target.value);
  };
  const onreplace = (event) => {
    let newtxt = text.replaceAll(find, replace);
    setText(newtxt);
  };
  // const handlecopy=(eve)=>{
  //     let tet=document.getElementById("Box")
  //     tet.select();
  //     navigator.clipboard.readText(tet.value);
  // }

  const [text, setText] = useState("");
  let new1 = text.length - text.split(/\s+/).length + 1;
  let msg = new SpeechSynthesisUtterance(text);
  const toogle = document.getElementById("toggle");
  const speak = () => {
    if (toogle.innerText === "Speak") {
      window.speechSynthesis.speak(msg);
      toogle.innerText = "Stop";
    } else {
      toogle.innerHTML = "Speak";

      if (toogle.innerHTML === "Speak") {
        window.speechSynthesis.cancel();
      }
    }
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  return (
    <>
      <div
        className="container"
        
        style={{color: props.mode === "dark" ? "white" : "black" }}
       
      >
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="Box"
            value={text}
            onChange={handleChange}
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "#6f6d6de8" : "white",color: props.mode === "dark" ? "white" : "black" 
            }}
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClick}>
          convert the text to upper case
        </button>
        <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handlelowClick}>
          convert the text to lower case
        </button>

        <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={onClear}>
          Clear
        </button>
        <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>

        {/* <button className="btn btn-primary mx-3" onClick={handlecopy}>Copy</button> */}

        <button
          type="submit"
          onClick={speak}
          className="btn btn-warning mx-1 my-2 "
          id="toggle"
          disabled={text.length===0}
        >
          Speak
        </button>
        </div>
        <div
          className="mb-3 mt-2 p-3 mx-3 border border-primary"
          style={{ backgroundColor: props.mode === "dark" ? "#9ba1a7" : "white" ,borderRadius:'10px' ,display:'inline-block'}}
        >
          <p >
            find :
            <input
              type="text"
              value={find}
              placeholder="find"
              className="mx-4 my-3"
              onChange={changefind}
            />
          </p>
          <p>
            replace:
            <input
              type="text"
              value={replace}
              className="mx-2 my-3"
              placeholder="replace"
              id="d"
              onChange={changereplace}
            />{" "}
          </p>
          <button
            type="submit"
            onClick={onreplace}
            className="btn btn-success mx-1"
          >
            Replace
          </button>
        </div>

        <div
          className="container my-3"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          <h2>Your text Summary</h2>
          <p>
            {/* /\s+/, it is regular expression which is wriiten in form / / and \s is used for whitespaces +new line and "+" is used for more than one */}
            {text.split(/\s+/).filter((element)=>{
              return element.length!==0;
            }).length} <b>Words</b> And {" "}
            {text.length} <b>Character with whitespace </b> And {new1}{" "}
            <b> Character without whitespace</b>
          </p>
          <p>
            {0.008 * (text === "" ? 0 : text.trim().split(" ").length)} Minutes
            time taken to read
          </p>
          <h3>Preview</h3>
          <p className="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end ">
            {text.length>0?text:"Enter your text above to preview here"}
            
          </p>
        </div>
      
    </>
  );
}
