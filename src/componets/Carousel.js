import React from "react";
import ReactDOM from "react-dom";

import InfiniteCarousel from "react-leaf-carousel";
import BestBuy from "../assets/images/best-buy-button.png";
import Amazon from "../assets/images/amazon-button.png";
import Asos from "../assets/images/asos-button.png";
import Ssense from "../assets/images/ssense-button.png";
import Clinique from "../assets/images/clinique-button.png";
import Kiels from "../assets/images/kiehls-button.png";

ReactDOM.render(
  <InfiniteCarousel
    breakpoints={[
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ]}
    dots={true}
    showSides={true}
    sidesOpacity={0.5}
    sideSize={0.1}
    slidesToScroll={4}
    slidesToShow={4}
    scrollOnDevice={true}
  >
    <div>
      <img alt="" src={BestBuy} />
    </div>
    <div>
      <img alt="" src={Amazon} />
    </div>
    <div>
      <img alt="" src={Asos} />
    </div>
    <div>
      <img alt="" src={Ssense} />
    </div>
    <div>
      <img alt="" src={Clinique} />
    </div>
    <div>
      <img alt="" src={Kiels} />
    </div>
  </InfiniteCarousel>,
  document.getElementById("root")
);
