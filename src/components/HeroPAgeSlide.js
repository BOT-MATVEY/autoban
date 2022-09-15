import React from "react";
const HeroPageSlide = React.forwardRef(({ title, uspList }, ref) => {
  // console.log(uspList);

  return (
    <div className="slider-wrapper__slide" ref={ref}>
      <h1 className="hero-page-h1">{title}</h1>

      <ul className="usp list-text">
        {uspList.map((listItem) => {
          return (
            <li key={uspList.indexOf(listItem)}>
              <span>{listItem}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
});

export default HeroPageSlide;
