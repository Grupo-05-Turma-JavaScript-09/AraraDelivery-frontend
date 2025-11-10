import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import { AuthProvider } from './contexts/AuthContext'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import 'react-toastify/dist/ReactToastify.css'
import ListaProdutos from './components/produto/listaproduto/ListaProduto'
import Cadastro from './pages/cadastro/Cadastro'

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
							<Route path="/produtos" element={<ListaProdutos />} />
						</Routes>
					</div>
					<Footer />
				</BrowserRouter>
			</AuthProvider>
		</>
	)
}

export default App