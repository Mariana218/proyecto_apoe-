import { Link } from 'react-router-dom'
import '../stylesheets/tipografias.css'

export const Lectura = ({ superior, titulo, texto, letra, image }) => {
  return (
    <div className="container-fluid min-vh-100 bg-black text-white p-0 overflow-hidden">

      <div className="row g-0 justify-content-center">

        <div className="ccol-12 col-md-10">

        <nav className="d-flex justify-content-between pt-5 mt-4 align-items-center px-3 px-md-4 py-3 border-bottom border-secondary">
        <Link to='/' className="parrafo btn btn-link p-0 text-decoration-none small">
          <i className="bi bi-arrow-left"></i> ← VOLVER
        </Link>
          <div className="titulo2 text-uppercase small fw-bold text-truncate mx-2">
            <i className="bi bi-book me-2 text-danger"></i> {superior}
          </div>
          <div className="parrafo small opacity-50 text-nowrap">1 / 5</div>
        </nav>

        <div
          className="background d-flex align-items-center"
          style={{
            height: '60vh',
            backgroundImage: 'linear-gradient(to bottom, rgba(31, 16, 16, 0.78), #000000),)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="container px-4">
            <p className=" subtitulo small mb-0 opacity-75">EDGAR ALLAN POE</p>
            <h1 className="display-4 display-md-2 fw-bold">{titulo}</h1>
          </div>
        </div>


        <div className="py-4 py-md-5 mb-5 pb-5 mt-5 pt-5">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 px-4 m-5 ">
              <p className="texto lead lh-lg text-secondary-custom fs-6" style={{ textAlign: 'justify' }}>
                <span className="display-4 text-danger float-start me-3 mt-1" style={{ fontFamily: 'serif', lineHeight: '1', fontSize: '4rem', }}>{letra}</span>{texto}
              </p>
            </div>
          </div>
        </div>


        <footer className="fixed-bottom bg-black py-4 border-top border-secondary">
          <div className="parrafo container d-flex justify-content-between align-items-center px-5">
            <button className="btn btn-link text-secondary text-decoration-none small disabled">
              <i className="bi bi-chevron-left"></i> ANTERIOR
            </button>

            {/* Indicadores de página (Puntos) */}
            <div className="d-flex gap-2">
              <div className="rounded-circle bg-danger shadow-lg"></div>
              {[...Array(5)].map((_, i) => (
                <div key={i} className="rounded-circle bg-secondary opacity-50" style={{ width: '8px', height: '8px' }}></div>
              ))}
            </div>

            <button className="parrafo btn btn-link text-white text-decoration-none small fw-bold">
              SIGUIENTE <i className="bi bi-chevron-right text-danger"></i>
            </button>
          </div>
        </footer>
        </div>

      </div>

    </div>
  )
}
