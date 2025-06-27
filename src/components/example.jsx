import React, { Component } from "react";
import VerticalCarousel from "./VerticalCarousel";
// import { v4 } from "uuid";
import { config } from "react-spring";

let slides = [
  {
    key: 1,
    content: "1",
    url: "https://media.extra.cz/static/img/2025/06/profimedia-0976955194_16_9_0-740x416.jpg",
    text: "Ministryně Decroix pod další palbou hejtů. Za vše může video, kde cvičí v přiléhavých kraťáskách",
  },
  {
    key: 2,
    content: "2",
    url: "https://media.extra.cz/static/img/2021/03/eva-decroix-690.jpg",
    text: "Eva Decroix za ODS vede advokátní kancelář v Jihlavě a Praze. S manželem Rémim Decroix, který je kuchař a cukrář, provozuje restauraci v obci Horní Dubenky. Mají spolu dvě dcery.",
  },
  {
    key: 3,
    content: "3",
    url: "https://media.extra.cz/static/img/2023/07/357685500-6296042937159098-3558838494249078705-n-690.jpg",
    text: "Eva Decroix z ODS nedávno spolu s rodinou vyrazila na náročnou cestu po Itálii. Cestovat měla v plánu vlakem, lodí, autobusem i lanovkou a navštívit Neapol, Řím, Pompeje či Capri.",
  },
  {
    key: 4,
    content: "4",
    url: "https://media.extra.cz/static/img/2023/07/357745613-6296043053825753-321418790720228971-n-690.jpg",
    text: "Eva Decroix pózuje v Itálii na rodinném snímku.",
  },
  {
    key: 5,
    content: "5",
    url: "https://media.extra.cz/static/img/2025/06/490454975-1517462883037577-7206547621803710806-n-690.jpg",
    text: "Eva Decroix se zvěčnila u vody v plavkách.",
  },
  {
    key: 6,
    content: "6",
    url: "https://media.extra.cz/static/img/2023/07/357832600-6296043100492415-5140278680624052473-n-690.jpg",
    text: "Eva Decroix si s rodinou dovolenou v Itálii užila.",
  },
  {
    key: 7,
    content: "7",
    url: "https://media.extra.cz/static/img/2023/07/358074980-6296043227159069-5310288392744209023-n-690.jpg",
    text: "Eva Decroix si z Itálie odvezla spousty krásných zážitků.",
  },
  {
    key: 8,
    content: "8",
    url: "https://media.extra.cz/static/img/2025/06/492558684-1525803572203508-1631686952245991413-n-690.jpg",
    text: "Eva Decroix má ráda přírodu.",
  },
];

export default class Example extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle,
  };

  // onChangeInput = e => {
  //   this.setState({
  //     [e.target.name]: parseInt(e.target.value, 10) || 0
  //   });
  // };

  render() {
    return (
      <div
        style={{
          position: "fixed",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100vw",
          height: "100vh",
          margin: "0 auto",
          background: "#303030",
        }}
      >
        <VerticalCarousel
          slides={slides}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
        />
      </div>
    );
  }
}
