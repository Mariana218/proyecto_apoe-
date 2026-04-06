import '../stylesheets/Inicio.css'

export const Inicio = () => {
  return (
    <>
    
    <div className="fondo" style={{backgroundImage: "radial-gradient(circle, rgba(0, 0, 0, 0), rgb(0, 0, 0)80%), url('./image.jpg')",
    backgroundSize: 'cover', 
    backgroundPosition: 'center',}}>

    <div className="m-5 text-center text-white p-5 h-100" style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
    <h1 className=''>APOE!</h1>
    <p>Esta es la página de inicio de nuestra aplicación. Aquí puedes encontrar información general y enlaces a otras secciones.</p>
    </div>

    </div>

    </>
  )
}
