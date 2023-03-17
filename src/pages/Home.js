import React from "react";

const Home = () => {
  return (
    <section>
      <h1>Targets and tasks:</h1>
      <h2>
        Мета: надання на ФЕС даних для графіків щодо експлуатації
        наватнажувальної техніки.
      </h2>
      <article>
        <h3>Порядок розрахунку ПЛАНУ експлуатації наватнажувальної техніки.</h3>
        <p>
          Детальний покроковий план розрахунку представлений на сторінці
          "Graphics".
        </p>
        <img
          className="pic-1"
          src={require("../images/h-01.png")}
          alt="image not found"
        />
      </article>

      <article>
        <h3>
          Порядок розрахунку ПЛАНУ експлуатації наватнажувальної техніки
          (Візків).
        </h3>
        <p>
          Детальний покроковий план розрахунку представлений на сторінці
          "Carts".
        </p>
        <img
          className="pic-1"
          src={require("../images/h-02.png")}
          alt="image not found"
        />
      </article>
      <article>
        <h3>
          Порядок розрахунку ПЛАНУ експлуатації наватнажувальної техніки
          (Річтраків і наватнажувачів).
        </h3>
        <p>
          Детальний покроковий план розрахунку представлений на сторінці
          "Reaches".
        </p>
        <img
          className="pic-1"
          src={require("../images/h-03.png")}
          alt="image not found"
        />
      </article>
    </section>
  );
};

export default Home;
