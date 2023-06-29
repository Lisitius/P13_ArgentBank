import "../../sass/pages/_home.scss";
import Header from "../../layouts/Header/Header";
import Hero from "../../components/Home/Hero/Hero";
import Features from "../../components/Home/Features/Features";
import Footer from "../../layouts/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;
