import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CategoriaPagina = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E0F7F4] via-[#F0FFF8] to-[#FFFBEA] py-16">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="w-24 h-24 bg-white rounded-3xl shadow-xl flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-12 h-12 text-[#02735E]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
          </div>
          <h1 className="text-4xl font-extrabold text-[#014034] mb-3 tracking-tight">
            Gerenciar Categorias
          </h1>
          <p className="text-lg text-gray-600 max-w-md mx-auto">
            Organize suas categorias e ajude o Arara Delivery a{" "}
            <span className="text-[#02735E] font-semibold">voar mais alto</span>.
          </p>
        </motion.div>

        {/* Cards de Ação */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Cadastrar Categoria */}
          <Link to="/categorias/cadastrar" className="group">
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white border border-gray-100 rounded-3xl shadow-lg hover:shadow-2xl p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#02735E]/10 to-[#36BFB1]/20 rounded-full -translate-y-16 translate-x-16"></div>

              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-[#02735E] to-[#36BFB1] rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-105 transition-transform">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>

                <h2 className="text-2xl font-bold text-[#014034] mb-3">
                  Cadastrar Categoria
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Crie novas categorias e ajude seus produtos a decolarem.
                </p>

                <div className="flex items-center text-[#02735E] font-semibold">
                  <span>Nova categoria</span>
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Listar Categorias */}
          <Link to="/categorias/listar" className="group">
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white border border-gray-100 rounded-3xl shadow-lg hover:shadow-2xl p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FBBF24]/20 to-[#F59E0B]/30 rounded-full -translate-y-16 translate-x-16"></div>

              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-[#FBBF24] to-[#F59E0B] rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-105 transition-transform">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>

                <h2 className="text-2xl font-bold text-[#014034] mb-3">
                  Listar Categorias
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Visualize, edite e conecte-se com o coração do seu catálogo.
                </p>

                <div className="flex items-center text-[#F59E0B] font-semibold">
                  <span>Ver categorias</span>
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          </Link>
        </div>

        {/* Categorias Populares */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 bg-white rounded-3xl shadow-lg p-10 border border-gray-100"
        >
          <h3 className="text-2xl font-bold text-[#014034] mb-10 text-center">
            Categorias Populares
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { nome: "Sanduíches", cor: "from-[#10B981]/10 to-[#34D399]/20" },
              { nome: "Bebidas", cor: "from-[#2563EB]/10 to-[#60A5FA]/20" },
              { nome: "Pizzas", cor: "from-[#F59E0B]/10 to-[#FCD34D]/20" },
              { nome: "Sobremesas", cor: "from-[#F43F5E]/10 to-[#FB7185]/20" },
            ].map((cat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className={`text-center p-5 bg-gradient-to-br ${cat.cor} rounded-2xl cursor-pointer shadow-sm hover:shadow-md transition-all`}
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 shadow-sm">
                  <svg
                    className="w-6 h-6 text-[#02735E]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 6v12m6-6H6"
                    />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-[#014034]">
                  {cat.nome}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CategoriaPagina;
