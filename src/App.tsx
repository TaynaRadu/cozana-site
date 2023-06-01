import { Banner } from "./components/Banner/index";
import { Description } from "./components/Description/index";
import { Gallery } from "./components/Gallery/index";
import { Footer } from "./components/Footer/index";
import { Header } from "./components/Header/components/Header/index";
import cozonac1 from "./assets/images/cozonac1.png";

function App() {
  return (
    <>
      <Header />
      <Banner img={cozonac1} text="Făcut cu dragoste" />
      <Description />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
