const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#1360bb] to-[#0c3a7a] text-white relative overflow-hidden">
      {/* Elemento decorativo - Asas da arara com gradiente mais suave */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white/30 via-amber-400 to-rose-400"></div>
      
      {/* Padrão de fundo sutil */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #ffffff 1px, transparent 1px),
                          radial-gradient(circle at 75% 75%, #EC4899 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        
        {/* Header Compacto */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-white to-rose-200 rounded-2xl flex items-center justify-center shadow-lg mr-3 border border-white/30">
              <div className="text-[#1360bb] font-bold text-lg">🦜</div>
            </div>
            <h3 className="text-3xl font-black bg-gradient-to-r from-white to-rose-200 bg-clip-text text-transparent">
              AraraDelivery
            </h3>
          </div>
          <p className="text-lg text-white/80 max-w-xl mx-auto">
            Conectando o Brasil real, uma entrega de cada vez
          </p>
        </div>

        {/* Grid Compacto - 3 Colunas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Navegação Rápida */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 border-l-4 border-amber-400 pl-3">
              Navegação
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/home", name: "Início", color: "white" },
                { href: "/produtos", name: "Produtos", color: "amber" },
                { href: "/categorias", name: "Categorias", color: "rose" },
                { href: "/perfil", name: "Meu Perfil", color: "green" },
                { href: "/sobre", name: "Sobre Nós", color: "purple", highlight: true }
              ].map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className={`
                      flex items-center group transition-all duration-300
                      ${item.highlight 
                        ? 'text-white font-semibold bg-white/10 hover:bg-white/20 rounded-lg px-3 py-2 border border-white/30' 
                        : 'text-white/70 hover:text-white'
                      }
                    `}
                  >
                    <div className={`w-2 h-2 ${item.color === 'white' ? 'bg-white' : `bg-${item.color}-400`} rounded-full mr-3 group-hover:scale-150 transition-transform ${item.highlight ? 'bg-amber-400' : ''}`}></div>
                    {item.name}
                    {item.highlight && (
                      <span className="ml-2 bg-amber-500 text-white text-xs px-2 py-1 rounded-full font-medium animate-pulse">
                        Novo
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 border-l-4 border-white pl-3">
              Contato
            </h4>
            
            <div className="space-y-4">
              <div className="flex items-center text-white/80 group">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-white/30 transition-colors border border-white/30">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-white/60">Telefone</div>
                  <div className="font-medium text-white">(11) 9999-9999</div>
                </div>
              </div>
              
              <div className="flex items-center text-white/80 group">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-white/30 transition-colors border border-white/30">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-white/60">Email</div>
                  <div className="font-medium text-white">contato@araradelivery.com</div>
                </div>
              </div>
            </div>
          </div>

          {/* Redes Sociais - APENAS GITHUB */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 border-l-4 border-rose-300 pl-3">
              Desenvolvimento
            </h4>
            
            <div className="flex space-x-3 mb-6">
              <a 
                href="https://github.com/Grupo-05-Turma-JavaScript-09" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/30 transition-colors group border border-white/30"
              >
                <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>

            <p className="text-sm text-white/70">
              Acesse nosso repositório no GitHub
            </p>
          </div>
        </div>

        {/* Rodapé Inferior */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="flex items-center mb-4 lg:mb-0">
              <div className="w-6 h-6 bg-gradient-to-r from-white to-rose-200 rounded flex items-center justify-center mr-2 border border-white/30">
                <span className="text-[#1360bb] text-xs font-bold">A</span>
              </div>
              <p className="text-white/70 text-sm">
                © 2025 AraraDelivery. Todos os direitos reservados.
              </p>
            </div>
            <div className="flex space-x-6 text-sm text-white/70">
              <a href="#" className="hover:text-white transition-colors">Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos</a>
              <a href="#" className="hover:text-white transition-colors">Acessibilidade</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;