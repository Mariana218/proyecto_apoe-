
export const Lectura = () => {
  return (
    <div className="min-vh-100 bg-black text-white p-0">
      {/* Barra de navegación superior */}
      <nav className="d-flex justify-content-between align-items-center px-4 py-3 border-bottom border-secondary">
        <button className="btn btn-link text-white text-decoration-none small">
          <i className="bi bi-arrow-left me-2"></i> VOLVER
        </button>
        <div className="text-uppercase small fw-bold" style={{ letterSpacing: '2px' }}>
          <i className="bi bi-book me-2 text-danger"></i> EL GATO NEGRO
        </div>
        <div className="small opacity-50">1 / 8</div>
      </nav>

      {/* Hero de Lectura */}
      <div 
        className="position-relative w-100" 
        style={{ 
          height: '60vh', 
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.9) 20%, transparent), url('/link-dos.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container h-100 d-flex flex-column justify-content-center">
          <p className="text-success small fw-bold mb-0">EDGAR ALLAN POE</p>
          <h1 className="display-2 fw-bold" style={{ fontFamily: 'serif' }}>EL GATO NEGRO</h1>
        </div>
      </div>

      {/* Contenido del Texto */}
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-7">
            <p className="lead lh-lg text-secondary-custom" style={{ textAlign: 'justify', fontSize: '1.2rem' }}>
              <span className="display-4 text-danger float-start me-3 mt-1" style={{ fontFamily: 'serif', lineHeight: '1' }}>D</span>
              esde mi más tierna infancia me distinguí por la docilidad y la humanidad de mi 
              carácter. La ternura de mi corazón era tan grande que me convertía en objeto de 
              burla para mis compañeros. Sentía especial predilección por los animales, y mis padres 
              me permitieron tener una gran variedad de favoritos.
            </p>
          </div>
        </div>
      </div>

      {/* Navegación inferior (Footer) */}
      <footer className="fixed-bottom bg-black py-4 border-top border-secondary">
        <div className="container d-flex justify-content-between align-items-center px-5">
          <button className="btn btn-link text-secondary text-decoration-none small disabled">
            <i className="bi bi-chevron-left"></i> ANTERIOR
          </button>
          
          {/* Indicadores de página (Puntos) */}
          <div className="d-flex gap-2">
            <div className="rounded-circle bg-danger shadow-lg" style={{ width: '10px', height: '10px' }}></div>
            {[...Array(5)].map((_, i) => (
              <div key={i} className="rounded-circle bg-secondary opacity-50" style={{ width: '8px', height: '8px' }}></div>
            ))}
          </div>

          <button className="btn btn-link text-white text-decoration-none small fw-bold">
            SIGUIENTE <i className="bi bi-chevron-right text-danger"></i>
          </button>
        </div>
      </footer>
    </div>
  )
}
