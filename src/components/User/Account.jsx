import "../../sass/components/_account.scss";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from "../../redux/features/userSlice";

const Account = () => {
  const userProfile = useSelector((state) => state.user.profile);
  const token = useSelector((state) =>
    state.auth.currentUser ? state.auth.currentUser.body.token : null
  );
  const [editMode, setEditMode] = useState(false);
  const [firstName, setFirstName] = useState(
    userProfile ? userProfile.firstName : ""
  );
  const [lastName, setLastName] = useState(
    userProfile ? userProfile.lastName : ""
  );
  const dispatch = useDispatch();

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    dispatch(updateUserProfile({ token, firstName, lastName }));
    setEditMode(false);
  };

  return (
    <>
      <div className="name">
        {editMode ? (
          <>
            <h1>
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </h1>
            <button className="name__button" onClick={handleSaveClick}>
              Save Name
            </button>
          </>
        ) : (
          <>
            <h1>
              Welcome back
              <br />
              {userProfile && userProfile.firstName}{" "}
              {userProfile && userProfile.lastName}{" "}
            </h1>
            <button className="name__button" onClick={handleEditClick}>
              Edit Name
            </button>
          </>
        )}
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
