
export const Tarjetas = ({ icon, title, description }) => {
  return (
    <>

      <div className="col-12 col-md-6 col-lg-3 mb-4 text-center rounded-4" style={{ background: 'linear-gradient(135deg, #1d0b0b 0%, #0d0d0d 100%)' }}>
        <div className="icon-wrapper mb-4" style={{ color: "iconColor" }}>
          {icon}
        </div>
        <h2 className="feature-title mb-3 text-white fs-5">{title}</h2>
        <p style={{
          color: "#9d8f7b",
          fontSize: "14px"
        }} className="parrafo">{description}</p>
      </div>

    </>
  )
}
