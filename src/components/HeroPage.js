import React from "react";

import HeroPageSlide from "./HeroPAgeSlide";

const heroPageSlidesInfo = [
  {
    title: "Официальный сервисный центр shacman в г. Иркутск",
    uspList: [
      "Только оригинальные запчасти",
      "Сертифицированные специалисты",
      "Гарантия производителя",
    ],
    id: 1,
  },
  {
    title: "Официальный сервисный центр shacman в г. Ангарск",
    uspList: ["listItem1", "listItem2", "listItem3"],
  },

  {
    title: "Официальный сервисный центр shacman в г. Ноябрьск",
    uspList: ["listItem1", "listItem2", "listItem3"],
    id: 3,
  },
];

function HeroPage({ toggleModelCall }) {
  const sliderContainer = React.createRef();
  const slideRef = React.createRef();

  const getMaxScroll = () => {
    return slideRef.current.offsetWidth * 2;
  };

  const getScrolllength = () => {
    return slideRef.current.offsetWidth;
  };

  let currentScrollAmount = 0;

  const scrollSlide = () => {
    sliderContainer.current.scrollTo({
      left: currentScrollAmount,
      behavior: "smooth",
    });
  };

  const onClickNext = () => {
    // Проверить в границах ли слайдов скролл, если нет => вернуться к первому слайду
    if (currentScrollAmount >= getMaxScroll()) {
      currentScrollAmount = 0;
    } else {
      currentScrollAmount += getScrolllength();
    }

    scrollSlide();
    console.log(currentScrollAmount);
  };

  const onClickPrev = () => {
    if (currentScrollAmount - getScrolllength() < 0) {
      currentScrollAmount = 0;
    } else {
      currentScrollAmount -= getScrolllength();
    }

    scrollSlide();
    console.log(currentScrollAmount);
  };

  return (
    <div>
      <section className="hero-page">
        <div className="content">
          <div className="hero-page__bg-image"></div>
          <div className="hero-page__info">
            <div className="hero-page__h1-and-text">
              <div className="slider-wrapper" ref={sliderContainer}>
                {heroPageSlidesInfo.map((slide) => (
                  <>
                    <HeroPageSlide
                      key={heroPageSlidesInfo.indexOf(slide)}
                      title={slide.title}
                      uspList={slide.uspList}
                      ref={slideRef}
                    />
                  </>
                ))}
              </div>
            </div>

            <div className="horizontal-btns nav-text">
              <button
                onClickCapture={toggleModelCall}
                className="btn btn-dominant "
              >
                Записаться
              </button>
              <button className="btn">Подробнее</button>
            </div>

            <div className="horizontal-btns hero-page__info__slider-btns">
              <div
                onClick={onClickPrev}
                className="slider-btn  centered-element"
              >
                <img
                  className="reflected-element"
                  src="./images/nav-icons/slider-nav-arrow.svg"
                  alt="стрелка влево"
                />
              </div>

              <div
                onClick={onClickNext}
                className="slider-btn  centered-element"
              >
                <img
                  src="./images/nav-icons/slider-nav-arrow.svg"
                  alt="стрелка вправо"
                />
              </div>
            </div>
          </div>
          <div
            className="hero-page__shacman-logo-container"
            style={{
              backgroundImage: "url(./images/nav-icons/shacman-big-logo.png)",
            }}
          ></div>
        </div>
      </section>
    </div>
  );
}

export default HeroPage;
