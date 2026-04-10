import { Footer } from '../components/Footer'

import { Tarjetas } from '../components/Tarjetas'
import '../stylesheets/Inicio.css'
import { Corazon } from './Corazon'
import { Gatonegro } from './Gatonegro'
import { Nosotros } from './Nosotros'

export const Inicio = () => {
  return (
    <>
      <div className="container-fluid p-0 m-0">
        <div className="row m-0 p-0">
          <div className="col-12 m-0 p-0">
            <div className="fondo" style={{
              backgroundImage: "radial-gradient(circle, rgba(0, 0, 0, 0.22), rgb(0, 0, 0)80%), url('./image.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>

              <section className="m-5 text-center text-white p-5 h-100" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <h1 style={{
                  fontSize: "9rem",
                  fontFamily: "Times New Roman, Times, serif",
                  color: '#e27b7b'
                }} className='fw-bold m-5 pt-5'>APOE!</h1>
                <h2 style={{
                  fontFamily: "Times New Roman, Times, serif",
                }} className=' text-uppercase mb-4'>Reconecta con el Misterio y la Lectura</h2>
                <p style={{
                  fontFamily: "Times New Roman, Times, serif",
                  color: '#9d8f7b',
                }} className='w-50 fs-5 mx-auto'>Libro digital interactivo que ilustra y narra las obras de Edgar Allan Poe de una manera accesible, visual y emocionalmente atractiva.</p>
                <button className="btn btn-lg px-3 py-2 shadow fs-5 mt-3" style={{
                  backgroundColor: '#c84b4b',
                  color: 'white',
                  borderRadius: '5px',
                  fontWeight: 'bold',
                  border: 'none',
                  fontWeight: 'normal'
                }}>
                  INICIAR LECTURA ↓
                </button>
              </section>

              <section className="bg-black section1 m-0 p-6" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                <div className="container text-center text-white">
                  <p style={{ color: '#69bd56' }} className="text-success-custom mb-1 text-uppercase fw-light letter-spacing-2">
                    Proyecto Apoe!
                  </p>
                  <h2 style={{
                    fontFamily: "Times New Roman, Times, serif",
                  }} className="display-4 title-font fs-1 mb-4">OBJETIVO CENTRAL</h2>

                  <p style={{
                    fontFamily: "Times New Roman, Times, serif",
                    color: '#9d8f7b',
                  }} className="lead description-text mx-auto mb-5 w-50">
                    Reconectar con el placer de la lectura mediante una experiencia digital ilustrada,
                    flexible y adaptada a los estilos de vida actuales, desarrollando habilidades
                    cognitivas y emocionales a través de las obras de Poe.
                  </p>

                  <div style={{ background: 'linear-gradient(135deg, #1d0b0b 0%, #0d0d0d 100%)' }} className="creadores-card mx-auto p-4 p-md-5 w-50 rounded-4">
                    <p style={{ color: '#69bd56' }} className="text-success-custom mb-3 text-uppercase fw-light letter-spacing-2">
                      Creadores del Proyecto</p>


                    <div style={{ fontFamily: "Times New Roman, Times, serif" }} className="row justify-content-center gap-4 gap-md-0">

                      <div className="col-md-5 d-flex flex-column align-items-center">
                        <div style={{
                          color: '#c84b4b',
                          fontSize: '2rem',
                        }} className="avatar avatar-red mb-3 rounded-circle">NA</div>
                        <h3 className="h5 name-text">NICOLÁS ATEHORTUA</h3>
                      </div>

                      <div className="col-md-5 d-flex flex-column align-items-center">
                        <div style={{
                          color: '#69bd56',
                          fontSize: '2rem',
                        }} className="avatar avatar-green mb-3 rounded-circle">MM</div>
                        <h3 className="h5 name-text">MARIANA MARTÍNEZ</h3>
                      </div>
                    </div>
                    <p style={{
                      fontFamily: "Times New Roman, Times, serif",
                      color: '#9d8f7b',
                      fontWeight: 'italic light',
                    }} className="mt-3 quote-text">
                      "Buscamos crear una comunidad de 'cuervos lectores' para fomentar la conexión con la lectura de nuevo, dando honor a Poe."
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <div className="container">
                  <h1 style={{
                    fontSize: "3rem",
                    fontFamily: "Times New Roman, Times, serif",
                    color: '#e27b7b'
                  }} className="section-title text-center mb-2 mt-5 pt-5 fw-bold">¿POR QUÉ APOE!?</h1>

                  <div style={{
                    fontFamily: "Times New Roman, Times, serif",
                  }} className="row justify-content-center gap-5 p-4 p-md-5" >

                    <div style={{
                      background: 'linear-gradient(135deg, #1d0b0b 0%, #0d0d0d 100%)',
                      borderRadius: '15px',
                    }} className="col-lg-5">
                      <div className="apoe-card card-problema p-4 p-md-5 h-100">
                        <div className="d-flex align-items-center mb-4">
                          <div className="icon-circle circle-red me-3">
                            <span>⚠️</span>
                          </div>
                          <h4 className="card-header-title m-0 text-white">EL PROBLEMA</h4>
                        </div>
                        <ul style={{ color: '#9d8f7b' }} className="list-unstyled custom-list lh-lg">
                          <li>El 75.6% de jóvenes entre 18-30 años no mantiene hábitos de lectura constantes.</li>
                          <li>Falta de tiempo, cansancio mental y dificultad para concentrarse.</li>
                          <li>Más del 75% tiene dificultades para encontrar libros que conecten con sus intereses.</li>
                          <li>La experiencia lectora tradicional no responde a audiencias visuales e interactivas.</li>
                        </ul>
                      </div>
                    </div>


                    <div style={{ background: 'linear-gradient(135deg, #1d0b0b 0%, #0d0d0d 100%)', borderRadius: '15px' }} className="col-lg-5">
                      <div className="apoe-card card-solucion p-4 p-md-5 h-100">
                        <div className="d-flex align-items-center mb-4">
                          <div className="icon-circle circle-green me-3">
                            <span>💡</span>
                          </div>
                          <h3 className="card-header-title m-0 text-white">LA SOLUCIÓN</h3>
                        </div>
                        <ul style={{ color: '#9d8f7b' }} className="list-unstyled custom-list lh-lg">
                          <li>Lectura digital ilustrada: cuentos clásicos transformados en experiencias visuales.</li>
                          <li>Narración de audio integrada para una experiencia sensorial completa.</li>
                          <li>Interacciones y elementos multimedia que hacen amena la lectura.</li>
                          <li>Flexible y adaptada a los estilos de vida actuales — lee cuando quieras.</li>
                        </ul>
                      </div>
                    </div>

                  </div>
                </div>
              </section>

              <section className="bg-black d-flex p-0 w-75 gap-4 mt-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', 
              fontFamily: "Times New Roman, Times, serif",
              position: 'relative',
              left: '13%',
              }}>
              <Tarjetas icon="👁️" title="Ilustraciones Originales" description="Arte gótico único para cada cuento" /> 
              <Tarjetas icon="🔊" title="Audio Narración" description="Escucha mientras disfrutas" /> 
              <Tarjetas icon="📚" title="Interactivo" description="Elementos que te sumergen" /> 
              <Tarjetas icon="👥" title="Comunidad" description="Cuervos lectores conectados" /> 
              </section>

              <section>
                <div className='d-flex justify-content-center'>
                <img className='w-75 mt-4' src="/cuervo.png" alt="" /><img/>
                </div>
                <Gatonegro/>
                <div className='d-flex justify-content-center'>
                <img className='w-75 mt-4' src="/cuervo.png" alt="" /><img/>
                </div>
                <Corazon/>
                <Nosotros/>
                <Footer/>
              </section>

            </div>
          </div>
        </div>

      </div>


      

    </>
  )
}
