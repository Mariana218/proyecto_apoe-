import { Link } from "react-router-dom"
import { Psonajes } from "../components/Psonajes"
import '../stylesheets/tipografias.css'


export const Corazon = () => {
  return (
    <>

      <div className="container mt-n3 pt-5 bg-black min-vh-100">
        <div
          className="card2 position-relative overflow-hidden rounded-3 shadow-lg mx-3 mt-3"
        >
          <div className="position-absolute bottom-0 start-0 p-5 w-100">
            <div className="container">
              <Link to='/' className="parrafo btn btn-link w- text-decoration-none small mb-5 pb-5">
              <i className="bi bi-arrow-left me-2"></i> ← VOLVER
              </Link>
              <p className="subtitulo fw-bold mb-1 small">
                CUENTO DE EDGAR ALLAN POE
              </p>

              <h1 className="titulo2 display-3 fw-bold text-white mb-2">
                El Corazón Delator
              </h1>

              <p className="parrafo lead  mb-4 w-75">
                El ojo de buitre, la obsesión y el latido incesante de la culpa.
              </p>

              <div className="d-flex gap-3">
                <Link to='/Cuentoc' className="btn btn-danger px-4 py-2 fw-bold d-flex align-items-center shadow">
                  <i className="bi bi-book-half me-2"></i> INICIAR LECTURA
                </Link>

                <button className="btn btn-outline-light px-4 py-2 fw-bold opacity-75 border-secondary">
                  <i className="bi bi-heart me-2"></i> FAVORITO
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="containerpersonajes py-5 px-4">
          <div className="d-flex align-items-center mb-5">
            <div className="lineas"></div>
            <h5 className="subtitulo ms-3 mb-0 fs-6 fw-bold">
              PERSONAJES
            </h5>
            <div className="ms-3 lineas"></div>
          </div>

          <div className="row g-4 d-flex flex-wrap justify-content-center">
            <div className="col">
            <Psonajes className="col-12 col-md-4" letra="T" titulo="TAKESHI (EL ASESINO)" habilidad="Paciencia y meticulosidad extrema" defecto="La locura disfrazada de razón" />
            </div>
            <div className="col">
            <Psonajes className="col-12 col-md-4" letra="S" titulo="SATOSHI (EL ANCIANO)" habilidad="Maestro sabio y bondadoso" defecto="Su ojo de buitre atormenta al narrador" />
            </div>
          </div>


        </div >


      </div>

    </>
  )
}
