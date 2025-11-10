import { useNavigate } from "react-router-dom";

const SobreNos = () => {
  const navigate = useNavigate();

  const handleComecarAgora = () => {
    navigate("/cadastro");
  };

  const equipe = [
    {
      nome: "Ayron Sant'Anna",
      foto: "https://media.licdn.com/dms/image/v2/D4D03AQHYZNLV0t-LlA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1691866967705?e=1764201600&v=beta&t=_msLnYt5g71maTTFwtMpj4JO9GihYnLh9Ydyh4clGBM", 
      github: "https://github.com/Ayron0",
      linkedin: "https://www.linkedin.com/in/ayronsantanna/"
    },
    {
      nome: "Emily Mangas",
      foto: "https://media.licdn.com/dms/image/v2/D4D03AQGG9c2WtsOMnQ/profile-displayphoto-scale_400_400/B4DZfDVbNpH4Ak-/0/1751328864577?e=1764201600&v=beta&t=GNjH344pFHMMOOLrxbKaD5D3MJ3RFbPjuBA8hUIzdIs", 
      github: "https://github.com/Emy2mangas",
      linkedin: "https://www.linkedin.com/in/emily-mangas/"
    },
    {
      nome: "Eric Silva",
      foto: "https://media.licdn.com/dms/image/v2/D5603AQHunXxiB9NdxQ/profile-displayphoto-crop_800_800/B56ZjjJGyQG4AI-/0/1756157472590?e=1764201600&v=beta&t=C988v3dkMO3VxeXUQBCMOFvOpp2W4Ig3Xjgw_eR5Qg8", 
      github: "https://github.com/kame-yu",
      linkedin: "https://www.linkedin.com/in/eric-silva-is-a-dev/"
    },
    {
      nome: "Flavio Correia",
      foto: "https://media.licdn.com/dms/image/v2/D4D03AQGINPjD8MNkjA/profile-displayphoto-crop_800_800/B4DZmrhfEfIgAI-/0/1759519307819?e=1764201600&v=beta&t=8dsntXONFYH7gL162vhGq4dPVoEg6SKOfp52F_EF40A", 
      github: "https://github.com/sonyflavio",
      linkedin: "https://www.linkedin.com/in/flavio-serra/"
    },
    {
      nome: "Paula Melo",
      foto: "https://media.licdn.com/dms/image/v2/D4D03AQEjrKTY73VO3g/profile-displayphoto-crop_800_800/B4DZl3B8hQGkAI-/0/1758638635836?e=1764201600&v=beta&t=ssqN0y4FHnbgh6rFuK5bESOuHYQ3b06jDVPeBjmJOv8", 
      github: "https://github.com/paulamelo2404",
      linkedin: "https://www.linkedin.com/in/paula-melo2404/"
    },
    {
      nome: "Sthefany Mattos",
      foto: "https://i.imgur.com/NUkRkak.jpeg",
      github: "https://github.com/sthefanyom",
      linkedin: "https://www.linkedin.com/in/sthefanyom/"
    }
  ];

  return (
    <div className="bg-white text-gray-800 font-sans">
      
      {/* 🟦 HERO SECTION */}
      <section className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <div>
          <h1 className="text-5xl lg:text-6xl font-black text-blue-600 leading-tight mb-6">
            Arara Delivery
          </h1>

          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Onde a distância tenta impedir, nós encontramos um jeito. 
            Com tecnologia, estratégia e muita determinação, conectamos 
            comunidades remotas ao que elas mais precisam.
          </p>

          <button
            onClick={handleComecarAgora}
            className="bg-rose-600 text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl hover:bg-rose-700 transition duration-300 transform hover:scale-105"
          >
            Fazer parte dessa jornada!
          </button>
        </div>

        {/* IMAGEM */}
        <div className="relative group">
          <img
            src="https://i.imgur.com/FJdRRlL.png"
            alt="Arara Delivery: Conectando o Brasil"
            className="rounded-2xl shadow-xl w-full object-cover transform transition duration-500 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 border-4 border-blue-400/30 rounded-2xl transform -translate-x-3 translate-y-3 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-500 hidden md:block"></div>
        </div>
      </section>

      <hr className="max-w-7xl mx-auto border-gray-200" />
      
      {/* 🧭 MISSÃO, VISÃO, VALORES */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-blue-600 text-center mb-16">
            Nosso DNA: O que nos move
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Missão */}
            <div className="bg-blue-600 text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Missão
              </h3>
              <p className="text-blue-100 text-base">
                Reduzir distâncias por meio da tecnologia e garantir acesso 
                a produtos e serviços essenciais onde ninguém mais chega.
              </p>
            </div>

            {/* Visão */}
            <div className="bg-rose-600 text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Visão
              </h3>
              <p className="text-rose-100 text-base">
                Ser referência nacional em logística de áreas remotas 
                com soluções digitais inovadoras e sustentáveis.
              </p>
            </div>

            {/* Valores */}
            <div className="bg-amber-400 text-gray-900 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                Valores
              </h3>
              <ul className="space-y-2 text-base">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Compromisso com impacto social
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Responsabilidade e agilidade
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Transparência e confiança
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 📜 NOSSA EVOLUÇÃO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* IMAGEM */}
        <div className="relative">
          <h2 className="text-3xl font-extrabold text-blue-600 mb-6">
            Nossa Jornada de Evolução 
          </h2>
          <img
            src="https://i.imgur.com/tNyGZyo.png"
            alt="Imagem que representa uma jornada, mapa ou progresso"
            className="rounded-2xl shadow-xl w-full object-cover border-4 border-gray-100"
          />
        </div>

        {/* TEXTO */}
        <div className="text-lg text-gray-700 space-y-6 leading-relaxed">

          <p className="text-xl font-bold text-gray-900 border-l-4 border-rose-600 pl-4">
            Em 2025, muita coisa aconteceu…
          </p>

          <p>
            Enquanto o mundo se movia rápido, nós também estávamos vivendo 
            uma transformação própria. Foi neste ano que nossos caminhos se cruzaram 
            na Generation Brasil, onde aprendemos desenvolvimento Fullstack e descobrimos que tecnologia também é ponte.
          </p>

          <blockquote className="bg-gray-100 p-4 rounded-xl shadow-inner italic border-l-4 border-blue-600 text-gray-800">
            No meio de códigos, projetos, desafios e madrugadas de Sprint, 
            percebemos que poderíamos construir algo maior. Algo que unisse 
            propósito, inovação e impacto real.
          </blockquote>

          <p className="text-2xl font-black text-rose-600 py-4">
            E assim nasceu a Arara Delivery.
          </p>

          <p>
            Criamos a empresa com a ambição de fazer diferente. 
            Começamos com a vontade de conectar o Brasil, especialmente 
            comunidades onde o CEP improvisa, o trajeto desafia 
            e a necessidade não espera.
          </p>

          <p className="text-xl font-semibold text-gray-900">
            Hoje somos um time unido por uma ideia simples: 
            ninguém deve ser deixado para trás por causa da distância.
          </p>
        </div>
      </section>

      {/* 👥 NOSSO TIME */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-blue-600 text-center mb-16">
            Conheça o Nosso Time 
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {equipe.map((pessoa) => (
              <div
                key={pessoa.nome}
                className="bg-white p-4 rounded-xl shadow-lg border-t-4 border-rose-600 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl"
              >
                <img
                  src={pessoa.foto}
                  alt={pessoa.nome}
                  className="w-20 h-20 mx-auto rounded-full object-cover shadow-md mb-3 border-2 border-white ring-2 ring-blue-500"
                />

                <h4 className="text-sm font-bold text-gray-900 leading-tight mb-1">{pessoa.nome}</h4>
                <p className="text-xs text-gray-500 mb-3">Desenvolvedor Fullstack</p>

                <div className="flex justify-center gap-3 text-lg">
                  <a
                    href={pessoa.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-black transition duration-200"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a
                    href={pessoa.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition duration-200"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🎯 CTA FINAL */}
      <section className="py-20 text-center bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-blue-600 mb-6">
            Pronto para encurtar distâncias com a gente?
          </h3>
          <button
            onClick={handleComecarAgora}
            className="bg-rose-600 text-white px-10 py-4 rounded-full text-lg font-bold shadow-xl hover:bg-rose-700 transition duration-300 transform hover:scale-105"
          >
            Fazer parte dessa jornada!
          </button>
        </div>
      </section>
    </div>
  );
};

export default SobreNos;