import MainTitle from "./components/3-main/MainTItle";
import Header from "./components/1-Header/Header";
import Hero from "./components/2-hero/Hero";
import Main from "./components/3-main/main";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";

function App() {


  return (
    <div className="container">

    
      <Header />

      <Hero />
      <div className="divaider" />
      <MainTitle/>
      <Main />

      <div className="divaider" />
      <ScrollToTopButton/>
      <Footer />


    </div>
  );
}

export default App
