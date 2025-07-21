import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import Layout from "./components/layout/Layout"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Products from "./pages/Products"
import Company from "./pages/Company"
import Contact from "./pages/Contact"
import ServiceDetail from "./pages/ServiceDetail"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/servicios/:serviceId" element={<ServiceDetail />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/empresa" element={<Company />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
        <Toaster position="top-right" />
      </div>
    </Router>
  )
}

export default App
