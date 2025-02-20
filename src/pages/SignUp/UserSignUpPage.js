import { useState } from "react";

const UserSignUpPage = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    passwordRepeat: "",
  });

  const onChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setUser({...user, [id]:value});
  }

  console.log(user);

  return (
    <>
      <h1>Sign Up</h1>
      <hr />
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="passwordRepeat">Password repeat</label>
        <input
          id="passwordRepeat"
          type="password"
          onChange={onChange}
        />
      </div>
      <button disabled={!user.password || user.password != user.passwordRepeat}>
        Kaydet
      </button>
    </>
  );
};

export default UserSignUpPage;
