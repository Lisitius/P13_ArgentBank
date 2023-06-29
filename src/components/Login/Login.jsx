import "../../sass/components/_login.scss";

const Login = () => {
  return (
    <section className="signIn">
      <i className="fa fa-user-circle signIn__icon"></i>
      <h1>Sign In</h1>
      <form>
        <div className="signIn__wrapper">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div className="signIn__wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div className="signIn__remember">
          <label htmlFor="remember-me">Remember me</label>
          <input type="checkbox" id="remember-me" />
        </div>
        <a href="#" className="signIn__button">
          Sign In
        </a>
      </form>
    </section>
  );
};

export default Login;
