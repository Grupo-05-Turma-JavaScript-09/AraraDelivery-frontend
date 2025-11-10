import {
  useContext,
  useEffect,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { Link, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { AuthContext } from "../../contexts/AuthContext";
import type UsuarioLogin from "../../models/UsuarioLogin";

function Login() {
  const navigate = useNavigate();
  const { usuario, handleLogin, isLoading } = useContext(AuthContext);

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  );

  useEffect(() => {
    if (usuario.token !== "") {
      navigate("/home");
    }
  }, [usuario, navigate]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value,
    });
  }

  function login(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(usuarioLogin);
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen font-sans">
      {/* --- Lado esquerdo (imagem) --- */}
      <div
        className="hidden lg:block bg-[url('https://i.imgur.com/yeuSflO.jpeg')]
                   bg-no-repeat bg-cover bg-center"
      ></div>

      {/* --- Lado direito (formulário) --- */}
      <div className="flex items-center justify-center bg-[#de2120]">
        <form
          onSubmit={login}
          className="bg-white p-10 rounded-2xl shadow-xl w-11/12 max-w-md flex flex-col gap-6"
        >
          <h2 className="text-4xl font-bold text-center text-black mb-2">
            Entrar
          </h2>
          <p className="text-center text-sm text-gray-600 mb-4">
            Bem-vindo(a) de volta! Faça login para continuar.
          </p>

          {/* Campo Usuário */}
          <div className="flex flex-col gap-1">
            <label htmlFor="usuario" className="text-black font-medium">
              Usuário
            </label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Digite seu e-mail"
              value={usuarioLogin.usuario}
              onChange={atualizarEstado}
              className="border border-gray-400 rounded-md p-2 focus:outline-none focus:border-[#0F2C50] transition"
            />
          </div>

          {/* Campo Senha */}
          <div className="flex flex-col gap-1">
            <label htmlFor="senha" className="text-black font-medium">
              Senha
            </label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Digite sua senha"
              value={usuarioLogin.senha}
              onChange={atualizarEstado}
              className="border border-gray-400 rounded-md p-2 focus:outline-none focus:border-[#0F2C50] transition"
            />
          </div>

          {/* Botão de Login */}
          <button
            type="submit"
            disabled={isLoading}
            className="rounded-md bg-[#de2120] hover:bg-[#fdc943] text-white font-semibold py-2 transition-colors duration-300 flex justify-center items-center"
          >
            {isLoading ? <ClipLoader color="#ffffff" size={22} /> : "Entrar"}
          </button>

          {/* Separador */}
          <hr className="border-gray-300 my-4" />

          {/* Link para cadastro */}
          <p className="text-center text-black text-sm">
            Ainda não tem uma conta?{" "}
            <Link
              to="/cadastro"
              className="text-[#1360bb] font-semibold hover:underline"
            >
              Cadastre-se
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
