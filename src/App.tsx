import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import { AuthProvider } from './contexts/AuthContext'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import 'react-toastify/dist/ReactToastify.css'
import ListaProdutos from './components/produto/listaproduto/ListaProduto'

function App() {
	return (
		<>
			<AuthProvider>
				<ToastContainer />
				<BrowserRouter>
					<Navbar />
					<div className="min-h-[80vh]">
						<Routes>
							<Route path="/" element={<Login />} />
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