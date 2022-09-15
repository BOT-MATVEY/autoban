function PopUpRequestCall({ toggleModelCall }) {
  return (
    <>
      <div className="pop-up">
        <div className="pop-up__bg"></div>

        <div className="pop-up__container">
          <div className="pop-up__container__wrapper">
            <button className="square-btn" onClick={toggleModelCall}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.1701 1.19563C1.14837 1.13147 1.13951 1.01339 1.15042 0.933227C1.1666 0.814124 1.19508 0.76256 1.30586 0.651783C1.45239 0.505251 1.5675 0.468379 1.7821 0.499238L1.89563 0.515566L7.67507 6.29501L13.4545 12.0744L13.4708 12.188C13.5017 12.4026 13.4648 12.5177 13.3183 12.6642C13.2073 12.7752 13.156 12.8035 13.0361 12.8198C12.7268 12.8618 13.3009 13.4058 6.92962 7.03336C1.68165 1.78439 1.20633 1.30262 1.1701 1.19563Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.83321 12.7997C1.76905 12.8215 1.65096 12.8303 1.5708 12.8194C1.4517 12.8032 1.40013 12.7748 1.28936 12.664C1.14282 12.5175 1.10595 12.4024 1.13681 12.1877L1.15314 12.0742L6.93258 6.29478L12.712 0.515338L12.8255 0.499011C13.0402 0.468152 13.1553 0.505024 13.3018 0.651556C13.4128 0.762522 13.441 0.813849 13.4573 0.933753C13.4994 1.24308 14.0434 0.668984 7.67093 7.04023C2.42196 12.2882 1.94019 12.7635 1.83321 12.7997Z"
                  fill="white"
                />
              </svg>
            </button>
            <h2>
              Оставьте нам свой номер и мы свяжемся с вами в ближайший рабочий
              час
            </h2>
            <form className="pop-up__container__form">
              <input type="name" placeholder="ФИО" />
              <input type="tel" placeholder="Номер телефона" />
              <button className="pop-up__container__form__btn btn">
                {" "}
                оставить заявку
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default PopUpRequestCall;
