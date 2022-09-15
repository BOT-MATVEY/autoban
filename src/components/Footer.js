import Navigation from "./Navigation";

function Footer({ id, toggleModelCall }) {
  return (
    <>
      <footer className="footer" id={id}>
        <div className="footer__container">
          <div className="content">
            <img
              className="header__autoban-logo"
              src="/images/autoban-logo.svg"
              alt="логотип компании Автобан"
            />

            <Navigation />

            <nav className="header__info">
              <div className="header__info__social-media">
                <div className="header__social_media_icon centered-element">
                  <img src="/images/nav-icons/viber.svg" alt="логотип Вайбер" />
                </div>
                <div className="header__social_media_icon  centered-element">
                  <img
                    src="/images/nav-icons/whats-app.svg"
                    alt="логотип whatsApp"
                  />
                </div>
              </div>
              <button className="btn nav-text" onClick={toggleModelCall}>
                ПОЛУЧИТЬ СПЕЦПРЕДЛОЖЕНИЕ
              </button>
            </nav>
          </div>

          <div className="footer__container__policy-and-norder main-text">
            <div className="footer__container__policy-and-norder__policy">
              <div style={{ cursor: "pointer" }}>
                <a href="https://www.google.ru/">
                  Политика конфиденциальности данных
                </a>
              </div>
            </div>
            <div className="footer__container__policy-and-norder__norder centered-element">
              <div>Cделано с</div>
              <img src="./images/nav-icons/NORDER'S-Heart.svg" alt="любовью" />
              <div>в NORDER</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
