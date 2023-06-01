import { Header } from "./components/Header/index.tsx";
import { Banner } from "./components/Banner/index";
import { Description } from "./components/Description/index";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Description />
      <section className="servicii" id="galerie">
        <h2 className="servicii__title">Galerie</h2>

        <div className="servicii__container">
          <div className="servicii__img one"></div>
          <div className="servicii__img two"></div>
          <div className="servicii__img three"></div>
          <div className="servicii__img four"></div>
          <div className="servicii__img five"></div>
          <div className="servicii__img six"></div>
          <div className="servicii__img seven"></div>
          <div className="servicii__img eight"></div>
        </div>
      </section>

      <section></section>

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
