import Footer from "../../layouts/Footer/Footer";
import Header from "../../layouts/header/Header";
import Login from "../../components/SignIn/Login/Login";
import "../../sass/pages/_signin.scss";

const SignIn = () => {
  return (
    <>
      <Header />
      <main className="main bg-dark">
        <Login />
      </main>
      <Footer />
    </>
  );
};

export default SignIn;
