import { FormEvent, useState } from "react";
import { ToastAlerta } from "../../utils/ToastAlerta";

function SejaEntregador() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cidade, setCidade] = useState("");
  const [transporte, setTransporte] = useState("");

  function enviarFormulario(e: FormEvent) {
    e.preventDefault();

    if (!nome || !email || !cidade || !transporte) {
      ToastAlerta("Preencha todos os campos!", "erro");
      return;
    }

    ToastAlerta("Cadastro enviado com sucesso!", "sucesso");

    setNome("");
    setEmail("");
    setCidade("");
    setTransporte("");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-[#f7f7f7]">
      {/* HERO SECTION */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 py-16 md:px-20 bg-[#de2120] text-white">
        <div className="max-w-xl mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Seja um entregador Arara Delivery!
          </h1>
          <p className="text-lg text-[#fdc943]">
            Trabalhe no seu tempo, aumente sua renda e faça parte do time que
            conecta pessoas com o sabor da cidade.
          </p>
        </div>

        <img
          src="https://i.imgur.com/QLKLMvX.png"
          alt="Entregador Arara Delivery"
          className="w-72 md:w-96 drop-shadow-lg"
        />
      </section>

      {/* BENEFÍCIOS */}
      <section className="py-16 px-6 md:px-20 bg-[#fdc943] text-center">
        <h2 className="text-3xl font-bold text-[#1360bb] mb-10">
          Por que ser um entregador Arara Delivery?
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-6 bg-white shadow-md rounded-xl border border-[#fdc943]">
            <h3 className="text-xl font-semibold text-[#1360bb] mb-3">
              Liberdade de horário
            </h3>
            <p>Escolha quando e quanto tempo quer trabalhar.</p>
          </div>

          <div className="p-6 bg-white shadow-md rounded-xl border border-[#fdc943]">
            <h3 className="text-xl font-semibold text-[#1360bb] mb-3">
              Ganhos justos
            </h3>
            <p>Receba por entrega e aumente seus ganhos semanais.</p>
          </div>

          <div className="p-6 bg-white shadow-md rounded-xl border border-[#fdc943]">
            <h3 className="text-xl font-semibold text-[#1360bb] mb-3">
              Faça parte de algo maior
            </h3>
            <p>Ajude a construir a rede que movimenta o Arara Delivery!</p>
          </div>
        </div>
      </section>

      {/* FORMULÁRIO */}
      <section className="py-16 px-6 md:px-20 bg-[#1360bb]/10 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-[#1360bb] mb-8 text-center">
          Cadastre-se para ser entregador
        </h2>

        <form
          onSubmit={enviarFormulario}
          className="bg-white p-8 rounded-2xl shadow-md w-full max-w-lg border border-[#1360bb]/20 flex flex-col gap-6"
        >
          <input
            type="text"
            placeholder="Nome completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="border-2 border-[#1360bb] rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#fdc943] focus:outline-none"
          />

          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 border-[#1360bb] rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#fdc943] focus:outline-none"
          />

          <input
            type="text"
            placeholder="Cidade"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            className="border-2 border-[#1360bb] rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#fdc943] focus:outline-none"
          />

          <select
            value={transporte}
            onChange={(e) => setTransporte(e.target.value)}
            className="border-2 border-[#1360bb] rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#fdc943] focus:outline-none"
          >
            <option value="">Selecione o tipo de transporte</option>
            <option value="bike">Bicicleta</option>
            <option value="moto">Moto</option>
            <option value="carro">Carro</option>
          </select>

          <button
            type="submit"
            className="bg-[#1360bb] text-white py-3 rounded-xl font-semibold shadow-md hover:bg-[#fdc943] hover:text-[#1360bb] transition-all"
          >
            Enviar cadastro
          </button>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="bg-[#de2120] text-white py-3 rounded-xl font-semibold shadow-md hover:bg-[#fdc943] hover:text-[#de2120] transition-all"
          >
            Cancelar
          </button>
        </form>
      </section>
    </div>
  );
}

export default SejaEntregador;
