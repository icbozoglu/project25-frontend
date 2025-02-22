import {signup} from "../../api/apiCalls";
import { useState } from "react";

const UserSignUpPage = () => {

  const [user, setUser] = useState({email: "", password: "",  passwordRepeat: ""});

  const [pendingApiCall, setPendingApiCall] = useState(false);

  const onChange = e => {
    setUser({...user, [e.target.id]:e.target.value});
  }

  const onClick = async e =>{
    e.preventDefault();
    setPendingApiCall(true);

    signup(user)
    .then(response => {setPendingApiCall(false)})
    .catch(error => {setPendingApiCall(false)});
  }

  return (
    <div className="container">
    <form>
      <h1 className="text-center">Sign Up</h1>
      <hr />
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input id="email" onChange={onChange} className="form-control"/>
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input id="password" type="password" onChange={onChange} className="form-control"/>
      </div>
      <div className="form-group">
        <label htmlFor="passwordRepeat">Password repeat</label>
        <input id="passwordRepeat" type="password" onChange={onChange} className="form-control"/>
      </div>
      <div className="text-center mt-3">
      <button className="btn btn-primary" onClick={onClick} disabled={pendingApiCall || !user.password || user.password !== user.passwordRepeat}>
      {pendingApiCall && <span  class="spinner-border spinner-border-sm" aria-hidden="true"></span>}
      <span> Kaydet</span>
      </button>
      </div>
     
      </form>
    </div>
  );
};

export default UserSignUpPage;
