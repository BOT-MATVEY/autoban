import Navigation from "./Navigation";

function Menu({ toggleMenu }) {
  return (
    <div>
      <div class="menu">
        <div class="menu__container">
          <div class="menu__container__content">
            <Navigation toggleMenu={toggleMenu} />

            <nav class="header__info">
              <div class="contact-info">
                <p class="nav-text">Отдел продаж</p>
                <p class="nav-text telephone-number">+7 3952 78 86 04</p>
              </div>

              <div class="header__info__social-media">
                <div class="header__social_media_icon centered-element">
                  <img
                    src="./images/nav-icons/viber.svg"
                    alt="логотип Вайбер"
                  />
                </div>

                <div class="header__social_media_icon  centered-element">
                  <img
                    src="./images/nav-icons/whats-app.svg"
                    alt="логотип whatsApp"
                  />
                </div>
              </div>

              <div class="header__search-block nav-text">
                <img
                  class="serach-icon"
                  src="./images/nav-icons/search-icon.svg"
                  alt="кнопка поиска"
                />
                <input
                  class="search-input"
                  type="text"
                  placeholder="Поиск..."
                />
              </div>
            </nav>
          </div>
        </div>

        <div onClick={toggleMenu} class="pop-up__bg"></div>

        <button
          for="menu__checkbox"
          class="menu-button-fake square-btn centered-element"
          onClick={toggleMenu}
        >
          <svg
            width="18"
            height="11"
            viewBox="0 0 18 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.1996 0.0560928C17.2603 0.086092 17.3501 0.163323 17.3991 0.227722C17.4718 0.323386 17.4881 0.379985 17.4881 0.536647C17.4881 0.743875 17.4328 0.851339 17.2593 0.981269L17.1674 1.05H8.99407H0.820713L0.728891 0.981269C0.555319 0.851339 0.5 0.743875 0.5 0.536647C0.5 0.379718 0.516289 0.323419 0.589561 0.227122C0.778559 -0.0213384 -0.0120716 -7.23021e-05 8.99909 0.000794342C16.4216 0.00149432 17.0983 0.00606076 17.1996 0.0560928ZM17.1906 5.01333C17.4105 5.1096 17.5374 5.36532 17.4902 5.61725C17.4611 5.77315 17.295 5.95731 17.1443 6.00091C17.0601 6.02527 14.5347 6.03307 8.9217 6.02631L0.820713 6.01654L0.728891 5.94781C0.554455 5.81721 0.5 5.71068 0.5 5.49989C0.5 5.28909 0.554455 5.18256 0.728891 5.05196L0.820713 4.98323L8.95494 4.9761C15.667 4.9702 17.1069 4.97673 17.1906 5.01333ZM17.1906 9.97977C17.4968 10.1141 17.5958 10.5134 17.39 10.784C17.2143 11.0149 17.5231 10.9997 12.9835 10.9997C8.42419 10.9997 8.75398 11.0167 8.56834 10.7727C8.49507 10.6764 8.47878 10.6201 8.47878 10.4631C8.47878 10.2559 8.5341 10.1484 8.70767 10.0185C8.79913 9.95004 8.81552 9.94974 12.9443 9.94254C16.3395 9.93661 17.1076 9.94334 17.1906 9.97977Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Menu;
