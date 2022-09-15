//TODO Сделать вызов карт через array.map

function UspCards() {
  return (
    <div>
      <section className="usp-cards">
        <div className="usp-cards__usp-card">
          <img
            className="usp-cards__usp-card__usp-style-element"
            src="./images/usp-style-element.png"
            alt="стилизованный элемент"
          />
          <p className="super-bold-numer">1</p>
          <p className="h4">Официальный дилер Shacman</p>
          <p className="main-text">
            Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
            сгенерировать несколько
          </p>
        </div>

        <div className="usp-cards__usp-card">
          <img
            className="usp-cards__usp-card__usp-style-element"
            src="./images/usp-style-element.png"
            alt="стилизованный элемент"
          />
          <p className="super-bold-numer">2</p>
          <p className="h4">Официальный сервисный центр</p>
          <p className="main-text">
            Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
            сгенерировать несколько
          </p>
        </div>

        <div className="usp-cards__usp-card">
          <img
            className="usp-cards__usp-card__usp-style-element"
            src="./images/usp-style-element.png"
            alt="стилизованный элемент"
          />
          <p className="super-bold-numer">3</p>
          <p className="h4">Дистанционный лизинг</p>
          <p className="main-text">
            Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
            сгенерировать несколько
          </p>
        </div>

        <div className="usp-cards__usp-card">
          <img
            className="usp-cards__usp-card__usp-style-element"
            src="./images/usp-style-element.png"
            alt="стилизованный элемент"
          />
          <p className="super-bold-numer">4</p>
          <p className="h4">Доставка по всей России от компании</p>
          <p className="main-text">
            Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
            сгенерировать несколько
          </p>
        </div>
      </section>
    </div>
  );
}

export default UspCards;
