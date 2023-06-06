import { Footer } from "../components/Footer/index";
import { Header } from "../components/Header/index";

type PageTemplateProps = {
  children: React.ReactNode;
};

export const PageTemplate = ({ children }: PageTemplateProps) => {
  return (
    <>
      <Header />

      <div style={{ marginTop: "4rem", minheight: "calc(100hv - 400px" }}>
        {children}
      </div>

      <Footer />
    </>
  );
};
