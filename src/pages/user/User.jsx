import React, { useEffect } from "react";
import Account from "../../components/User/Account";
import Footer from "../../layouts/Footer/Footer";
import Header from "../../layouts/header/Header";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUserProfile } from "../../redux/features/userSlice";

const User = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      dispatch(fetchUserProfile(currentUser.body.token));
    } else {
      navigate("/signin");
    }
  }, [currentUser, dispatch, navigate]);

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
