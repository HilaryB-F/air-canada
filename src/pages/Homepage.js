import "../pages/Homepage.scss";

import Carousel from "carousel-react-rcdev";
import BestBuy from "../assets/images/best-buy-button.png";
import Amazon from "../assets/images/amazon-button.png";
import Asos from "../assets/images/asos-button.png";
import Ssense from "../assets/images/ssense-button.png";
import Clinique from "../assets/images/clinique-button.png";
import Kiels from "../assets/images/kiehls-button.png";

export default function Homepage() {
  return (
    <>
      <Carousel>
        <img src={BestBuy} alt="imagem" title="imagem" className="bestbuy" />
        <img src={Amazon} alt="imagem" title="imagem" className="bestbuy" />
        <img src={Asos} alt="imagem" title="imagem" className="bestbuy" />
        <img src={Ssense} alt="imagem" title="imagem" className="bestbuy" />
        <img src={Clinique} alt="imagem" title="imagem" className="bestbuy" />
        <img src={Kiels} alt="imagem" title="imagem" className="bestbuy" />
      </Carousel>
      <Carousel>
        <img src={BestBuy} alt="imagem" title="imagem" className="bestbuy" />
        <img src={Amazon} alt="imagem" title="imagem" className="bestbuy" />
        <img src={Asos} alt="imagem" title="imagem" className="bestbuy" />
        <img src={Ssense} alt="imagem" title="imagem" className="bestbuy" />
        <img src={Clinique} alt="imagem" title="imagem" className="bestbuy" />
        <img src={Kiels} alt="imagem" title="imagem" className="bestbuy" />
      </Carousel>
    </>
  );
}
