import '../stylesheets/tipografias.css'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <>

      <nav className="navbar navbar-dark bg-black fixed-top">
        <div className="container d-flex justify-content-start gap-5">
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link to='/' className="parrafo navbar-brand" href="#">Apoe!</Link>

          <div style={{
            background: 'linear-gradient(135deg, #1d0b0b 0%, #0d0d0d 100%)', borderRadius: '15px'
          }} className="offcanvas offcanvas-start text-bg-dark text-center" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div style={{ background: 'transparent' }} className="offcanvas-header">

              <div className='logo bg-white rounded-circle p-3 mt-4'>
                <img src="/apoe.png" alt="" />
              </div>

              <button type="button" className="btn-close btn-close-white mb-5 me-1" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div style={{ background: 'transparent' }} className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link to='/' className="nav-link active" aria-current="page" href="#">✪ Inicio</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link to='/Cuentos' className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    ✒ Cuentos
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-dark bg-black">
                    <li><Link to='/Gatonegro' className="dropdown-item" href="#">🐈‍⬛ Gato Negro</Link></li>
                    <li><Link to='Corazon' className="dropdown-item"
                      href="#">🫀 Corazón Delator</Link></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to='Nosotros' className="nav-link" href="#">⍟ Nosotros</Link>
                </li>
              </ul>

            </div>
            <p className="parrafo d-flex justify-content-center justify-content-end">© 2026 Apoe! - Todos los derechos reservados.</p>
          </div>
        </div>
      </nav>
    </>
  )
}
