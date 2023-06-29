import "../../../sass/components/_features.scss";
import chat from "../../../assets/icon-chat.png";
import money from "../../../assets/icon-money.png";
import security from "../../../assets/icon-security.png";

const Features = () => {
  return (
    <section className="features">
      {/* Feature 1 */}
      <div className="features__item">
        <img src={chat} alt="Chat Icon" className="features__icon" />
        <h3 className="features__item--title">You are our #1 priority</h3>
        <p>
          Need to talk to a representative? You can get in touch through our
          24/7 chat or through a phone call in less than 5 minutes.
        </p>
      </div>
      {/* Feature 2 */}
      <div className="features__item">
        <img src={money} alt="Chat Icon" className="features__icon" />
        <h3 className="features__item--title">
          More savings means higher rates
        </h3>
        <p>The more you save with us, the higher your interest rate will be!</p>
      </div>
      {/* Feature 3 */}
      <div className="features__item">
        <img src={security} alt="Chat Icon" className="features__icon" />
        <h3 className="features__item--title">Security you can trust</h3>
        <p>
          We use top of the line encryption to make sure your data and money is
          always safe.
        </p>
      </div>
    </section>
  );
};

export default Features;
