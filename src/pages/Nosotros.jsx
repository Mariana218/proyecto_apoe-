
export const Nosotros = () => {
  return (
    <>
    
    <section className="container-fluid bg-black text-white py-5 px-4">
      <div className="container text-center">
        
        {/* Título Principal */}
        <div className="mb-5">
          <h2 className="display-4 fw-bold mb-3" style={{ fontFamily: 'serif', letterSpacing: '5px' }}>
            NOSOTROS
          </h2>
          <div className="mx-auto" style={{ width: '60px', height: '3px', backgroundColor: '#dc3545' }}></div>
        </div>

        {/* Texto Introductorio */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8">
            <p className="lead opacity-75" style={{ lineHeight: '1.8' }}>
              Somos aprendices del programa de <span className="text-danger fw-bold">Producción Multimedia</span> del SENA, 
              apasionados por la narrativa visual y el arte del cómic. Este proyecto nace del deseo de acercar 
              la literatura clásica de Edgar Allan Poe a nuevas audiencias a través de un formato gráfico e interactivo.
            </p>
          </div>
        </div>

        {/* Tarjetas de Misión y Visión */}
        <div className="row g-4 justify-content-center">
          
          {/* Tarjeta Misión */}
          <div className="col-md-5">
            <div className="card h-100 border-0 p-4 shadow-lg" 
                 style={{ backgroundColor: '#1a0b0b', borderRadius: '15px' }}>
              <div className="card-body">
                <h3 className="h4 mb-4 fw-bold" style={{ fontFamily: 'serif', letterSpacing: '2px' }}>
                  MISIÓN
                </h3>
                <p className="card-text text-secondary">
                  Fomentar el hábito de la lectura en jóvenes mediante adaptaciones 
                  visuales atractivas de obras literarias clásicas.
                </p>
              </div>
            </div>
          </div>

          {/* Tarjeta Visión */}
          <div className="col-md-5">
            <div className="card h-100 border-0 p-4 shadow-lg" 
                 style={{ backgroundColor: '#1a0b0b', borderRadius: '15px' }}>
              <div className="card-body">
                <h3 className="h4 mb-4 fw-bold" style={{ fontFamily: 'serif', letterSpacing: '2px' }}>
                  VISIÓN
                </h3>
                <p className="card-text text-secondary">
                  Convertirnos en un referente de producción multimedia educativa que 
                  inspire a nuevas generaciones de lectores.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    
    </>   
  )
}
