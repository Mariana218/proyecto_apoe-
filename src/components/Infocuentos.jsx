import { Psonajes } from "./Psonajes"


export const Infocuentos = () => {
  return (
    <>
     
     <div className="container mt-n3 pt-5 bg-black min-vh-100">
      <div 
        className="position-relative overflow-hidden rounded-3 shadow-lg mx-3 mt-3"
        style={{
          minHeight: '450px',
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), #1a0b0b), url('/negro.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#000'
        }}
      >
        <div className="position-absolute bottom-0 start-0 p-5 w-100">
          <div className="container">
            <p className="text-success fw-bold mb-1 small" style={{ letterSpacing: '2px' }}>
              CUENTO DE EDGAR ALLAN POE
            </p>

            <h1 className="display-3 fw-bold text-white mb-2" style={{ fontFamily: 'serif' }}>
              EL GATO NEGRO
            </h1>

            <p className="lead text-light opacity-75 mb-4 w-75">
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

      <div className="container py-5 px-4">
        <div className="d-flex align-items-center mb-5">
          <div style={{ width: '40px', height: '1px', backgroundColor: '#69bd56' }}></div>
          <h5 className="ms-3 mb-0 text-success fw-bold subtitulo" style={{ letterSpacing: '3px', fontSize: '0.9rem', color: '#69bd56' }}>
            PERSONAJES
          </h5>
          <div className="ms-3" style={{ width: '40px', height: '1px', backgroundColor: '#69bd56' }}></div>
        </div>
    
          </div>

          <Psonajes/>

        </div>

    </>
)
}
