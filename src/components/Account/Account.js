import React, { useState,useEffect } from "react";
import "./account.css"

import { Alert } from '@mui/material'

function Account() {
 const [accountData, setAccountData] = useState({
  name:"",
  password: "",
  email: "",
  phone: "",
  profilePic : ""
 })
 
 const [accountDataName, setAccountName] = useState(null)
 const [accountDataEmail, setAccountEmail] = useState("")
 const [accountDataPassword, setAccountPassword] = useState("")
 const [accountDataPhone, setAccountPhone] = useState("")
 const [isUpdate, setUpdate] = useState(false)

  // useEffect(() => {
  //   setAccountData(JSON.parse(localStorage.getItem("accountsPage")));
  // }, []);
  console.log(accountData)

  let localData = JSON.parse(localStorage.getItem("accountsPage"));
 

  const onChangeHandler=(e)=>{
    let selectedData = localData[`${e.target.value}`];
    console.log(selectedData.name)
  
  setAccountData({
    name:selectedData.name,
     email: selectedData.email,
     password:selectedData.password,
     phone: selectedData.phone,
    //  ? selectedData.phone : 8985647852,
     profilePic:selectedData.profilePic
  }) 
 
  }

 const onUpdateHandler=(e) => { 
  e.preventDefault()
  setUpdate(true)
  setTimeout(()=>{
    setUpdate(false)
  },2000)
 }

  const onSubmit =(e)=>{
    console.log(e.target.value)
  }

  

  return (

    
    <div className="accountContainer">
       {isUpdate && <Alert onClose={() => {}}>This is a success alert — check it out!</Alert>}
      <div className="topContainer">
        <h3 className="titletop">List of Accounts</h3>

        <p className="Accounts"> Accounts</p>
        <select className="dropdown"  onChange={(e)=>onChangeHandler(e)}>
          <option>Select Account </option>
          <option>Admin </option>
          <option>Editor</option>
          <option>Merchant</option>
          <option>Customer</option>
        </select>
      </div>

      <div className="bottomContainer">

        <div className="leftContainerA">
          <div>
            <h3 className="avatarHeading" >Change Avatar  </h3>
            {/* <div>
              <img className="avatar" src={accountData.profilePic.length>0 ?accountData.profilePic: "https://images.pexels.com/photos/459947/pexels-photo-459947.jpeg?h=350&auto=compress&cs=tinysrgb"} alt="Image" />
            </div> */}
             <div className='avtar-img-container'>
                            <feImage src={accountData?.profilePic ? accountData.profilePic : `https://templatemo.com/templates/templatemo_524_product_admin/img/avatar.png`} alt="Avtar" className='avatar img-fluid mb-4' />
                            <span className='product-delete-link' title='delete' onClick={onDeleteBtnHandler}><i className="far fa-trash-alt product-delete-icon"></i></span>
                        </div>
            <button className="uploadNewbtn">UPLOAD NEW PHOTO</button>
          </div>
        </div>

        <div className="rightContainerA">
          <div>
          <h3 className="accountSetTitle" >Account Setting</h3>
          </div>
          <form method="post" className="formA" >
                <div className="formdiv">
                  <label htmlFor="name">Account Name</label><br></br>
                  <input onChange={(e)=>onSubmit(e)} id="name" value={accountData?.name } name="name" type="text" className="form-control validate"/>
                </div>
                <div className="formdiv">
                  <label htmlFor="email">Account Email</label><br></br>
                  <input  onChange={(e)=>onSubmit(e)} id="email" value={accountData?.email } name="email" type="email" className="form-control validate"/>
                </div>
                <div className="formdiv">
                  <label htmlFor="password">Password</label><br></br>
                  <input  onChange={(e)=>onSubmit(e)} id="password" value={accountData?.password} name="password" type="text" className="form-control validate"/>
                </div>
                <div className="formdiv">
                  <label htmlFor="password2">Re-enter Password</label><br></br>
                  <input  onChange={(e)=>onSubmit(e)} id="password2" value={accountData?.password} name="password2" type="password" className="form-control validate"/>
                </div>
                <div className="formdiv">
                  <label htmlFor="phone">Phone</label><br></br>
                  <input  onChange={(e)=>onSubmit(e)} id="phone" value={accountData.phone.length>0 ? accountData.phone:null } name="phone" type="tel" className="form-control validate"/>
                </div>
                <div className=" formdiv" >
                  <label  >&nbsp;</label>
                  <button type="submit"  onClick={onUpdateHandler} className="updateBtn">
                    Update Your Profile
                  </button>

                </div>
                <div >
                  <button type="submit" className="DeleteBtn">
                    Delete Your Account
                  </button>
                </div>
              </form>

        </div>

       
      </div>
    </div>
  );
}

export default Account;



{/* <div></div> */ }