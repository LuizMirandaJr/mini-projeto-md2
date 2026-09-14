import { BrowserRouter, Routes, Route } from "react-router-dom"
import CarrinhoPage from "./pages/CarrinhoPage"
import PagamentoPage from "./pages/PagamentoPage"
import SucessoPagamento from "./pages/SucessoPage"
import FalhaPagamento from "./pages/FalhaPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CarrinhoPage />} />
        <Route path="/pagamento" element={<PagamentoPage />} />
        <Route path="/sucesso" element={<SucessoPagamento />} />
        <Route path="/falha" element={<FalhaPagamento />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
