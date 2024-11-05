import Footer from "./Components/Footer";
import Icons from "./Components/Icons";
import Slide from "./Components/Slide";
import ProductCard from "./Components/ProductCard";
import Collection from "./Components/Collection";
import Trending from "./Components/Trending";
import Search from "./Components/Search";
import Bestrate from "./Components/Bestrate";
import UserPopup from "./Components/Userpopup";
import Sharepopup from "./Components/Sharepopup";
import Mostloved from "./Components/Mostloved";

const Home = () => {
  return (
    <>
      <div className="midcontents">
        <Search />
        <Icons />
        <Trending />
        <Slide />
        <Collection />
        <Bestrate />
        <ProductCard />
        <Footer />
        <UserPopup />
        <Mostloved />
        <Sharepopup />
      </div>
    </>
  );
};

export default Home;
