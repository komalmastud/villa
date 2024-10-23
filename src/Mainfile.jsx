import Footer from "./Components/Footer";
import Icons from "./Components/Icons";
import Slide from "./Components/Slide";
import ProductCard from "./Components/ProductCard";
import Collection from "./Components/Collection";
import Trending from "./Components/Trending";
import Search from "./Components/Search";
import Bestrate from "./Components/Bestrate";
import BookingPayment from "./Components/Bookingpayment";

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
        <BookingPayment />
        <Footer />
      </div>
    </>
  );
};

export default Home;
