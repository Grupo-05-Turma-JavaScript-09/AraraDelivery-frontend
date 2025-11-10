function Cadastro() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center font-bold overflow-hidden">
      {/* Fundo com vídeo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="https://i.imgur.com/xmm7m1N.mp4?mute=1&loop=1&autoplay=1" type="video/mp4" />
      </video>


      {/* Camada escura para contraste */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Card central */}
      <form className="relative z-20 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-10 w-11/12 max-w-md flex flex-col gap-4">
        <h2 className="text-[#1360bb] text-4xl text-center mb-2">Cadastrar</h2>

        <div className="flex flex-col w-full">
          <label htmlFor="nome" className="text-[#1360bb] font-semibold">
            Nome
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Nome"
            className="border-2 border-[#1360bb] rounded p-2 focus:outline-none focus:border-[#fdc943]"
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="usuario" className="text-[#1360bb] font-semibold">
            E-mail
          </label>
          <input
            type="text"
            id="usuario"
            name="usuario"
            placeholder="E-mail"
            className="border-2 border-[#1360bb] rounded p-2 focus:outline-none focus:border-[#fdc943]"
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="foto" className="text-[#1360bb] font-semibold">
            Foto
          </label>
          <input
            type="text"
            id="foto"
            name="foto"
            placeholder="URL da foto"
            className="border-2 border-[#1360bb] rounded p-2 focus:outline-none focus:border-[#fdc943]"
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="senha" className="text-[#1360bb] font-semibold">
            Senha
          </label>
          <input
            type="password"
            id="senha"
            name="senha"
            placeholder="Senha"
            className="border-2 border-[#1360bb] rounded p-2 focus:outline-none focus:border-[#fdc943]"
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="confirmarSenha" className="text-[#1360bb] font-semibold">
            Confirmar Senha
          </label>
          <input
            type="password"
            id="confirmarSenha"
            name="confirmarSenha"
            placeholder="Confirmar Senha"
            className="border-2 border-[#1360bb] rounded p-2 focus:outline-none focus:border-[#fdc943]"
          />
        </div>

        {/* Botões */}
        <div className="flex justify-between w-full gap-6 mt-4">
          <button
            type="reset"
            className="w-1/2 py-2 rounded text-white bg-[#de2120] hover:bg-[#fdc943] transition"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="w-1/2 py-2 rounded text-white bg-[#1360bb] hover:bg-[#fdc943] transition"
          >
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Cadastro;
