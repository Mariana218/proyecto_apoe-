
export const personajes = () => {
  return (

    <>
    
    <div className="row g-4">
          <div className="col-12 col-md-4">
            <div className="card h-100 border-secondary-subtle p-4 text-white shadow-sm" style={{ backgroundColor: '#121212' }}>
              <div className="rounded-circle border border-danger d-flex align-items-center justify-content-center mb-3" 
                   style={{ width: '45px', height: '45px', color: '#ff4444', backgroundColor: 'rgba(255, 68, 68, 0.05)' }}>
                F
              </div>
              <h5 className="card-title mb-4 fw-bold" style={{ fontFamily: 'serif' }}>FRANK</h5>
              <div className="mb-3">
                <p className="text-success small fw-bold mb-1">● HABILIDAD</p>
                <p className="text-secondary small">Sensibilidad inicial y amor por los animales</p>
              </div>
              <div>
                <p className="text-danger small fw-bold mb-1">● DEFECTO</p>
                <p className="text-secondary small">Alcoholismo, perversidad e irracionalidad</p>
              </div>
            </div>
          </div>
            </div>    
    
    </>

)
}
