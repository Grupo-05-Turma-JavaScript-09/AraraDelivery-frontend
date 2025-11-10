import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    'https://i.imgur.com/CpnMqRb.jpeg',
    'https://i.imgur.com/6myE9Xr.jpeg', 
    'https://i.imgur.com/m5XfUG8.jpeg'
  ];

  // Rotação automática das imagens - 5 SEGUNDOS
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-white">
      
      {/* CARROSSEL*/}
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
        {/* Imagem do Carrossel */}
        <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out">
          <img
            src={images[currentImageIndex]}
            alt="AraraDelivery conectando pessoas"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlay escuro para melhorar legibilidade dos textos */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Botões de Navegação */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl z-20 border border-gray-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl z-20 border border-gray-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Indicadores */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 border border-gray-300 ${
                index === currentImageIndex 
                  ? 'bg-amber-500 scale-125 shadow-lg' 
                  : 'bg-white/90 hover:bg-white'
              }`}
            />
          ))}
        </div>

        {/* Conteúdo CENTRALIZADO - TODOS OS TEXTOS COM MÁXIMA LEGIBILIDADE */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center text-white max-w-4xl mx-auto px-8">
            {/* "CONECTANDO O BRASIL REAL"*/}
            <div className="mb-16">
              <div className="inline-flex items-center bg-gradient-to-r from-blue-600/95 to-rose-600/95 backdrop-blur-lg rounded-full px-10 py-5 border-2 border-white/50 shadow-2xl mb-8 [text-shadow:_0_4px_12px_rgb(0_0_0_/_90%)] transform hover:scale-105 transition-transform duration-300">
                <div className="w-4 h-4 bg-amber-300 rounded-full mr-4 animate-pulse shadow-lg"></div>
                <span className="text-2xl font-bold tracking-wide drop-shadow-2xl">CONECTANDO O BRASIL REAL</span>
              </div>
            </div>
            
            {/* TÍTULO PRINCIPAL - SOMBRA FORTE */}
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight drop-shadow-2xl [text-shadow:_0_4px_20px_rgb(0_0_0_/_95%)]">
              Onde a <span className="text-amber-300 drop-shadow-2xl">distância</span><br />
              não é mais limite
            </h1>
            
            {/* DESCRIÇÃO - SOMBRA FORTE */}
            <p className="text-xl md:text-2xl mb-12 leading-relaxed max-w-3xl mx-auto drop-shadow-2xl [text-shadow:_0_3px_10px_rgb(0_0_0_/_90%)]">
              Levar não é só nossa função, é nossa missão. 
              <span className="text-amber-200 font-semibold drop-shadow-2xl"> Conectamos pessoas</span> com acesso a produtos essenciais.
            </p>

            {/* BOTÕES - ELEMENTOS SÓLIDOS */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/produtos"
                className="bg-amber-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-600 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl border-2 border-amber-400"
              >
                Explorar Produtos
              </Link>
              <Link
                to="/sobre"
                className="bg-white/95 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl border-2 border-white"
              >
                Conheça Nossa História
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE IMPACTO */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Mais que <span className="text-blue-600">entregas</span>,<br />
              <span className="text-rose-600">conexões humanas</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossa tecnologia existe para reduzir distâncias e construir pontes 
              onde antes só havia isolamento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 group border border-gray-100">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Locais Remotos</h3>
              <p className="text-gray-600 leading-relaxed">
                Atendemos áreas onde o acesso é desafio e a necessidade é urgente.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 group border border-gray-100">
              <div className="w-20 h-20 bg-rose-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-rose-200 transition-colors">
                <svg className="w-10 h-10 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tecnologia com Propósito</h3>
              <p className="text-gray-600 leading-relaxed">
                Inovação digital para resolver problemas reais das pessoas.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 group border border-gray-100">
              <div className="w-20 h-20 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-200 transition-colors">
                <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Impacto Social Real</h3>
              <p className="text-gray-600 leading-relaxed">
                Cada entrega é uma oportunidade de transformar vidas e realidades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO CONCEITUAL - NOSSA ESSÊNCIA */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Por que <span className="text-amber-500">Arara</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nosso nome carrega a essência do que acreditamos e do que buscamos representar
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-6 group">
                <div className="flex-shrink-0 w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Liberdade e Alcance</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Como a arara que voa longe, rompemos barreiras geográficas para 
                    alcançar quem mais precisa, não importa onde estejam.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Diversidade Brasileira</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Representamos as cores e a riqueza do Brasil, celebrando a diversidade 
                    de nossas regiões e pessoas.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="flex-shrink-0 w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center group-hover:bg-rose-200 transition-colors">
                  <svg className="w-8 h-8 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Visibilidade e Presença</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Assim como a arara é vista de longe, queremos ser referência em 
                    conectar lugares e pessoas que antes eram invisíveis.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Faça parte dessa revolução
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  Cada escolha no AraraDelivery é um passo para um Brasil mais conectado e humano.
                </p>
                <div className="flex flex-col gap-4">
                  <Link
                    to="/produtos"
                    className="bg-gradient-to-r from-blue-600 to-rose-600 text-white text-center py-4 rounded-xl font-bold hover:from-blue-700 hover:to-rose-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Descobrir Produtos
                  </Link>
                  <Link
                    to="/sobre"
                    className="border-2 border-gray-300 text-gray-700 text-center py-4 rounded-xl font-bold hover:border-amber-500 hover:text-amber-600 transition-all duration-300"
                  >
                    Conhecer Nossa Jornada
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Pronto para <span className="text-amber-500">voar</span> com a gente?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Junte-se ao movimento que está transformando a forma como o Brasil se conecta, 
            uma entrega de cada vez.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/produtos"
              className="bg-amber-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Começar Agora
            </Link>
            <Link
              to="/sobre"
              className="border-2 border-amber-500 text-amber-500 px-8 py-4 rounded-xl font-bold text-lg hover:bg-amber-500 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Conhecer Mais
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;