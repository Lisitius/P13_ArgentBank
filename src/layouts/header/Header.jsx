import "../../sass/layouts/_header.scss";
import { NavLink } from "react-router-dom";
import logoArgentBank from "../../assets/argentBankLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/features/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.auth.currentUser);
  const userProfile = useSelector((state) => state.user.profile);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate("/signin");
  };

  return (
    <header>
      <nav className="nav">
        <NavLink className="nav__main" to="/">
          <img
            className="nav__main--logo"
            src={logoArgentBank}
            alt="Logo Argent Bank"
          />
        </NavLink>
        <div className="login">
          {currentUser ? (
            <>
              <NavLink className="nav__item user" to="/user">
                <i className="fa fa-user-circle nav__item--icon"></i>
                {userProfile && userProfile.firstName}
              </NavLink>
              <NavLink
                className="nav__item"
                to="/signin"
                onClick={handleLogout}
              >
                <i className="fa fa-sign-out nav__item--icon"></i>
                SignOut
              </NavLink>
            </>
          ) : (
            <NavLink className="nav__item" to="/signin">
              <i className="fa fa-user-circle nav__item--icon"></i>
              SignIn
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
