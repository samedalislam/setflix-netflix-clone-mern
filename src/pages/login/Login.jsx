import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img src="logo.png" className="logo" alt="" />
        </div>
      </div>
      <div className="container">
        <form action="">
            <h1>Sign In</h1>
            <input type="email" placeholder="Email or phone number" />
            <input type="passwordd" placeholder="Password" />
            <button className="loginButton">Sign In</button>
            <span>New to Setflix? <b>Sign up now.</b></span>
            <small>
                This page is protected via reCaptcha to ensure you're not robot. <b>Learn more</b>.
            </small>
        </form>
      </div>
    </div>
  );
};
export default Login;
