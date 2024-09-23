import Card from "./Components/Card";
import Collection from "./Components/Collection";
import Icons from "./Components/Icons";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import Swipper from "./Components/Swipper";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Swipper />
      <Navbar />
      <div className="midcontents">
      <Search />
      <Icons />
      <Card />
      <Collection />
      </div>
    </>
  );
};

export default Home;
