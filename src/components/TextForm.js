import React, {useState} from 'react'



export default function TextForm(props) {
const [text, settext]= useState("");
const handleUpClick=()=>{
    console.log("UpperCase was Clicked "+text)
    settext(text.toUpperCase());
    props.showalert("Converted to UpperCase","success")
}
const handleLoClick=()=>{
    console.log("LowerCase was Clicked "+text)
    settext(text.toLowerCase());
    props.showalert("Converted to LowerCase","success")
}

const handleOnChange=(event)=>{
    console.log("On Change");
    settext(event.target.value)
    props.showalert("Value is Changed","success")
}

const [fname,setfname]=useState(' ')
const [lname,setlname]=useState(' ')


let fnames=(event)=>{
    setfname(event.target.value)
    
}
let lnames=(event)=>{
    setlname(event.target.value)
}

let Handlecopy=()=>{
    let a=document.getElementById("mybox");
    a.select();
    navigator.clipboard.writeText(a.value);
    props.showalert("Copied to Clipboard","success")
}

let Handlespaces=()=>{
    settext(text.split(" ").join(""))
    props.showalert("Removed Spaces","success")
}


let HandleCapitalize=()=>{
    const word=text.split(" ");
    let b=word.map(text=>text.charAt(0).toUpperCase() + text.slice(1));
    settext(b.join(" "));
    props.showalert("Converted to Capitalize","success")
}

// text="hiheello" ; //wrong way to change the state
// settext("Hi hello");  //Correct way to change the state
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'? 'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="mybox" value={text} onChange={handleOnChange} rows="5"  style={{backgroundColor: props.mode==='red'?'red':'white' , color:props.mode==='red'? 'white':'black'}} ></textarea>
        </div>
        <input type="text" onChange={fnames} name={fname} value={fname}  id="fname" class="mx-3" style={{backgroundColor: props.mode==='red'?'red':'white'}}/>
        <input type="text" onChange={lnames} name={lname} value={lname} id="lname" class="mx-3" style={{backgroundColor: props.mode==='red'?'red':'white'}}/>
        <button className="btn btn-primary mx-2" onClick={handleUpClick} style={{backgroundColor: props.mode==='red'?'red':'white' , color:props.mode==='red'? 'white':'black'}}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick} style={{backgroundColor: props.mode==='red'?'red':'white' , color:props.mode==='red'? 'white':'black'}}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={()=>settext("")} style={{backgroundColor: props.mode==='red'?'red':'white' , color:props.mode==='red'? 'white':'black'}}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={()=>settext(text.split("").reverse().join(""))} style={{backgroundColor: props.mode==='red'?'red':'white' , color:props.mode==='red'? 'white':'black'}}>Reverse</button>
        <button className="btn btn-primary mx-2" onClick={Handlecopy} style={{backgroundColor: props.mode==='red'?'red':'white' , color:props.mode==='red'? 'white':'black'}}>Copy</button>
        <button className="btn btn-primary mx-2" onClick={Handlespaces} style={{backgroundColor: props.mode==='red'?'red':'white' , color:props.mode==='red'? 'white':'black'}}>Remove Spaces</button>
        <button className="btn btn-primary mx-2" onClick={HandleCapitalize} style={{backgroundColor: props.mode==='red'?'red':'white' , color:props.mode==='red'? 'white':'black'}}>Capitalize</button>


    </div>
    <div className="container my-3" style={{color:props.mode==='red'? 'white':'black'}}>

        <h1>Your Text Summary</h1>
        <p>{  text.trim().split(/\b\s+\b/).length} words and {text.replace(/\s/g, "").length} characters</p> 
        {/* text.trim() to remove any leading or trailing whitespace characters from the input text. This ensures that the word and character counts are accurate regardless of extra spaces at the beginning or end.
        \b: Matches a word boundary (not just whitespace).
        \s+: Matches one or more whitespace characters.
        /\s/: Matches any whitespace character.
        g: Flag indicating global search and replace (replaces all occurrences). */}
        <p>{0.08*text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>

        <h2>Full Name</h2>
        <span>{fname}</span>
        <span> {lname}</span>
    </div>
    </>
  )
}
