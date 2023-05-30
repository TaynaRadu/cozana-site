import logoRemovedPreview from "./assets/images/logo-removebg-preview.png";
import cozonac1 from "./assets/images/cozonac1.png";

function App() {
  return (
    <>
      <header className="header">
        <img className="logo" src={logoRemovedPreview} alt="Logo" />

        <nav className="menu">
          <ul className="menu__list">
            <li className="menu__item">
              <a className="menu__link albastru" href="#despre">
                Despre
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link galben" href="#galerie">
                Galerie
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link rosu" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <section className="banner">
        <img className="banner__img" src={cozonac1} alt="" />
        <h2 className="banner__title">Făcut cu dragoste</h2>
      </section>

      <section className="despre" id="despre">
        <h2 className="despre__title">Despre</h2>
        <p className="despre__description">
          Cozana Home este o brutărie artizanală unde se simte aroma cozonacilor
          cu parfum de sarbatoare tot timpul anului, nu doar de sărbători. Se
          plămădesc din ingrediente naturale, și se coc în tihnă. Indiferent
          dacă sunt cu nucă, stafide, rahat sau mac sunt dulci, francezi de se
          topesc în gură. Cozonacii se fac la comandă, după pofta clientului,
          iar ingredientul secret , un stop de iubire născut din pasiunea pentru
          dulciuri sănătoase.
        </p>
      </section>

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
        <h4 className="rodape__titulo">Cozona Home</h4>
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
