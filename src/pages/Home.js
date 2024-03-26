import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="select-none">
      <h1 className="text-3xl font-bold text-center mb-3 mt-3">
        Targets and tasks for calculate equipment indicators:
      </h1>
      <div className="bg-[#d6d7da] rounded-[5px] mb-4 p-1 text-[18px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:bg-[#f3f4f5] hover:shadow-[2px_2px_2px_rgba(0,0,0,0.5)]">
        <article>
          <h3 className="text-xl font-bold">
            Порядок розрахунку ПЛАНУ експлуатації наватнажувальної техніки.
          </h3>
          <p>Порядок розрахунку наведено у відповідній узгодженій методиці.</p>
          <p>
            Детальний покроковий план розрахунку (як це працює на практиці){' '}
            <strong>
              <Link to="/charts" className="underline text-blue-700">
                «Charts»
              </Link>
            </strong>
          </p>
          <div className="pics">
            <img
              className="pic-1"
              src={require('../images/h-01.png')}
              alt="images not found"
            />
          </div>
        </article>
      </div>
      <div className="bg-[#d6d7da] rounded-[5px] mb-4 p-1 text-[18px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:bg-[#f3f4f5] hover:shadow-[2px_2px_2px_rgba(0,0,0,0.5)]">
        <article>
          <h3 className="text-xl font-bold">
            Порядок розрахунку ПЛАНУ потреби наватнажувальної техніки (ВІЗКІВ).
          </h3>
          <p>
            Порядок розрахунку візків наведено у відповідній узгодженій
            методиці.
          </p>
          <p>
            Детальний покроковий план розрахунку (як це працює на практиці)
            представлений на сторінці{' '}
            <strong>
              <Link to="/carts" className="underline text-blue-700">
                «Carts»
              </Link>
            </strong>
          </p>
          <div className="pics">
            <img
              className="pic-1"
              src={require('../images/h-02.png')}
              alt="images not found"
            />
          </div>
        </article>
      </div>
      <div className="bg-[#d6d7da] rounded-[5px] mb-4 p-1 text-[18px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:bg-[#f3f4f5] hover:shadow-[2px_2px_2px_rgba(0,0,0,0.5)]">
        <article>
          <h3 className="text-xl font-bold">Other features</h3>
          <p>
            Зарезервована сторінка, яка може бути пристосована під інші запити,
            або носити інформативний характер.
            <strong>
              <Link to="/others" className="underline text-blue-700">
                «Others»
              </Link>
            </strong>
          </p>
        </article>
      </div>
    </section>
  );
};

export default Home;
