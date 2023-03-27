import React from "react";

const Charts = () => {
  return (
    <section>
      <h1 className="text-3xl font-bold text-center mb-3 mt-3">Charts:</h1>
      <div className="bg-[#d6d7da] rounded-[5px] mb-4 text-[18px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:bg-[#f3f4f5] hover:shadow-[2px_2px_2px_rgba(0,0,0,0.5)]">
        <article>
          <h2 className="text-xl font-bold">
            Порядок розрахунку ПЛАНУ експлуатації наватнажувальної техніки.
          </h2>
          <ul className="list-none ml-4">
            <li>
              <p>
                Порядок розрахунку наведено у відповідній узгодженій методиці.
              </p>
            </li>
            <li>
              <p>
                Детальний покроковий план розрахунку (як це працює на практиці)
                представлений нижче.
              </p>
            </li>
          </ul>
        </article>
      </div>
      <div className="bg-[#d6d7da] rounded-[5px] mb-4 text-[18px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:bg-[#f3f4f5] hover:shadow-[2px_2px_2px_rgba(0,0,0,0.5)]">
        <article>
          <b>
            <p>Вхідні дані:</p>
          </b>
          <ol className="list-decimal ml-9">
            <li>
              <p>
                Розрахунок потреби в електровізках (приклад:
                1-2023-2023-03-06.xlsb)*.
              </p>
            </li>
            <li>
              <p>
                Розрахунок потреби в річтраках і навантажувачах (приклад:
                2-2023-2023-03-06.xlsb)*.
              </p>
            </li>
          </ol>
        </article>
      </div>
      <div className="bg-[#d6d7da] rounded-[5px] mb-4 text-[18px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:bg-[#f3f4f5] hover:shadow-[2px_2px_2px_rgba(0,0,0,0.5)]">
        <article>
          <b>
            <p>Алгоритм розрахунку:</p>
          </b>
          <ol className="list-decimal ml-9">
            <li>
              <p>
                Копіюємо попередній файл graphics-2023-02.xlsb (на 2 кв)
                перейменовуємо його у graphics-2023-03.xlsb (на 3 кв).
              </p>
            </li>
            <li>
              <p>Відкриваємо його на вкладниці «вихідПЛАНрічний».</p>
            </li>
            <li>
              <p>
                Під зведеними таблицями (10 од.) робимо посилання** на файли з
                вихідних даних відповідно до назви таблиці і періоду розрахунку
                (посилання на рядки зберігаються, але все одно надаються нижче):
              </p>
            </li>

            <p className="ml-5">
              1) сер. на день кількість техніки в роботі (річтраки,
              навантажувачі, платформні візки) – посилаємось на: файл
              2-2023-2023-03-06.xlsb аркуш «reach» рядок 78 + аркуш «load» рядок
              78 + файл 1-2023-2023-03-06.xlsb аркуш «platform» рядок 28.
            </p>

            <p className="ml-5">
              2) сер. на день кількість техніки в роботі (повідкові візки,
              вагові візки) - посилаємось на: файл 1-2023-2023-03-06.xlsb аркуш
              «cart» рядок 60 (праворуч аркушу колонки AE-AP).
            </p>

            <p className="ml-5">
              3) сер. кількість річтраків в ремонті в день – посилаємось на:
              файл 2-2023-2023-03-06.xlsb аркуш «reach» рядок 130.
            </p>

            <p className="ml-5">
              4) сер. кількість річтраків в резерві в день – посилаємось на:
              файл 2-2023-2023-03-06.xlsb аркуш «reach» рядок 122.
            </p>

            <p className="ml-5">
              5) сер. кількість навантажувачів в ремонті в день – посилаємось
              на: файл 2-2023-2023-03-06.xlsb аркуш «load» рядок 130.
            </p>

            <p className="ml-5">
              6) сер. кількість навантажувачів в резерві в день – посилаємось
              на: файл 2-2023-2023-03-06.xlsb аркуш «load» рядок 122.
            </p>

            <p className="ml-5">
              7) сер. кількість платформних візків в ремонті в день –
              посилаємось на: файл 1-2023-2023-03-06.xlsb аркуш «platform» рядок
              66.
            </p>

            <p className="ml-5">
              8) сер. кількість платформних візків в резерві в день –
              посилаємось на: файл 1-2023-2023-03-06.xlsb аркуш «platform» рядок
              54.
            </p>

            <p className="ml-5">
              9) сер. кількість повідкових візків (з ваговими) в ремонті в день
              – посилаємось на: файл 1-2023-2023-03-06.xlsb аркуш «cart» рядок
              58 (праворуч аркушу колонки AE-AP).
            </p>

            <p className="ml-5">
              10) сер. кількість повідкових візків (з ваговими) в резерві в день
              – посилаємось на: файл 1-2023-2023-03-06.xlsb аркуш «cart» рядок
              57 (праворуч аркушу колонки AE-AP).
            </p>

            <li>
              <p>
                В двох простих таблицях під зведеними робимо посилання** на
                файли з вихідних даних по РЦ за відповідний період (відповідають
                посиланням в зведених таблицях №1 і №2).
              </p>
            </li>
            <li>
              <p>
                Проводимо перевірку в двох простих (останніх) таблицях на
                кореляцію між даними по РЦ і зведеними таблицями (№1 і №2). Має
                буде різниця 0 (в рядках 105 і 118). Також перевіряємо
                відповідність РЦ у двох простих (останніх) і вихідних файлах.
              </p>
            </li>
          </ol>
        </article>
      </div>
      <div className="bg-[#d6d7da] rounded-[5px] mb-4 text-[18px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:bg-[#f3f4f5] hover:shadow-[2px_2px_2px_rgba(0,0,0,0.5)]">
        <article>
          <p>
            <b>
              <u>Примітки:</u>
            </b>
          </p>
          <ul className="list-none ml-4">
            <li>
              <p>
                *Файли вихідних даних мають бути розташовані і одній теці (мати
                мінімально короткі назви – для уникнення плутанини).
              </p>
            </li>
            <li>
              <p>
                **Посилання під зведеними таблицями робимо для того, щоб при
                оперативній зміні вхідних даних від «Замовника» (план
                відвантаження [кг, плт, короба,], кількість магазинів) або від
                відділу персоналу (ШЧ) можна було в найкоротші терміни
                підтягнути і здати на ФЕС оновлені дані.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Charts;
