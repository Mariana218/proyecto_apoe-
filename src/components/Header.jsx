import "../stylesheets/Header.css"

export const Header = () => {
  return (
    <>

      <nav className="navbar navbar-dark bg-black fixed-top">
        <div className="container-fluid d-flex justify-content-start gap-5">
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a style={{
                  fontFamily: "Times New Roman, Times, serif",
                }} className="navbar-brand" href="#">Apoe!</a>
          <div style={{ background: 'linear-gradient(135deg, #1d0b0b 0%, #0d0d0d 100%)', borderRadius: '15px'
           }} className="offcanvas offcanvas-start text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div style={{ background: 'transparent' }} className="offcanvas-header">
              <div className="bg-white rounded-circle d-flex justify-content-center align-items-center mb-3" style={{ width: '50px', height: '50px' }}>
                <img className="" src="/logo.png" alt="" />
              </div>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div style={{ background: 'transparent' }} className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Cuentos
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li><a className="dropdown-item" href="#">Gato negro</a></li>
                    <li><a className="dropdown-item" 
                    href="#">Corazón delator</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Nosotros</a>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
