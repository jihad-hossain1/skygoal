import Destination from "../../components/destinations/Destination";
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
    </main>
  );
};

export default Home;
