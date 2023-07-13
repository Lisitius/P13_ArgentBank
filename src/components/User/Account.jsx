import "../../sass/components/_account.scss";
import { useSelector } from "react-redux";

const Account = () => {
  const userProfile = useSelector((state) => state.user.profile);

  return (
    <>
      <div className="name">
        <h1>
          Welcome back
          <br />
          {userProfile && userProfile.firstName}{" "}
          {userProfile && userProfile.lastName}
        </h1>
        <button className="name__button">Edit Name</button>
      </div>
      {/* account 1 */}
      <section className="account">
        <div className="account__content">
          <h3 className="account__content--title">
            Argent Bank Checking (x8349)
          </h3>
          <p className="account__content--amount">$2,082.79</p>
          <p className="account__content--description">Available Balance</p>
        </div>
        <div className="account__transaction">
          <button className="account__transaction--button">
            View transaction
          </button>
        </div>
      </section>
      {/* account 2 */}
      <section className="account">
        <div className="account__content">
          <h3 className="account__content--title">
            Argent Bank Savings (x6712)
          </h3>
          <p className="account__content--amount">$10,928.42</p>
          <p className="account__content--description">Available Balance</p>
        </div>
        <div className="account__transaction">
          <button className="account__transaction--button">
            View transaction
          </button>
        </div>
      </section>
      {/* account 3 */}
      <section className="account">
        <div className="account__content">
          <h3 className="account__content--title">
            Argent Bank Credit Card (x8349)
          </h3>
          <p className="account__content--amount">$184.30</p>
          <p className="account__content--description">Current Balance</p>
        </div>
        <div className="account__transaction">
          <button className="account__transaction--button">
            View transaction
          </button>
        </div>
      </section>
    </>
  );
};

export default Account;
