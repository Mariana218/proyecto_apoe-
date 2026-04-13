import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Corazon } from "./pages/Corazon"
import { Cuento } from "./pages/Cuento"
import { Cuento2 } from "./pages/Cuento2"
import { Gatonegro } from "./pages/Gatonegro"
import { Inicio } from "./pages/Inicio"
import { Nosotros } from "./pages/Nosotros"


export const App = () => {
  return (
    <>
    
      <BrowserRouter>

        <Header/>

        <Routes>
          <Route path="/" element={<Inicio/>}/>
          {/* <Route path="/Cuentos" element={<Gatonegro/>}/>
          <Route path="/Gatonegro" element={<Gatonegro/>}/>
          <Route path="/Corazon" element={<Corazon/>}/>
          <Route path="/Nosotros" element={<Nosotros/>}/>
          <Route path="/Cuento" element={<Cuento/>}/>
          <Route path="/Cuentoc" element={<Cuento2/>}/> */}
        </Routes>

        <Footer/>
        
      </BrowserRouter>

    </>
  )
}
