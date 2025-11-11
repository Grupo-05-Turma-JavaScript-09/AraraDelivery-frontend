import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DeletarCategoria from './components/categoria/deletarcategoria/DeletarCategoria';
import FormCategoria from './components/categoria/formcategoria/FormCategoria';
import ListaCategorias from './components/categoria/listacategoria/ListaCategoria';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import ListaProdutos from './components/produto/listaproduto/ListaProduto';
import { AuthProvider } from './contexts/AuthContext';
import Cadastro from './pages/cadastro/Cadastro';
import CategoriaPagina from './pages/categoriapagina/CategoriaPagina';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Perfil from './pages/perfil/Perfil';
import ProdutoPagina from './pages/produtopagina/ProdutoPagina';
import SobreNos from './pages/sobrenos/Sobrenos';

function App() {
	return (
		<>
			<AuthProvider>
				<ToastContainer />
				<BrowserRouter>
					<Navbar />
					<div className="min-h-[80vh]">
						<Routes>
							{/* Rotas públicas */}
							<Route path="/" element={<Login />} />
							<Route path="/login" element={<Login />} />
							<Route path="/cadastro" element={<Cadastro />} />
							
							{/* Rotas privadas */}
							<Route path="/home" element={<Home />} />
							<Route path="/perfil" element={<Perfil />} />
							
							{/* Rotas de Produto */}
							<Route path="/produtos" element={<ProdutoPagina />} />
							<Route path="/produtos/listar" element={<ListaProdutos />} />
							<Route path="/produtos/cadastrar" element={<ListaProdutos />} />
							
							{/* Rotas de Categoria */}
							<Route path="/categorias" element={<CategoriaPagina />} />
							<Route path="/categorias/listar" element={<ListaCategorias />} />
							<Route path="/categorias/cadastrar" element={<FormCategoria />} />
							<Route path="/categorias/deletar/:id" element={<DeletarCategoria />} />
							<Route path="/categorias/editar/:id" element={<FormCategoria />} />

            <Route path="/sobre" element={<SobreNos />} />

						</Routes>
					</div>
					<Footer />
				</BrowserRouter>
			</AuthProvider>
		</>
	)
}

export default App