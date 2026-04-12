import '../stylesheets/Inicio.css'

export const Problema = ({icon, titulo, descripcion}) => {
  return (
    <>
    
    <div className="problema col-lg-5">
                      <div className="apoe-card card-problema p-4 p-md-5 h-100">
                        <div className="d-flex align-items-center mb-4">
                          <div className="icon-circle circle-red me-3">
                            <span>{icon}</span>
                          </div>
                          <h4 className="card-header-title m-0 text-white">{titulo}</h4>
                        </div>
                        <ul className="parrafo list-unstyled custom-list lh-lg">{descripcion}
                        </ul>
                      </div>
                    </div>
    </>
  )
}
