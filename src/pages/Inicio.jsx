
import '../stylesheets/tipografias.css'
import { Tarjetas } from '../components/Tarjetas'
import '../stylesheets/Inicio.css'
import { Corazon } from './Corazon'
import { Gatonegro } from './Gatonegro'
import { Nosotros } from './Nosotros'
import { Problema } from '../components/Problema'
import { Link } from 'react-router-dom'

export const Inicio = () => {
  return (
    <>
      <div className="container-fluid p-0 m-0 overflow-hidden">
        <div className="row m-0 p-0">
          <div className="col-12 m-0 p-0 ">
            <div className="fondo">
              <div className="banner-fondo m-2 m-md-5 text-center text-white p-3 p-md-5 h-100">
                <div className='my-4 my-md-5 py-4 py-md-5 d-flex align-items-center flex-column justify-content-center'>
                  <h1 className='fw-bold mt-5 pt-5 display-3' style={{fontSize:'6rem',}}>APOE!</h1>
                  <h2 className=' text-uppercase fs--md-2 mb-4'>Reconecta con el Misterio y la Lectura</h2>
                  <p className='parrafo w-100 w-md-75 w-lg-50 fs-5 mx-auto px-3'>Libro digital interactivo que ilustra y narra las obras de Edgar Allan Poe de una manera accesible, visual y emocionalmente atractiva.</p>
                  <Link to="/Cuentos" className="boton btn btn-lg px-3 py-2 shadow mt-3">
                    INICIAR LECTURA ↓
                  </Link>
                </div>
              </div>

              <section className="bg-black section1 m-0">
                <div className="container text-center text-white">
                  <p className="subtitulo text-success-custom mb-1 text-uppercase fw-light">
                    Proyecto Apoe!
                  </p>
                  <h2 className="display-4 title-font fs-1 mb-4 fw-bold">OBJETIVO CENTRAL</h2>
                  <p className="parrafo lead description-text mx-auto mb-5 w-50">
                    Reconectar con el placer de la lectura mediante una experiencia digital ilustrada,
                    flexible y adaptada a los estilos de vida actuales, desarrollando habilidades
                    cognitivas y emocionales a través de las obras de Poe.
                  </p>

                  <div className="col-7 col-md-8 col-sm-12 tarjeta creadores-card mx-auto p-4 p-md-5 rounded-4">
                    <p className="subtitulo text-success-custom mb-3 text-uppercase fw-light letter-spacing-2">
                      Creadores del Proyecto</p>


                    <div style={{ fontFamily: "Times New Roman, Times, serif" }} className="row justify-content-center gap-4 gap-md-4">

                      <div className="col-12 col-md-5 d-flex flex-column align-items-center">
                        <div style={{
                          color: '#c84b4b',
                          fontSize: '2rem',
                        }} className="avatar avatar-red mb-3 rounded-circle d-flex align-items-center justify-content-center">NA</div>
                        <h3 className="h5 name-text">NICOLÁS ATEHORTUA</h3>
                      </div>

                      <div className="col-12 col-md-5 d-flex flex-column align-items-center">
                        <div style={{
                          color: '#69bd56',
                          fontSize: '2rem',
                        }} className="avatar avatar-green mb-3 rounded-circle d-flex align-items-center justify-content-center">MM</div>
                        <h3 className="h5 name-text">MARIANA MARTÍNEZ</h3>
                      </div>
                    </div>
                    <p className="parrafo mt-3 quote-text">
                      "Buscamos crear una comunidad de 'cuervos lectores' para fomentar la conexión con la lectura de nuevo, dando honor a Poe."
                    </p>
                  </div>
                </div>
              </section>

              <section className="section2 mt-5 pt-5">
                <div className="container">
                  <h1 className="titulo text-center mb-2 mt-0 pt-5 fw-bold fs-1">¿POR QUÉ APOE!?</h1>

                  <div className="row justify-content-center gap-5 p-4 p-md-5" >

                    <Problema icon="⚠️" titulo="EL PROBLEMA" descripcion="El 75.6% de jóvenes entre 18-30 años no mantiene hábitos de lectura constantes.
                    Falta de tiempo, cansancio mental y dificultad para concentrarse.
                    Más del 75% tiene dificultades para encontrar libros que conecten con sus intereses.
                    La experiencia lectora tradicional no responde a audiencias visuales e interactivas." />

                    <Problema icon="💡" titulo="LA SOLUCIÓN" descripcion="Lectura digital ilustrada: cuentos clásicos transformados en experiencias visuales.
                    Narración de audio integrada para una experiencia sensorial completa.
                    Interacciones y elementos multimedia que hacen amena la lectura.
                    Flexible y adaptada a los estilos de vida actuales — lee cuando quieras." />

                  </div>
                </div>
              </section>

              <div className="container py-5 px-4">
              <div className="row d-flex flex-wrap g-3 g-lg-5 justify-content-center m-0">
                <Tarjetas icon="👁️" title="Ilustraciones Originales" description="Arte gótico único para cada cuento" />
                <Tarjetas icon="🔊" title="Audio Narración" description="Escucha mientras disfrutas" />
                <Tarjetas icon="📚" title="Interactivo" description="Elementos que te sumergen" />
                <Tarjetas icon="👥" title="Comunidad" description="Cuervos lectores conectados" />
              </div>
              </div>           

              <section className="row mt-5 pt-5">
                <div className='d-flex justify-content-center'>
                  <img className='w-75 mt-4' src="/cuervo.png" alt="" /><img />
                </div>
                <Gatonegro />
                <div className='d-flex justify-content-center'>
                  <img className='w-75 mt-4' src="/cuervo.png" alt="" /><img />
                </div>
                <Corazon />
                <Nosotros />
                
              </section>

            </div>
          </div>
        </div>

      </div>




    </>
  )
}
