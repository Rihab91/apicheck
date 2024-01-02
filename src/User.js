import React from 'react'
import './User.css'
 const User = ({msg}) => {
  return (

    <div>
        {/* import card  */}
    <div className="container">

<div className="card">
  <div className="face face1">
    <div className="content">
      <span className="stars"></span>
      <h2 className="java"></h2>
      <p className="java" style={{fontSize:'xx-large'}}> User :{msg.username}</p>
    </div>
  </div>
  <div className="face face2">
    <h2>01</h2>
  </div>
</div>

<div className="card">
  <div className="face face1">
    <div className="content">
      <span className="stars"></span>
      <h2 className="python" style={{fontSize:'xx-large'}}>Email :{msg.email}</h2>
      <p className="python"></p>
    </div>
  </div>
  <div className="face face2">
    <h2>02</h2>
  </div>
</div>

<div className="card">
  <div className="face face1">
    <div className="content">
      <span className="stars"></span>
      <h2 className="cSharp" style={{fontSize:'xx-large'}}>Phone :{msg.phone}</h2>
      <p className="cSharp"></p>
    </div>
  </div>
  <div className="face face2">
    <h2>03</h2>
  </div>
</div>
</div>
       
        </div>
    
    
    
  
  )
}
export default User
