import "../../sass/layouts/_header.scss";
import { NavLink } from "react-router-dom";
import logoArgentBank from "../../assets/argentBankLogo.png";

const Header = () => {
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
        <div>
          <NavLink className="nav__item" to="/signin">
            <i className="fa fa-user-circle nav__item--icon"></i>
            Sign In
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
