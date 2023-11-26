import BookForm from "../../components/bookForm/BookForm";
import Destination from "../../components/destinations/Destination";
import Discount from "../../components/discount/Discount";
import HomeBanner from "../../components/homeBanner/HomeBanner";
import Tropical from "../../components/tropical/Tropical";

const Home = () => {
  return (
    <main>
      {/* banner section */}
      <HomeBanner />
      {/* tropical adventure  */}
      <Tropical />
      {/* destination section  */}
      <Destination />
      {/* discounts section  */}
      <Discount />
      {/* BookForm section  */}
      <BookForm />
    </main>
  );
};

export default Home;
