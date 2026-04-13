import '../stylesheets/tipografias.css'

export const Lectura = ({superior, titulo, texto, letra, image}) => {
  return (
    <div className="min-vh-100 bg-black text-white p-0">

      <nav className="d-flex justify-content-between align-items-center px-4 py-3 border-bottom border-secondary">
        <button className="parrafo btn btn-link w- text-decoration-none small">
          <i className="bi bi-arrow-left me-2"></i> ← VOLVER
        </button>
        <div className="titulo2 text-uppercase small fw-bold">
          <i className="bi bi-book me-2 text-danger"></i> {superior}
        </div>
        <div className="parrafo small opacity-50">1 / 5</div>
      </nav>

      <div
        className="background position-relative w-100"
        style={{
        height: '60vh',
        backgroundImage: 'linear-gradient(to bottom, rgba(77, 41, 41, 0.26), #000000),)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',}}
      >
        <div className="container h-100 d-flex flex-column justify-content-center">
          <p className=" subtitulo small mb-0">EDGAR ALLAN POE</p>
          <h1 className="display-2 fw-bold">{titulo}</h1>
        </div>
      </div>


      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-7 w-75">
            <p className="texto lead lh-lg text-secondary-custom fs-6" style={{ textAlign: 'justify' }}>
              <span className="display-4 text-danger float-start me-3 mt-1" style={{ fontFamily: 'serif', lineHeight: '1', fontSize: '4rem' }}>{letra}</span>{texto}
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
  )
}
