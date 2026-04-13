import { Psonajes } from '../components/Psonajes'
import '../stylesheets/tipografias.css'


export const Gatonegro = () => {
  return (
    <>
      <div className="container mt-n3 pt-5 bg-black min-vh-100">
        <div
          className="card position-relative overflow-hidden rounded-3 shadow-lg mx-3 mt-3"
        >
          <div className="position-absolute bottom-0 start-0 p-5 w-100">
            <div className="container">
              <p className="subtitulo fw-bold mb-1 small">
                CUENTO DE EDGAR ALLAN POE
              </p>

              <h1 className="titulo2 display-3 fw-bold text-white mb-2">
                EL GATO NEGRO
              </h1>

              <p className="parrafo lead  mb-4 w-75">
                El descenso a la locura, la culpa y la perversidad de un hombre.
              </p>

              <div className="d-flex gap-3">
                <button className="btn btn-danger px-4 py-2 fw-bold d-flex align-items-center shadow">
                  <i className="bi bi-book-half me-2"></i> INICIAR LECTURA
                </button>

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
            <Psonajes className="col-12 col-md-4" letra="F" titulo="FRANK" habilidad="Sensibilidad inicial y amor por los animales" defecto="Alcoholismo, perversidad e irracionalidad" />
            <Psonajes className="col-12 col-md-4" letra="G" titulo="GATO NEGRO (PLUTÓN)" habilidad="Gran afecto y lealtad" defecto="Detonante de la locura del narrador" />
            <Psonajes className="col-12 col-md-4" letra="K" titulo="KATHERINE" habilidad="Dócil y amorosa" defecto="Víctima de la perversidad de Frank" />
          </div>


        </div >


      </div>

    </>
  )
}
