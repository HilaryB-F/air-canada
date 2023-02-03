import "../pages/ForYoupage.scss";
import Iconagraphy from "../assets/images/homepage-iconagraphy.png";
import NavBar from "../assets/images/nav-bar.png";
import Carousel from "carousel-react-rcdev";
import BestBuy from "../assets/images/best-buy-button.png";
import Amazon from "../assets/images/amazon-button.png";
import Asos from "../assets/images/asos-button.png";
import Ssense from "../assets/images/ssense-button.png";
import Clinique from "../assets/images/clinique-button.png";
import Kiels from "../assets/images/kiehls-button.png";
import GoCity from "../assets/images/go-city-card.png";
import Villas from "../assets/images/home-and-villas-card.png";
import Herschel from "../assets/images/herschel-card.png";
import Marriot from "../assets/images/marriot-bonvoy-card.png";
import MK from "../assets/images/michael-kors-card.png";
import Samsonite from "../assets/images/samsonite-card.png";
import Viator from "../assets/images/viator-card.png";
import Yeti from "../assets/images/yeti-card.png";

export default function ForYoupage() {
  return (
    <div className="background">
      <img src={Iconagraphy} alt="Homepage icons" className="info"></img>
      <p className="offers">Just For You</p>
      <Carousel>
        <img src={BestBuy} alt="imagem" title="imagem" className="images" />
        <img src={Amazon} alt="imagem" title="imagem" className="images" />
        <img src={Asos} alt="imagem" title="imagem" className="images" />
        <img src={Ssense} alt="imagem" title="imagem" className="images" />
        <img src={Clinique} alt="imagem" title="imagem" className="images" />
        <img src={Kiels} alt="imagem" title="imagem" className="images" />
      </Carousel>
      <p className="offers">Offers Near You</p>
      <Carousel>
        <img src={GoCity} alt="imagem" title="imagem" className="images" />
        <img src={Villas} alt="imagem" title="imagem" className="images" />
        <img src={Herschel} alt="imagem" title="imagem" className="images" />
        <img src={Marriot} alt="imagem" title="imagem" className="images" />
        <img src={MK} alt="imagem" title="imagem" className="images" />
        <img src={Samsonite} alt="imagem" title="imagem" className="images" />
        <img src={Viator} alt="imagem" title="imagem" className="images" />
        <img src={Yeti} alt="imagem" title="imagem" className="images" />
      </Carousel>
      <img src={NavBar} alt="navbar" className="navbar"></img>
    </div>
  );
}
