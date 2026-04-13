import '../stylesheets/tipografias.css'

export const Psonajes = ({letra, titulo, habilidad, defecto}) => {
  return (
    <>
    
    <div className="row g-4">
          <div className="col-12 col-md-4 ms-3">
            <div className="tarjeta2 h-100 p-4 text-white shadow-sm">
              <div className="avatar-red rounded-circle d-flex align-items-center justify-content-center mb-3">
                {letra}
              </div>
              <h5 className="cardtitle mb-4 fw-bold">{titulo}</h5>
              <div className="mb-3">
                <p className="subtitulo small fw-bold mb-1">● HABILIDAD</p>
                <p className="parrafo fs-6">{habilidad}</p>
              </div>
              <div>
                <p className="subtitulo small fw-bold mb-1">● DEFECTO</p>
                <p className="parrafo fs-6">{defecto}</p>
              </div>
            </div>
          </div>
            </div>   

    </>
  )
}
