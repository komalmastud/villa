import Footer from "./Components/Footer";
import Icons from "./Components/Icons";
import Slide from "./Components/Slide";
import ProductCard from "./Components/ProductCard";
import Collection from "./Components/Collection";
import Trending from "./Components/Trending";

const Home = () => {
  return (
    <>
      <div className="midcontents">
        <Icons />
        <Trending />
        <Slide />
        <ProductCard />
        <Collection />
        <Footer />
      </div>
    </>
  );
};

export default Home;
