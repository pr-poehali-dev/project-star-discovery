export default function Index() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-black">
        <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold tracking-tighter">
            РАФИНАД54
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
              Действующее пищевое производство в Новосибирске. Порционные продукты и сахарная пудра для HoReCa. Продажа 50% или 100% доли.
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
              <div className="text-white text-center px-6">
                <div className="text-5xl font-bold tracking-tighter leading-tight">50%<br/>или<br/>100%</div>
                <div className="text-base uppercase tracking-widest mt-3">доля в продаже</div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-black"></div>
            </div>
          </div>
        </div>

        {/* Key metrics */}
        <div className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-black">
          <div>
            <div className="text-5xl font-bold tracking-tighter">₽10М</div>
            <div className="text-sm uppercase tracking-widest mt-2 text-neutral-500">Годовая выручка</div>
          </div>
          <div>
            <div className="text-5xl font-bold tracking-tighter">60+</div>
            <div className="text-sm uppercase tracking-widest mt-2 text-neutral-500">Постоянных клиентов</div>
          </div>
          <div>
            <div className="text-5xl font-bold tracking-tighter">4</div>
            <div className="text-sm uppercase tracking-widest mt-2 text-neutral-500">Канала продаж</div>
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
                  <span className="text-black text-sm uppercase tracking-widest mt-4 text-center group-hover:text-white transition-colors">Сахар</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Порционный сахар</h3>
              <p className="text-neutral-400">Стики и саше 5–10 г, с логотипом и без. До 25 000 стиков/час. Поставки в гостиницы, кафе, рестораны, столовые. Договор с ТС «ЯРЧЕ».</p>
            </div>

            {/* Product 2 */}
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-100 group-hover:bg-red-600 transition-colors duration-300 p-6">
                  <span className="text-black text-6xl font-bold group-hover:text-white transition-colors">02</span>
                  <span className="text-black text-sm uppercase tracking-widest mt-4 text-center group-hover:text-white transition-colors">Соль & Перец</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Порционная соль и перец</h3>
              <p className="text-neutral-400">С логотипом заказчика и без. Для HoReCa-сегмента. Продажи через Ozon, Wildberries, Яндекс Маркет и прямые поставки.</p>
            </div>

            {/* Product 3 */}
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-100 group-hover:bg-red-600 transition-colors duration-300 p-6">
                  <span className="text-black text-6xl font-bold group-hover:text-white transition-colors">03</span>
                  <span className="text-black text-sm uppercase tracking-widest mt-4 text-center group-hover:text-white transition-colors">Сахарная пудра</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Сахарная пудра</h3>
              <p className="text-neutral-400">Фасованная 1 кг и весовая 5, 10, 25 кг. Мельница 200 кг/час. Поставки кондитерам, пекарням. Продажи на маркетплейсах.</p>
            </div>
          </div>

          <div className="mt-12 p-8 border border-neutral-700">
            <p className="text-lg text-neutral-300">
              Многоканальные продажи: прямые клиенты HoReCa + Ozon, Wildberries, Яндекс Маркет, Авито. Готовый бренд с историей и отзывами на маркетплейсах.
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
                <div className="text-center z-10 px-4">
                  <div className="text-4xl font-bold tracking-tighter">НСК</div>
                  <div className="text-sm uppercase tracking-widest mt-2">Новосибирск</div>
                  <div className="text-xs mt-2 text-neutral-500">крупный логистический центр</div>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 md:pt-24">
              <p className="text-xl mb-6">
                Готовый бизнес под ключ в сфере пищевого производства с налаженными продажами через маркетплейсы и прямыми поставками для HoReCa.
              </p>
              <p className="mb-6">
                Предприятие выпускает порционный сахар, соль, перец (с логотипом и без) для гостиниц, кафе, ресторанов, столовых, а также фасованную и весовую сахарную пудру для кондитеров. Заключён договор с ТС «ЯРЧЕ».
              </p>
              <p className="mb-6">
                Причина продажи — оптимизация портфеля активов собственника. Бизнес полностью прозрачен: готовы предоставить финансовую отчётность, показать производство и познакомить с ключевыми клиентами.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-12">
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-4">Что входит в сделку</h3>
                  <ul className="space-y-2 text-sm">
                    <li>Клиентская база HoReCa</li>
                    <li>4 автомата фасовки</li>
                    <li>Мельница 200 кг/час</li>
                    <li>Магазины на маркетплейсах</li>
                    <li>Официальный сайт</li>
                    <li>Договоры с поставщиками</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-4">Перспективы роста</h3>
                  <ul className="space-y-2 text-sm">
                    <li>Расширение ассортимента</li>
                    <li>Новые маркетплейсы</li>
                    <li>Собственный бренд для розницы</li>
                    <li>Масштабирование по Сибири</li>
                    <li>B2B-платформы</li>
                    <li>Рост онлайн-продаж</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-20 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto">
          <h2 className="text-6xl font-bold tracking-tighter mb-12">ОБОРУДОВАНИЕ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-neutral-700 p-8">
              <div className="text-red-600 text-sm uppercase tracking-widest mb-4">Фасовочные автоматы</div>
              <h3 className="text-2xl font-bold mb-4">3× DXD однорукавные</h3>
              <p className="text-neutral-400">Производительность до 12 000 стиков/час каждый. Итого — до 36 000 стиков/час на трёх машинах.</p>
            </div>
            <div className="border border-neutral-700 p-8">
              <div className="text-red-600 text-sm uppercase tracking-widest mb-4">Флагманский автомат</div>
              <h3 className="text-2xl font-bold mb-4">Problend 04-51</h3>
              <p className="text-neutral-400">5 рукавов, производство Болгария. До 25 000 стиков/час. Высокая производительность для крупных заказов.</p>
            </div>
            <div className="border border-neutral-700 p-8">
              <div className="text-red-600 text-sm uppercase tracking-widest mb-4">Производство пудры</div>
              <h3 className="text-2xl font-bold mb-4">Мельница 200 кг/час</h3>
              <p className="text-neutral-400">Собственное производство сахарной пудры. Фасовка 1 кг, 5 кг, 10 кг, 25 кг под заказ кондитеров и пекарен.</p>
            </div>
            <div className="border border-neutral-700 p-8">
              <div className="text-red-600 text-sm uppercase tracking-widest mb-4">Масштабируемость</div>
              <h3 className="text-2xl font-bold mb-4">Рост без вложений</h3>
              <p className="text-neutral-400">Производственные мощности позволяют кратно увеличить объёмы без существенных капитальных вложений.</p>
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
              <p className="text-xl mb-8">Оставьте заявку — покажем производство в Новосибирске, предоставим финансовую отчётность и познакомим с ключевыми клиентами.</p>
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
                  <span>Новосибирск, Россия</span>
                </p>
              </div>

              <div className="mt-12 p-6 bg-black/20">
                <div className="text-3xl font-bold tracking-tighter">По договорённости</div>
                <div className="text-sm uppercase tracking-widest mt-1 opacity-80">Стоимость бизнеса</div>
                <div className="text-sm mt-2 opacity-70">Продажа 50% или 100% доли — условия обсуждаются индивидуально</div>
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
                    placeholder="Что вас интересует — 50% или 100%?"
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
          <p className="text-sm mb-4 md:mb-0">2026 РАФИНАД54. Продажа готового бизнеса. Новосибирск.</p>
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
