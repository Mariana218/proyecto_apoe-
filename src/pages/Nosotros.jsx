import '../stylesheets/tipografias.css';

export const Nosotros = () => {
  return (
    <>

      <section className="container-fluid bg-black text-white py-5 px-4">
        <div className="container text-center mb-4">


          <div className="mb-5">
            <h2 className="text-white fs-1 display-4 fw-light mb-3">
              NOSOTROS
            </h2>
            <div className="mx-auto" style={{ width: '60px', height: '3px', backgroundColor: '#dc3545' }}></div>
          </div>


          <div className="row justify-content-center mb-5">
            <div className=" col-lg-8">
              <p className="parrafo lead opacity-75">
                Somos aprendices del programa de <span className="text-danger fw-bold">Producción Multimedia</span> del SENA,
                apasionados por la narrativa visual y el arte del cómic. Este proyecto nace del deseo de acercar
                la literatura clásica de Edgar Allan Poe a nuevas audiencias a través de un formato gráfico e interactivo.
              </p>
            </div>
          </div>


          <div className="row g-4 justify-content-center">

            <div className="col-md-5">
              <div className="tarjeta2 rounded-3 p-4 shadow-lg" >
                <div className="card-body">
                  <h2 >
                    MISIÓN
                  </h2>
                  <p className="parrafo card-text">
                    Fomentar el hábito de la lectura en jóvenes mediante adaptaciones
                    visuales atractivas de obras literarias clásicas.
                  </p>
                </div>
              </div>
            </div>


            <div className="col-md-5">
              <div className="tarjeta2 rounded-3 p-4 shadow-lg" >
                <div className="card-body">
                  <h2>
                    VISIÓN
                  </h2>
                  <p className="parrafo card-text">
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
