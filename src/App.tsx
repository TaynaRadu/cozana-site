import { Banner } from "./components/Banner/index";
import { Description } from "./components/Description/index";
import { Gallery } from "./components/Gallery/index";
import { Footer } from "./components/Footer/index";
import { Header } from "./components/Header/components/Header/index";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Description />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
