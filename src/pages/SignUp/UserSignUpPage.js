import { useState } from "react";

const UserSignUpPage = () => {

  const [user, setUser] = useState({email: "", password: "",  passwordRepeat: ""});

  const onChange = (e) => {
    setUser({...user, [e.target.id]:e.target.value});
  }

  return (
    <>
      <h1>Sign Up</h1>
      <hr />
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email" onChange={onChange}/>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="passwordRepeat">Password repeat</label>
        <input id="passwordRepeat" type="password" onChange={onChange}/>
      </div>
      <button disabled={!user.password || user.password != user.passwordRepeat}>
        Kaydet
      </button>
    </>
  );
};

export default UserSignUpPage;
