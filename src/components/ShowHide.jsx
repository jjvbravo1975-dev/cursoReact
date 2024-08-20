import { useState } from "react";
import React  from 'react'

function ShowHide() {
    const [show,setShow] = useState(true);
     const handleClick = (event) => {
        setShow(!show);
     }

  return (
    <div>
         <button onClick = {handleClick} >hide tex</button> 
        { show && <h2> Hide me 2 !</h2>};
    </div>
  )
}

export default ShowHide