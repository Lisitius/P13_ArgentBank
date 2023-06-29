import React from "react";
import Account from "../../components/User/Account";
import Footer from "../../layouts/Footer/Footer";
import Header from "../../layouts/Header/Header";

const User = () => {
  return (
    <>
      <Header />
      <main className="main bg-dark">
        <Account />
      </main>
      <Footer />
    </>
  );
};

export default User;