import React from 'react'
import user from "../../assets/no-profile.jpg"
import { useSelector } from 'react-redux'

const UserDetails = () => {

    const {fName, lName, email}  = useSelector((state) => state.user.user)

    
  return (
    
<div className="container mt-5 px-4 shadow p-3 mb-5 bg-body-tertiary rounded">
  <div className="row gx-5">

    <div className="col-4 mt-3">
     <div className="p-3 mt-5"><img src={user}/></div>
    </div>


    <div className="col-6 mt-5">

        <div className="row gx-5 mt-5">

            

             <div className="col">
                <input className="p-3 border border-info" placeholder={fName} disabled/>
             </div>

             <div className="col">
             <input className="p-3 border border-info" placeholder={lName} disabled/>
             </div>
    </div>

    <div className="row gx-5 mt-4">

    <div className="col">
    <input className="p-3 border border-info" placeholder={email} disabled/>
                
             </div>
             <div className="col">
                <div className="p-3"></div>
             </div>

             
    </div>

    <div className="row gx-5 mt-4">

        <div className="col-6">
                <div className="p-3 border border-info">Total balance <span>$ 123</span></div>
             </div>
    </div>
    </div>
  </div>
</div>
      
    
  )
}

export default UserDetails
