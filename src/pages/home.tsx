import { Header } from "../components/Header/index";
import { Banner } from "../components/Banner/index";
import { Footer } from "../components/Footer/index";

import cozonac1 from "../assets/images/cozonac1.png";

export const Home = () => {
  return (
    <>
      <Header />

      <div style={{ marginTop: "4rem" }}>
        <Banner img={cozonac1} text="Făcut cu dragoste" />
      </div>

      <Footer />
    </>
  );
};
