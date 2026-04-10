export default function Index() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-black">
        <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold tracking-tighter">
            ПОРЦИЯ БИЗНЕСА
          </a>
          <div className="flex space-x-8">
            <a href="#work" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Продукты
            </a>
            <a href="#about" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              О бизнесе
            </a>
            <a href="#contact" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Контакты
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-7 mb-8 md:mb-0">
            <h1 className="text-8xl md:text-9xl font-bold tracking-tighter leading-none mb-6">
              ГОТОВЫЙ
              <br />
              БИЗНЕС
            </h1>
            <p className="text-xl max-w-xl">
              Действующее производство порционных продуктов. Отлаженные процессы, постоянные клиенты, стабильная выручка. Готово к передаче новому владельцу.
            </p>
            <a
              href="#contact"
              className="inline-block mt-8 px-8 py-4 bg-black text-white text-sm uppercase tracking-widest hover:bg-red-600 transition-colors"
            >
              Узнать условия сделки
            </a>
          </div>
          <div className="col-span-12 md:col-span-5 flex items-center justify-center">
            <div className="relative w-full aspect-square bg-red-600 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-7xl font-bold tracking-tighter">12+</div>
                <div className="text-lg uppercase tracking-widest mt-2">лет на рынке</div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-black"></div>
            </div>
          </div>
        </div>

        {/* Key metrics */}
        <div className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-black">
          <div>
            <div className="text-5xl font-bold tracking-tighter">₽18М</div>
            <div className="text-sm uppercase tracking-widest mt-2 text-neutral-500">Годовая выручка</div>
          </div>
          <div>
            <div className="text-5xl font-bold tracking-tighter">40+</div>
            <div className="text-sm uppercase tracking-widest mt-2 text-neutral-500">Постоянных клиентов</div>
          </div>
          <div>
            <div className="text-5xl font-bold tracking-tighter">25%</div>
            <div className="text-sm uppercase tracking-widest mt-2 text-neutral-500">Маржинальность</div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="work" className="py-20 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto">
          <h2 className="text-6xl font-bold tracking-tighter mb-4">ПРОДУКТОВЫЕ</h2>
          <h2 className="text-6xl font-bold tracking-tighter mb-12 text-red-600">ЛИНЕЙКИ</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-100 group-hover:bg-red-600 transition-colors duration-300 p-6">
                  <span className="text-black text-6xl font-bold group-hover:text-white transition-colors">01</span>
                  <span className="text-black text-sm uppercase tracking-widest mt-4 text-center group-hover:text-white transition-colors">Соусы & Заправки</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Порционные соусы</h3>
              <p className="text-neutral-400">Фасовка 10–50 г. Поставки в рестораны, кафе, фастфуд-сети. 15 наименований собственных рецептур.</p>
            </div>

            {/* Product 2 */}
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-100 group-hover:bg-red-600 transition-colors duration-300 p-6">
                  <span className="text-black text-6xl font-bold group-hover:text-white transition-colors">02</span>
                  <span className="text-black text-sm uppercase tracking-widest mt-4 text-center group-hover:text-white transition-colors">Снеки & Перекусы</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Порционные снеки</h3>
              <p className="text-neutral-400">Индивидуальная упаковка. Поставки в отели, авиакомпании, корпоративные клиенты. Более 20 позиций.</p>
            </div>

            {/* Product 3 */}
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-100 group-hover:bg-red-600 transition-colors duration-300 p-6">
                  <span className="text-black text-6xl font-bold group-hover:text-white transition-colors">03</span>
                  <span className="text-black text-sm uppercase tracking-widest mt-4 text-center group-hover:text-white transition-colors">Специи & Приправы</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Порционные специи</h3>
              <p className="text-neutral-400">Фасовка по заказу клиента. Сети супермаркетов, HoReCa. Сертификаты качества, ХАССП.</p>
            </div>
          </div>

          <div className="mt-12 p-8 border border-neutral-700">
            <p className="text-lg text-neutral-300">
              В стоимость бизнеса входит: производственное оборудование, товарный знак, клиентская база, обученный персонал, технологические карты и рецептуры.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-5">
              <h2 className="text-6xl font-bold tracking-tighter mb-8">О БИЗНЕСЕ</h2>
              <div className="aspect-[4/5] bg-neutral-100 relative mb-8 md:mb-0 flex items-center justify-center">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border-2 border-black"></div>
                <div className="text-center z-10">
                  <div className="text-6xl font-bold">2012</div>
                  <div className="text-sm uppercase tracking-widest mt-2">год основания</div>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 md:pt-24">
              <p className="text-xl mb-6">
                Действующее производство порционных продуктов питания с выстроенными каналами сбыта. Бизнес работает без участия владельца — есть управляющий и слаженная команда.
              </p>
              <p className="mb-6">
                Собственные рецептуры и технологические карты, сертифицированное производство по стандарту ХАССП, долгосрочные контракты с сетевыми клиентами. Вся документация готова к передаче.
              </p>
              <p className="mb-6">
                Причина продажи — смена направления деятельности владельца. Бизнес прибыльный и имеет потенциал роста за счёт расширения ассортимента и выхода на новые регионы.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-12">
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-4">Что входит</h3>
                  <ul className="space-y-2">
                    <li>Оборудование</li>
                    <li>Клиентская база</li>
                    <li>Персонал</li>
                    <li>Товарный знак</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-4">Преимущества</h3>
                  <ul className="space-y-2">
                    <li>Работает без владельца</li>
                    <li>Сертификат ХАССП</li>
                    <li>Постоянные контракты</li>
                    <li>Готовые рецептуры</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8 bg-red-600 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-6xl font-bold tracking-tighter mb-8">СВЯЗАТЬСЯ</h2>
              <p className="text-xl mb-8">Оставьте заявку — расскажем подробности, покажем финансовую модель и организуем просмотр производства.</p>
              <div className="space-y-4">
                <p className="flex items-center">
                  <span className="w-24 text-sm uppercase tracking-widest">Почта</span>
                  <a href="mailto:sale@business.ru" className="hover:underline">
                    sale@business.ru
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="w-24 text-sm uppercase tracking-widest">Телефон</span>
                  <a href="tel:+74951234567" className="hover:underline">
                    +7 (495) 123-45-67
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="w-24 text-sm uppercase tracking-widest">Адрес</span>
                  <span>Москва, Россия</span>
                </p>
              </div>

              <div className="mt-12 p-6 bg-black/20">
                <div className="text-3xl font-bold tracking-tighter">₽4 500 000</div>
                <div className="text-sm uppercase tracking-widest mt-1 opacity-80">Стоимость бизнеса</div>
                <div className="text-sm mt-2 opacity-70">Окупаемость — от 18 месяцев</div>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm uppercase tracking-widest mb-2">
                    Имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm uppercase tracking-widest mb-2">
                    Почта
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                    placeholder="Ваш email"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm uppercase tracking-widest mb-2">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm uppercase tracking-widest mb-2">
                    Вопрос или комментарий
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                    placeholder="Что вас интересует?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="mt-8 px-8 py-3 bg-black text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
                >
                  Получить презентацию
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">2026 ПОРЦИЯ БИЗНЕСА. Продажа готового бизнеса.</p>
          <div className="flex space-x-8">
            <a href="#" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Telegram
            </a>
            <a href="#" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              WhatsApp
            </a>
            <a href="#" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Авито
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
