import React, {useState} from 'react'

export default function Darkmode() {

  const [dlStyle, setDlStyle] = useState({
    color: 'black',
    background:'white',
  })

  // Make Button to dark to light or light to dark

  const [btntext, setBtnText] = useState("Dark Mode")

  // if else in button

  let onDmode = ()=>{
    if(dlStyle.color === 'white'){
      setDlStyle({
        color: 'black',
        background:'white',
      })
      setBtnText("Dark Mode")
    }
    else{
      setDlStyle({
        color: 'white',
        background:'black',
      })
      setBtnText("Light Mode")
    }
  }

  return (

    <div className=' p-5 container mt-5' style={dlStyle}>
      <h1 className=' text-center mt-2'>Dark Mode In React js</h1>

      {/* form here */}

      <form>
  <div class="container mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control " style={dlStyle} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" style={dlStyle} className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="container mb-3">
    <label for="exampleInputPassword1"  className="form-label">Password</label>
    <input type="password" style={dlStyle} className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="container">
  <button type="button" className="btn btn-primary ml-2 p-2 d-inline">Submit</button>
  <button type='button' className="btn btn-primary m-2 p-2 d-inline" onClick={onDmode}>{btntext}</button>
  </div>
</form>
</div>
    
  )
}
