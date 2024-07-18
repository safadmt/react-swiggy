import React, { useEffect, useState } from "react";
import {addDoc,collection,db} from '../../Firebase'
import "./sidebar.css";
import { useCommonStateProvider } from "../../contextandreducer/restolinkcontext";
import { getDocs } from "firebase/firestore";

function Signup() {
    const {state,dispatch} = useCommonStateProvider()
  const [singupInfo, setSignUpInfo] = useState({
    mobile: "",
    name: "",
    email: "",
  });

  useEffect(()=> {
    async function getdo () {
        const users = await getDocs(collection(db,'users'))
        console.log(users)
    }
    getdo()
  },[])
  function handleInputChange(e) {
    const { name, value } = e.target;
    setSignUpInfo((previouState) => ({ ...previouState, [name]: value }));
  }

  async function handleSubmit (e) {
    e.preventDefault()
    const {mobile,name, email} = singupInfo;
    if(!mobile || !name || !email) {
        console.log("required all field")
        return 
    }
    if(mobile.length !== 10) {
        console.log("mobile number is not valid")
        return
    }
    try{
        const docRef = await addDoc(collection(db, 'users'), {...singupInfo,createdAt: new Date()})
        dispatch({type: "user_info", payload: singupInfo.name})
        dispatch({type: "sidebar_is_open", payload: "sidebar-inactive"})
        console.log(docRef.id)
    }catch(err) {
        console.log(err)
    }
  }
  // useEffect(()=> {console.log(singupInfo)},[singupInfo])
  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <div>
          <div className="input-group">
            <input
              type="Number"
              name="mobile"
              className="mobile"
              value={singupInfo.mobile}
              onChange={handleInputChange}
              placeholder="Enter your mobile number"
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              name="name"
              value={singupInfo.name}
              className="name"
              onChange={handleInputChange}
              placeholder="Enter your name"
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              name="email"
              value={singupInfo.email}
              className="email"
              onChange={handleInputChange}
              placeholder="Enter your email"
            />
          </div>
        </div>
        <div>
          <input type="submit" className="button-sl" value={"Signup"} />
        </div>
      </form>
    </div>
  );
}

export default Signup;
