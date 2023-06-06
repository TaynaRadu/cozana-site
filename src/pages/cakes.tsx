import { Header } from "../components/Header/index";
import { Gallery } from "../components/Gallery/index";
import { Footer } from "../components/Footer/index";

import cake1 from "../assets/images/cake1.jpg";
import cake2 from "../assets/images/cake2.jpg";
import cake3 from "../assets/images/cake3.jpeg";
import cake4 from "../assets/images/cake4.jpeg";
import cake5 from "../assets/images/cake5.jpeg";
import cake6 from "../assets/images/cake6.jpeg";
import cake7 from "../assets/images/cake7.jpeg";
import cake8 from "../assets/images/cake8.jpeg";

const IMAGES: GalleyImage[] = [
  { img: cake1, alt: "cake1" },
  { img: cake2, alt: "cake2" },
  { img: cake3, alt: "cake3" },
  { img: cake4, alt: "cake4" },
  { img: cake5, alt: "cake5" },
  { img: cake6, alt: "cake6" },
  { img: cake7, alt: "cake7" },
  { img: cake8, alt: "cake8" },
];

export const Cakes = () => {
  return (
    <>
      <Header />

      <div style={{ marginTop: "4rem" }}>
        <Gallery title="Cakes" images={IMAGES} />
      </div>
      <Footer />
    </>
  );
};
