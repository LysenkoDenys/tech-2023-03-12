import React from "react";

const Home = () => {
  return (
    <section>
      <h1 className="text-2xl font-bold text-center">
        Targets and tasks for calculate equipment indicators:
      </h1>
      <h2 className="text-xl font-bold">
        Мета: надання на ФЕС даних для графіків щодо експлуатації
        наватнажувальної техніки.
      </h2>
      <div className="block">
        <article>
          <h3 className="text-xl font-bold">
            Порядок розрахунку ПЛАНУ експлуатації наватнажувальної техніки.
          </h3>
          <p>Порядок розрахунку наведено у відповідній узгодженій методиці.</p>
          <p>Детальний покроковий план «Charts».</p>
          <div className="pics">
            <img
              className="pic-1"
              src={require("../images/h-01.png")}
              alt="images not found"
            />
          </div>
        </article>
      </div>
      <div className="block">
        <article>
          <h3 className="text-xl font-bold">
            Порядок розрахунку ПЛАНУ експлуатації наватнажувальної техніки
            (Візків).
          </h3>
          <p>
            Порядок розрахунку візків наведено у відповідній узгодженій
            методиці.
          </p>{" "}
          <p>
            Детальний покроковий план розрахунку (як це працює на практиці)
            представлений на сторінці «Carts».
          </p>
          <div className="pics">
            <img
              className="pic-1"
              src={require("../images/h-02.png")}
              alt="images not found"
            />
          </div>
        </article>
      </div>
      <div className="block">
        <article>
          <h3 className="text-xl font-bold">Other features</h3>
          <p>Інші положення.</p>
        </article>
      </div>
    </section>
  );
};

export default Home;
