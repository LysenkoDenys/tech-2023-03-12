import React from "react";

const Others = () => {
  return (
    <>
      <section className="select-none">
        <h1 className="text-3xl font-bold text-center mb-3 mt-3">
          Others: here may be posted other topics.
        </h1>
        <div className="bg-[#d6d7da] rounded-[5px] mb-4 text-[18px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:bg-[#f3f4f5] hover:shadow-[2px_2px_2px_rgba(0,0,0,0.5)]">
          <article>
            <p>
              Даний проект розроблено за допомогою технології React JS, тож
              після завантаження він більше не потребує інтернету для навігації
              в сіоїх межах.
            </p>
            <p>
              Також застосовано мінімум контенту для пискореного завантаження і
              роботи сайту (на будь-яких мобільних пристроях).
            </p>
            <p className="mt-4">
              <strong>NOTE:</strong> hold on and evolve yourself! (c) some smart
              people
            </p>
          </article>
        </div>
        <div>
          <article>
            <p className="text-center">
              Special thanks to Kostyak Julia for inspire me to build this site.
            </p>
          </article>
        </div>
      </section>
    </>
  );
};

export default Others;
