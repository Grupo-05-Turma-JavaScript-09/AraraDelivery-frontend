import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import { ToastContainer } from "react-toastify"

function App() {

  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/home" element={<Home />}/>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
