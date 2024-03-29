import React from 'react';

const Carts = () => {
  return (
    <>
      <section className="select-none">
        <h1 className="text-3xl font-bold text-center mb-3 mt-3">Carts:</h1>
        <div className="bg-[#d6d7da] rounded-[5px] mb-4 p-1 text-[18px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:bg-[#f3f4f5] hover:shadow-[2px_2px_2px_rgba(0,0,0,0.5)]">
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
        <div className="bg-[#d6d7da] rounded-[5px] mb-4 p-1 text-[18px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:bg-[#f3f4f5] hover:shadow-[2px_2px_2px_rgba(0,0,0,0.5)]">
          <article>
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
          </article>
        </div>

        <div className="bg-[#d6d7da] rounded-[5px] mb-4 p-1 text-[18px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:bg-[#f3f4f5] hover:shadow-[2px_2px_2px_rgba(0,0,0,0.5)]">
          <article>
            <p>
              <strong>Алгоритм розрахунку:</strong>
            </p>
            <ol className="list-decimal ml-9">
              <li>
                <p>
                  Копіюємо попередній файл 1-2023-2023-03-06.xlsb (на 2 кв)
                  перейменовуємо його у 1-2023-2023-06-06.xlsb (на 3 кв).
                </p>
              </li>
              <li>
                <p>
                  Відкриваємо його на аркуші «ID». Копіюємо дані з файлу
                  відвантажень від «Замовника» (приклад: Прогноз ГО на 3-й
                  квартал 2023г v.1.xlsx), аркуш «Прогноз», Таблица 3.
                  Количество магазинов сети по регионам используемое в прогнозе
                  ГО ед./месяц в частині «Итого» на квартал у відповідні комірки
                  в рядку 6.
                </p>
              </li>
            </ol>
          </article>
        </div>
        <div className="bg-[#d6d7da] rounded-[5px] mb-4 p-1 text-[18px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:bg-[#f3f4f5] hover:shadow-[2px_2px_2px_rgba(0,0,0,0.5)]">
          <article>
            <ol className="ml-4">
              <li>
                <p> 3. Відкриваємо аркуш «value»:</p>
              </li>
            </ol>
            <ol className="list-[lower-alpha] ml-16">
              <li>
                <p>
                  Копіюємо дані з файлу відвантажень від «Замовника» аркуш
                  «Прогноз», з таблиці Таблица 1. Динамика веса отгружаемой
                  продукции (кг / месяц) в нашу таблицю (колонки G-R) Динамика
                  веса отгружаемой продукции (кг/месяц) у відповідний квартал
                  дані як значення і звіряємося з оригіналом в частині РЦ і
                  складів. Перевіряємо себе в рядку 130.
                </p>
              </li>
              <li>
                <p>
                  Копіюємо дані з файлу відвантажень від «Замовника» аркуш
                  «Прогноз короба», з таблиці Таблица 1. Динамика количества
                  отгружаемой продукции (ящ. / месяц) в нашу таблицю (колонки
                  T-AE) короба у відповідний квартал дані як значення і
                  звіряємося з оригіналом в частині РЦ і складів. Перевіряємо
                  себе в рядку 130.
                </p>
              </li>
              <li>
                <p>
                  Копіюємо дані з файлу відвантажень від «Замовника» аркуш
                  «Прогноз», з таблиці Таблица 2. Динамика количества
                  отгружаемых паллет, шт. в нашу таблицю (колонки AG-AS) палети
                  у відповідний квартал дані як значення і звіряємося з
                  оригіналом в частині РЦ і складів. Перевіряємо себе в рядку
                  130. Зміщуємо формулу в колонці «сер» (AS) до відповідного
                  кварталу (в 3кв з AM по AR), щоб вона враховувала середні
                  значення відповідного кварталу, а не всього року).
                </p>
              </li>
              <li>
                <p>
                  Копіюємо дані з файлу відвантажень від «Замовника» аркуш
                  «Охлажденка», з таблиці Таблица 1. Планируемые объемы по
                  охлажденной продукции РЦ Львов на 2023 і Таблица 2.
                  Планируемые объемы по охлажденной продукции РЦ Одесса на 2023г
                  г під низ наших відповідних таблиць (рядки 154-155) дані по
                  палетах, коробах і кг.
                </p>
              </li>
              <li>
                <p>
                  В нашій таблиці (А-С) перевірити актуальність і в разі
                  необхідності додати відповідну назву РЦ.
                </p>
              </li>
            </ol>
          </article>
        </div>

        <div className="bg-[#d6d7da] rounded-[5px] mb-4 p-1 text-[18px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:bg-[#f3f4f5] hover:shadow-[2px_2px_2px_rgba(0,0,0,0.5)]">
          <article>
            <ol className="ml-4">
              <li>
                <p>4. Відкриваємо аркуш «calc»:</p>
              </li>
            </ol>
            <ol className="list-[lower-alpha] ml-16">
              <li>
                <p>
                  В{' '}
                  <em>
                    <u>Таблиця1.</u>
                  </em>{' '}
                  <strong>
                    Розрахунок потреби у електричних візках на 2022 рік.
                  </strong>{' '}
                  по всіх РЦ і кожному складу перевіряємо (оновлюємо) і в разі
                  додавання нових складів додаємо норми в стовпчик «МК:Норма
                  выр. в см, уп.» (колонка F) – не забуваємо про охолоджену
                  продукцію, яка винесена за межі таблиці (рядок 187-189). Окрім
                  овочів та фруктів – ці норми вносимо на аркуші «weight». В
                  стовпчик «Грузчик, чел/см» (колонка K) і «Грузчик по приемке,
                  чел/см» (колонка L) по всіх РЦ і кожному складу перевіряємо
                  (оновлюємо) і в разі додавання нових складів додаємо
                  нормативну кількість штатних одиниць з урахуванням змін (в
                  комірках лишилися посилання на старі ШР і враховані зміни).
                  Дані необхідно взяти у відділі персоналу (формат даних кожного
                  кварталу змінюється і не підлягає автоматизації). В стовпчику
                  «ГП: объем отгрузок, плт» проконтролювати правильність
                  посилань на відповідні середні значення по відвантаженню палет
                  з аркушу «value» в колонці «сер» (AS). В стовпчиках
                  «Unicode2», «РЦ», «Склад» продивитись відповідність складів і
                  РЦ, для коректного утворення даних у стовпчику «Unicode1» - на
                  нього посилається (наступна праворуч) розрахункова таблиця
                  (прогноз відвантажень в коробах, уп.). Перевірка коректності
                  проходить в рядку 177 – треба щоб відхилення було 0. Стовпчики
                  «потр. платформ. тележек», «потр. повод. тележек» -
                  застосовувались раніше, для розрахунку візків з платформою
                  виходячи з технологічного процесору (60% на 40%) і персоналу,
                  передбаченому в ШЧ – тепер використовується виключно для
                  приблизної оцінки (так як відділ персоналу надає план по ШЧ
                  значно пізніше за узгодженим регламентом).
                </p>
              </li>
              <li>
                <p>
                  В таблиці «
                  <strong>прогноз відвантажень в коробах, уп.</strong>»
                  автоматично відбувається розрахунок кількості відвантажених
                  коробів. По суті це просто конвертована вхідна таблиця з
                  аркуша «value» налаштована для наших назв складів. Необхідно
                  перевірити відповідність до наших складів і РЦ і перевірити
                  відсутність різниці з вхідною таблицею.
                </p>
              </li>
              <li>
                <p>
                  В таблиці «<strong>молодші комірники</strong>» автоматично
                  відбувається розрахунок кількості молодших комірників виходячи
                  з норм виробки і прогнозу кількості відвантажених коробів.
                </p>
              </li>
              <li>
                <p>
                  В таблиці «
                  <strong>
                    повідкові візки (мк+вантажники+ванатжники по
                    прийому-платформні візки)
                  </strong>
                  » автоматично відбувається розрахунок кількості персоналу,
                  який потребує повідковий візок. Попри автоматику, треба
                  враховувати специфіку деяких екзотичних складів типу ВВА або
                  охолодженої продукції (рядки 187-189), на них може бути
                  окремий розрахунок. Також треба враховувати терміни дії
                  складів при відкритті/зачиненні РЦ на протязі кварталу.
                </p>
              </li>
            </ol>
          </article>
        </div>

        <div className="bg-[#d6d7da] rounded-[5px] mb-4 p-1 text-[18px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:bg-[#f3f4f5] hover:shadow-[2px_2px_2px_rgba(0,0,0,0.5)]">
          <article>
            <ol className="ml-4">
              <li>
                <p>5. Відкриваємо аркуш «pivot»:</p>
              </li>
            </ol>
            <ol className="list-[lower-alpha] ml-16">
              <li>
                <p>
                  В зведеній таблиці «
                  <strong>поводкові візки без врахування ОіФ</strong>» оновлюємо
                  дані (не забуваємо про додавання нових РЦ – додати їх у
                  фільтрі зведеної таблиці). Дані беруться з таблиці описаної в
                  п.4.d.
                </p>
              </li>
              <li>
                <p>
                  В таблиці «<strong>прогноз</strong>» зведено всі повідкові
                  візки згідно ШЧ (індикативне). Перевіряємо посилання на
                  відповідні РЦ, так як вони прописані безпосередньо.
                </p>
              </li>
              <li>
                <p>
                  В таблиці «
                  <strong>
                    всі візки (платформа + повідок) без вагових (ОіФ)
                  </strong>
                  » зведено всі повідкові візки і візки з платформою для
                  оператора. Перевіряємо період при відкритті/зачиненні РЦ.
                </p>
              </li>
            </ol>
          </article>
        </div>

        <div className="bg-[#d6d7da] rounded-[5px] mb-4 p-1 text-[18px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:bg-[#f3f4f5] hover:shadow-[2px_2px_2px_rgba(0,0,0,0.5)]">
          <article>
            <ol className="ml-4">
              <li>
                <p>6. Відкриваємо аркуш «weight»:</p>
              </li>
            </ol>
            <ol className="list-[lower-alpha] ml-16">
              <li>
                <p>
                  В таблиці «
                  <em>
                    <u>Таблица1.</u>
                  </em>{' '}
                  <strong>Розрахунок потреби 2023.</strong>» проставляємо норми
                  виробки молодших комірників в стовпчику «Норма виробки в
                  зміну, кг» (з відділу персоналу). В стовпчику «Unicode1»
                  забезпечуємо відповідність РЦ і складу, для того, щоб отримати
                  дані по плану відвантажень [кг/міс].
                </p>
              </li>
              <li>
                <p>
                  В таблиці «<strong>Молодші комірники номінал, од.</strong>»
                  автоматично розраховується кількість молодших комірників
                  виходячи з норм виробки і прогнозу кількості відвантажених
                  кілограмів на місяць. Вважається, що кожному молодшому
                  комірнику треба забезпечити наявність одного візка, тому по
                  суті це розрахунок потреби РЦ у вагових візках.
                </p>
              </li>
            </ol>
          </article>
        </div>

        <div className="bg-[#d6d7da] rounded-[5px] mb-4 p-1 text-[18px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:bg-[#f3f4f5] hover:shadow-[2px_2px_2px_rgba(0,0,0,0.5)]">
          <article>
            <ol className="ml-4">
              <li>
                <p>7. Відкриваємо аркуш «cart»:</p>
              </li>
            </ol>
            <ol className="list-[lower-alpha] ml-16">
              <li>
                <p>
                  В таблиці «
                  <em>
                    <u>Таблица1.</u>
                  </em>{' '}
                  <strong>Расчет потребности электротележек, ед.</strong>»
                  тягнемо дані (з урахуванням змін по РЦ ). Дані беруться з
                  таблиці описаної в п.5.с. Також можливо колись буде
                  застосовано коефіцієнт пікових відванатажень (P1). Зараз він
                  дорівнює 1 і ні на що не впливає.
                </p>
              </li>
              <li>
                <p>
                  В таблиці «
                  <em>
                    <u>Таблица2.</u>
                  </em>{' '}
                  <strong>Фактическое наличие электротележек, ед.</strong>»
                  заповнюємо актуальними даними фактичної наявності візків на РЦ
                  (всі повідкові візки і візки з платформою для оператора).
                </p>
              </li>
              <li>
                <p>
                  В таблиці «
                  <em>
                    <u>Таблица3.</u>
                  </em>{' '}
                  <strong>
                    Дефицит/профицит электротележек с учетом 98% исправности
                    техники, ед.»
                  </strong>
                  розраховується дефіцит/профіцит з урахуванням коефіцієнту
                  оснащеності техніки (98% - затверджено в СП), в разі зміни
                  (може під впливом старіння парку техніки) поміняти в комірці
                  (P2).
                </p>
              </li>
              <li>
                <p>
                  Для вагових візків відповідно для кожної таблиці (а-с) тягнемо
                  дані з аркушу «weight».
                </p>
              </li>
              <li>
                <p>
                  Для таблиць групи «Итого» розрахунок автоматичний (це просто
                  сума всіх класичних і вагових візків).
                </p>
              </li>
              <li>
                <p>
                  В разі отримання дефіциту візків, треба забезпечити їх
                  закупівлю або оренду (таблиці в рядках 51-55). Для цього
                  необхідно, щоб рядок 55 був більше або дорівнював 0.
                </p>
              </li>
              <li>
                <p>
                  Рядки 57-60 використовуються з метою отримання даних для
                  графіків («Charts»). Планова кількість візків в резерві без
                  урахування візків з платформою для оператора (рядок 57).
                  Планова кількість візків в ремонті без урахування візків з
                  платформою для оператора (рядок 58). Планова кількість візків
                  в роботі без урахування візків з платформою для оператора
                  (рядок 60).
                </p>
              </li>
            </ol>
          </article>
        </div>

        <div className="bg-[#d6d7da] rounded-[5px] mb-4 p-1 text-[18px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:bg-[#f3f4f5] hover:shadow-[2px_2px_2px_rgba(0,0,0,0.5)]">
          <article>
            <ol className="ml-4">
              <li>
                <p>8. Відкриваємо аркуш «platform»:</p>
              </li>
            </ol>
            <ol className="list-[lower-alpha] ml-16">
              <li>
                <p>
                  В таблиці «
                  <em>
                    <u>Таблица1.</u>
                  </em>{' '}
                  <strong>
                    Сер. обсяг відвантажень на 2022 рік, пал./доба.
                  </strong>
                  » тягнемо дані по відвантаженням в палетах з файлу
                  2-2023-2023-06-06.xlsb (на 3 кв).xlsb, аркуш «value».
                </p>
              </li>
              <li>
                <p>
                  В таблиці «
                  <em>
                    <u>Таблица2.</u>
                  </em>{' '}
                  <strong>Потреба, од.</strong>» розраховуємо потребу виходячи з
                  нормативу на звіз (оновити/перевірити у відділі персоналу).
                </p>
              </li>
              <li>
                <p>
                  В таблиці «
                  <em>
                    <u>Таблица3.</u>
                  </em>{' '}
                  <strong>Факт наявності, од.</strong>» заповнюємо актуальними
                  даними фактичної наявності візків на РЦ.
                </p>
              </li>
              <li>
                <p>
                  В таблиці «
                  <em>
                    <u>Таблица4.</u>
                  </em>{' '}
                  <strong>Дефіцит/профіцит, од.</strong>» розраховується
                  дефіцит/профіцит з урахуванням коефіцієнту оснащеності техніки
                  (95%), в разі зміни (може під впливом старіння парку техніки)
                  поміняти в комірці (P1).
                </p>
              </li>
              <li>
                <p>
                  Рядок 66 використовуються з метою отримання даних для графіків
                  («Charts»). Планова кількість в ремонті візків з платформою
                  для оператора.
                </p>
              </li>
            </ol>
          </article>
        </div>
        <div className="bg-[#d6d7da] rounded-[5px] mb-4 p-1 text-[18px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:bg-[#f3f4f5] hover:shadow-[2px_2px_2px_rgba(0,0,0,0.5)]">
          <article>
            <p>
              <strong>
                <u>Примітки:</u>
              </strong>
            </p>
            <ul className="list-none ml-4">
              <li>
                <p>
                  При розрахунку рекомендовано користуватися аркушем «method».
                </p>
              </li>
              <li>
                <p>
                  Порядок слідування РЦ і складів у плані відвантажень від
                  «Замовника» може бути змінено.
                </p>
              </li>
              <li>
                <p>
                  Також можуть бути внесені зміни в технології, які не можна
                  врахувати в рамках даної методики, тоді необхідно ввести
                  додаткові зміни і знову узгодити методику.
                </p>
              </li>
            </ul>
          </article>
        </div>
      </section>
    </>
  );
};

export default Carts;
