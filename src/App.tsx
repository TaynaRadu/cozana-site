import { Header } from "./components/Header/index.tsx";
import { Banner } from "./components/Banner/index";
import { Description } from "./components/Description/index";
import { Gallery } from "./components/Gallery/index";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Description />
      <Gallery />

      <footer className="rodape" id="contact">
        <h4 className="rodape__titulo">Cozana Home</h4>
        <div className="rodape__container">
          <ul className="rodape__lista">
            <li className="rodape__lista--titulo">Location</li>
            <li className="rodape__lista--item">355 Tudor Vladimirescu</li>
            <li className="rodape__lista--item">Ilfov, Domnești, București</li>
          </ul>
          <ul className="rodape__lista">
            <li className="rodape__lista--titulo">Contact</li>
            <li className="rodape__lista--item">
              <a
                href="https://wa.me/40730883083"
                target="_blank"
                className="rodape__social"
              >
                730 883 083
              </a>
            </li>
            <li className="rodape__lista--item">radu.ana.ra@gmail.com</li>
          </ul>
          <ul className="rodape__lista">
            <li className="rodape__lista--titulo">Follow</li>
            <li className="rodape__lista--item">
              <a href="" className="rodape__social">
                Instagram
              </a>
            </li>
            <li className="rodape__lista--item">
              <a
                href="https://www.facebook.com/cozanahome"
                target="_blank"
                className="rodape__social"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
        <p className="made">
          Made by <span>Tayna!</span>
        </p>
      </footer>
    </>
  );
}

export default App;
