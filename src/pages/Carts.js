import React from "react";

const Carts = () => {
  return (
    <>
      <section>
        <h1 className="text-2xl font-bold">Carts:</h1>
        <div className="bg-[#d6d7da] rounded-[5px] mb-4 text-[18px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:bg-[#f3f4f5] hover:shadow-[2px_2px_2px_#333333]">
          <article>
            <h2 className="text-xl font-bold">
              Порядок розрахунку ПЛАНУ потреби в навантажувальній техніці
              (ВІЗКИ).
            </h2>
            <ul className="list-none ml-4">
              <li>
                <p>
                  Порядок розрахунку наведено у відповідній узгодженій методиці.
                </p>
              </li>
              <li>
                <p>
                  Детальний покроковий план розрахунку (як це працює на
                  практиці) представлений нижче.
                </p>
              </li>
            </ul>
          </article>
        </div>
        <div className="bg-[#d6d7da] rounded-[5px] mb-4 text-[18px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:bg-[#f3f4f5] hover:shadow-[2px_2px_2px_#333333]">
          <article>
            <ul className="list-none ml-4">
              <p>
                <strong>Вхідні дані:</strong>
              </p>
              <ol className="list-decimal ml-9">
                <li>
                  <p>План відвантажень від «Замовника».</p>
                </li>
                <li>
                  <p>План ШЧ і норм напрацювань від відділу персоналу.</p>
                </li>
              </ol>
            </ul>
          </article>
        </div>

        {/* =================================== */}
        <div>
          <article>
            <p></p>
          </article>
        </div>
      </section>
    </>
  );
};

export default Carts;
