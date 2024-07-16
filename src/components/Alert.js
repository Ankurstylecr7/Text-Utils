import React from 'react'

function Alert(props) {
    const capitalize=(word)=>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1)
    }

  let alertstyle = {}; // Declare alertstyle within the function scope

  if (props.mode === 'red') {
    alertstyle = {
      backgroundColor: 'red',
      color: 'white',
    };
  } else if (props.mode === 'blue') {
    alertstyle = {
      backgroundColor: 'blue',
      color: 'white',
    };
  }else if(props.mode === 'dark'){
    alertstyle = {
      backgroundColor: 'black',
      color: 'white',
    }
  }

    


  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} style={alertstyle} role="alert">
     <strong >{capitalize(props.alert.type)}</strong>: {props.alert.msg}
   </div>
  )
}

export default Alert

