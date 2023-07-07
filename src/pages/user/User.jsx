import React, { useEffect } from "react";
import Account from "../../components/User/Account";
import Footer from "../../layouts/Footer/Footer";
import Header from "../../layouts/Header/Header";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const User = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate("/signin");
    }
  }, [currentUser, navigate]);

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
